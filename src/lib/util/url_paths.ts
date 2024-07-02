import { dlog } from './log';

export function isPublicPath(url: string | URL) {
	const u = new URL(url);

	return u.pathname.startsWith('/fp') || u.pathname.startsWith('/webhooks');
}

export function isLoginURL(url: string): boolean {
	const u = new URL(url);
	const value = u.pathname.startsWith('/auth');
	if (value) dlog(`${url} is a login url`);
	return value;
}
