import { getXataClient } from "$lib/server/xata/client";
import { z } from "zod";
import type { RequestEvent } from "./$types";
import { isValidPasswordHash } from "$lib/util/password";
import { SESSION_COOKIE_NAME, createdNewSession } from "$lib/server/userinfo";

export async function POST(event: RequestEvent) {
    const rbody = await event.request.json();
    const xata = getXataClient();
    const body = z.object({
        email: z.string(),
        password: z.string()
    }).parse(rbody);

    const user = await xata.db.identities.getFirst({
        filter: {
            email: body.email
        }
    })

    if (!user) {
        return Response.json({ message: "That email does not exist" }, { status: 401 })
    }

    const valid = await isValidPasswordHash(user.password_hash, body.password)

    if (valid) {
        const session = await createdNewSession(user.id);
        event.cookies.set(SESSION_COOKIE_NAME, session.sessionId, { httpOnly: true, path: "/" });
        return Response.json("Success", { status: 200 })
    }
    return Response.json("Authentication denied", { status: 401 })
}
