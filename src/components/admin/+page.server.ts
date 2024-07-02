import { getUserInformationRequired } from '$lib/server/userinfo';
import { getXataClient } from '$lib/server/xata/client';
import { getPlatformEnv } from '$lib/util/platform';
import type { PageServerLoad } from './$types';

const xata = getXataClient();
export const load: PageServerLoad = async (event) => {
	const env = getPlatformEnv(event);
	const session = await getUserInformationRequired(env, event.cookies);
	const articles = await xata.db.articles
		.filter({ created_by: session.userId })
		.select(['*', 'created_by.*'])
		.getPaginated({
			pagination: { size: 20 }
		});

	return { articles: articles.records };
};
