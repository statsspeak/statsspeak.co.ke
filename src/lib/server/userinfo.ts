import type { Cookies } from '@sveltejs/kit';
import { serverLog } from './serverlog';
import { getXataClient } from './xata/client';

export const SESSION_COOKIE_NAME = 'ssrlk';
const xata = getXataClient();

export async function createdNewSession(userId: string): Promise<UserSession> {
	const res = await xata.db.sessions.create(
		{
			identity: userId,
			expires_at: new Date(Date.now() + 604800000) // milliseconds in 7 days
		},
		['*', 'identity.*']
	);
	return {
		sessionId: res.id,
		userId: res.identity.id,
		email: res.identity.email
	};
}

export async function retrieveSession(env: Env, sessionId?: string): Promise<UserSession | null> {
	if (!sessionId) return null;
	const sessionInDB = await xata.db.sessions.read(sessionId, ['*', 'identity.*']);

	if (!sessionInDB) {
		serverLog.info('Session was token not found in the database', { sessionId });
		return null;
	}
	return {
		sessionId: sessionId,
		userId: sessionInDB.identity.id,
		email: sessionInDB.identity.email
	};
}

export async function getUserInformation(env: Env, cookies: Cookies) {
	const sessionIdCookie = cookies.get(SESSION_COOKIE_NAME);
	serverLog.info('Attempting to get session information', { sessionIdCookie });
	return retrieveSession(env, sessionIdCookie);
}

export async function getUserInformationRequired(env: Env, cookies: Cookies) {
	const session = await getUserInformation(env, cookies);
	if (!session) throw new Error('Session is Required');
	return session;
}
