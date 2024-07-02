import { env } from '$env/dynamic/private';
import { XataClient } from './xata';

let instance: XataClient | undefined = undefined;
export const getXataClient = () => {
	if (instance) return instance;

	instance = new XataClient({ apiKey: env.XATA_API_KEY, branch: 'development' });
	return instance;
};
