import { getUserInformation } from '$lib/server/userinfo';
import { redirect } from '@sveltejs/kit';
import { building } from '$app/environment';
import { serverLog } from '$lib/server/serverlog';
import { getPlatformEnvOrNull } from '$lib/util/platform';

export async function handle({ event, resolve }) {
	if (building) {
		// https://github.com/sveltejs/kit/issues/9386#issuecomment-1714660627
		const response = await resolve(event);
		return response; // bailing here allows the 404 page to build
	}
	async function checkSession() {
		serverLog('info', 'validating admin session');
		const env = getPlatformEnvOrNull(event);
		if (!env) {
			return new Response('Server Hook Problem', { status: 500 });
		}
		const retrievedSession = await getUserInformation(env, event.cookies);
		if (!retrievedSession) {
			redirect(307, '/auth/login');
		} else {
			serverLog.info(`${event.request.method}: ${event.request.url}`);
			event.locals.userSession = retrievedSession;
			const authenticatedResponse = await resolve(event);
			return authenticatedResponse;
		}
	}

	const url = new URL(event.request.url);
	if (url.pathname.startsWith('/admin')) {
		return checkSession();
	} else {
		return await resolve(event);
	}
}
