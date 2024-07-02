import { getError } from './format';
import { dlog } from './log';
import { Result, Err } from './runtime';

const cHttp = {
	async get(url: string, headers: HeadersInit) {
		dlog({ url, method: 'GET', headers: headers });
		return await fetch(url, { headers, method: 'GET' });
	},

	async post(url: string, body: unknown, incomingHeaders: HeadersInit = {}) {
		let headers: Headers = new Headers({});
		let postBody;

		if (body instanceof FormData) {
			headers = new Headers(incomingHeaders);
			postBody = body;
		} else {
			postBody = JSON.stringify(body);
			headers = new Headers(incomingHeaders);
			headers.set('content-type', 'application/json;charset=UTF-8');
		}

		dlog({ url, method: 'POST', postBody, headers: [...headers.entries()] });
		return await fetch(url, {
			method: 'POST',
			body: postBody,
			headers
		});
	}
};

/**
 * Parse a request body as json
 */
export async function tryFetchAsJson(target: Response | Request) {
	const text = await target.text();
	try {
		if (!text) {
			return Err({
				message: 'Could not retrieve body text'
			});
		}

		return Result(JSON.parse(text));
	} catch (error) {
		return Err({ message: getError(error).message });
	}
}

export async function sendRPC(name: string, body: unknown) {
	return cHttp.post(`/rpc/${name}`, body);
}

export default cHttp;
