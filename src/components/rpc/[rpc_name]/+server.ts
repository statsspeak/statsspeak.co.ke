import type { RequestEvent } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getPlatformEnv } from '$lib/util/platform';
import { getUserInformation } from '$lib/server/userinfo';
import { z } from 'zod';
import { getXataClient } from '$lib/server/xata/client';

const xata = getXataClient();

function rpcError(message: string, context: Record<string, unknown> = {}, status = 400) {
	return { message, context, status };
}

function rpcResult<T>(result: T) {
	return { result, status: 200 };
}

type RPCResponse = ReturnType<typeof rpcResult> | ReturnType<typeof rpcError>;
type RPCHandler = (req: RequestEvent, ctx: { session: UserSession }) => Promise<RPCResponse>;

const saveNewPost: RPCHandler = async function (event, ctx) {
	const json = await event.request.json();
	const body = z
		.object({
			title: z.string(),
			html: z.string().optional()
		})
		.parse(json);
	const article = await xata.db.articles.create(
		{
			title: body.title,
			html: body.html,
			created_by: ctx.session.userId
		},
		['id']
	);
	return rpcResult(article);
};

const rpcMap: { [K: string]: RPCHandler } = {
	'save-new-post': saveNewPost
};

export const POST: RequestHandler = async (event) => {
	const env = getPlatformEnv(event);
	const { rpc_name: rpcName } = event.params;
	const session = await getUserInformation(env, event.cookies);
	if (!session) {
		const error = rpcError('Login is required', {}, 401);
		return Response.json(error, { status: error.status });
	}
	const rpc = rpcMap[rpcName];
	if (!rpc) {
		const error = rpcError('Invalid RPC Name');
		return Response.json(error, { status: error.status });
	}
	const result = await rpc(event, { session });
	if (!result) {
		const error = rpcError('NULL RESULT', {}, 500);
		return Response.json(error, { status: error.status });
	}
	return Response.json(result, { status: result.status });
};
