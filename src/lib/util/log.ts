interface LogObject {
	level: 'debug' | 'info' | 'warn' | 'error';
	message: string;
	additionalInfo?: string | object;
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
				? `${rootKey}.${key}=${JSON.stringify(value)} `
				: `${key}=${JSON.stringify(value)} `;
		}
	}
	return str.trim();
}

function prepJSON(log: LogObject) {
	const toLog = {
		level: log.level.toUpperCase(),
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

/**
 * debug logging for development
 * in production this function does not log anything
 * @param args
 * @returns
 */
export function dlog(...args: Parameters<typeof console.log>) {
	return import.meta.env.DEV && console.log(...args);
}

export function log(
	level: LogObject['level'],
	message: string,
	data: LogObject['additionalInfo'] = {}
) {
	const obj = { level, message, additionalInfo: data };
	if (import.meta.env.DEV) {
		return console.log(objectToLogfmt(prepJSON(obj)));
	} else {
		return console.log(JSON.stringify(prepJSON(obj)));
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
	console.error(err);
};
