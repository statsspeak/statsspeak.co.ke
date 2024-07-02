import { getXataClient } from '$lib/server/xata/client';
import { turnPasswordToHash } from '$lib/util/password';
import { env } from '$env/dynamic/private';

const PRIVATE_ROOT_INIT = env.PRIVATE_ROOT_INIT

// "mila.alloys@gmail.com:mypassword"

export async function GET() {
	if (!PRIVATE_ROOT_INIT) {
		return new Response("PRIVATE_ROOT_INIT is not set", { status: 500 })
	}

	const [username, password] = PRIVATE_ROOT_INIT.split(":");
	const xata = getXataClient();
	
	await xata.db.identities.create({
		email: username,
		password_hash: await turnPasswordToHash(password)
	})

	return new Response(`username: ${username}\npassword: ${password}`);
}
