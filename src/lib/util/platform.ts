import type { RequestEvent } from "@sveltejs/kit";

export function getPlatformEnv(event: RequestEvent) {
    const env = event.platform?.env
    if (!env) {
        throw new Error("platform.env is undefined");
    }
    return env;
}

export function getPlatformEnvOrNull(event: RequestEvent) {
    const env = event.platform?.env
    if (!env) {
        return null;
    }
    return env;
}
