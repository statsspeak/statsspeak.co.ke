import { jsonStringify } from './json';
import { dlog } from './log';

interface Init {
	readonly status?: number;
	readonly statusText?: string;
	readonly headers?: Headers;
}

export function jsonResponse(val: object, init?: Init) {
	const headers = init?.headers ? init.headers : new Headers();
	headers.set('content-type', 'application/json');
	const body = jsonStringify(val);
	dlog('serializing json response', body);
	return new Response(body, {
		status: init?.status || 200,
		statusText: init?.statusText,
		headers: headers
	});
}
