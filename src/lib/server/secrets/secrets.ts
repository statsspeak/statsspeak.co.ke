import { env } from '$env/dynamic/private';
import { secretMap } from './secret-store';

const readSecret = (name: string) => {
	if (import.meta.env.DEV) {
		return {
			value: secretMap['development'][name],
			env: 'Development'
		};
	} else {
		const nodeEnv = env['NODE_ENV'];
		if (nodeEnv === 'sandbox') {
			return {
				value: secretMap['sandbox'][name],
				env: nodeEnv
			};
		} else if (nodeEnv === 'production') {
			return {
				value: secretMap['production'][name],
				env: nodeEnv
			};
		} else {
			throw new Error(`Environment ${nodeEnv} is not configured for secrets`);
		}
	}
};

export function getSecretString(name: string): string {
	const val = readSecret(name);
	if (typeof val.value !== 'string') {
		throw new Error(`Secret with name ${name} is not defined in env ${val.env} or is not a string`);
	}
	return val.value;
}

export function getSecretNumber(name: string): number {
	const val = readSecret(name);
	if (typeof val.value !== 'number') {
		throw new Error(`Secret with name ${name} is not defined in env ${val.env} or is not a number`);
	}
	return val.value;
}
