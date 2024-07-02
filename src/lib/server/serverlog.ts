import { env } from '$env/dynamic/private';
import { getSecretString } from '$lib/server/secrets/secrets';
import { jsonStringify } from '$lib/util/json';
import { Node as Logtail } from '@logtail/js';

const logtail = new Logtail(getSecretString('LOGTAIL_TOKEN'));

interface LogObject {
	level: 'debug' | 'info' | 'warn' | 'error';
	message: string;
	additionalInfo?: string | Dict;
	timestamp?: Date;
}

function objectToLogfmt(val: object, rootKey = ''): string {
	let str = '';
	const entries = Object.entries(val);

	for (const [key, value] of entries) {
		if (value && typeof value === 'object') {
			str += objectToLogfmt(value, rootKey ? `${rootKey}.${key}` : key);
		} else {
			str += rootKey
				? `${rootKey}.${key}=${jsonStringify(value)} `
				: `${key}=${jsonStringify(value)} `;
		}
	}
	return str.trim();
}

function prepJSON(log: LogObject) {
	const toLog = {
		level: log.level.toUpperCase(),
		env: env.NODE_ENV,
		message: log.message,
		timestamp: new Date()
	};
	Object.assign(
		toLog,
		typeof log.additionalInfo === 'string'
			? { additionalInfo: log.additionalInfo }
			: log.additionalInfo
	);
	return toLog;
}

function prepAdditionalInfo(info: string | Dict) {
	if (typeof info === 'string') {
		return { additionalInfo: info, env: env.NODE_ENV };
	} else {
		return { ...info, env: env.NODE_ENV };
	}
}

function log(level: LogObject['level'], message: string, data: LogObject['additionalInfo'] = {}) {
	const obj = { level, message, additionalInfo: data };
	if (import.meta.env.DEV) {
		return console.log(objectToLogfmt(prepJSON(obj)));
	} else {
		const func = logtail[level];
		if (typeof func === 'function') {
			func.call(logtail, message, prepAdditionalInfo(data));
		} else {
			console.error(new Error('log function did not work in logtail'));
		}
	}
}

log.debug = function (message: string, data: LogObject['additionalInfo'] = {}) {
	log('debug', message, data);
};

log.info = function (message: string, data: LogObject['additionalInfo'] = {}) {
	log('info', message, data);
};

log.warn = function (message: string, data: LogObject['additionalInfo'] = {}) {
	log('warn', message, data);
};

log.error = function (message: string, data: LogObject['additionalInfo'] = {}) {
	log('error', message, data);
};

log.errorDump = function (err: Error) {
	if (import.meta.env.DEV) {
		console.error(err);
	} else {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		logtail.error(err);
	}
};

export { log as serverLog };
