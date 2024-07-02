export function isKeyOfObject<O extends object>(
	val: string | number | symbol,
	target: O
): val is keyof O {
	return val in target;
}

export function returnAsKeyOfObject<O extends object>(val: string | number | symbol, target: O) {
	if (isKeyOfObject(val, target)) {
		return val;
	}
	throw new Error(`${String(val)} is not a key of the the provided object`);
}

type POJOLike = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[k: string]: any;
};

export function getObjectValueAsString(key: string, target: POJOLike) {
	if (target[key]) return target[key] as string;
	return '';
}

/**
 * Flattens objects into a query-like string.
 * The string is alphabetically sorted by key.
 *
 * @param source The object to be serialized.
 * @returns The query string representation of the object.
 *
 * @example
 * let source = {
 *   "requestId": "APPREQ00990320fed02000",
 *   "sender": "client1",
 *   "locale": "en_KE",
 *   "timestamp": 1650533105687,
 *   "salt": "QcEwsZ123da",
 *   "senderKey": "yourkey",
 *   "params": {
 *     "name": "Tester"
 *   }
 * };
 *
 * objectToQueryString(source) === "locale=en_ke&params.name=Tester&requestId=APPREQ00990320fed02000&salt=QcEwsZ123da&sender=client1&senderKey=yourKey&timestamp=1650533105687"
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function objectToQueryString<R extends Record<string, any>>(source: R): string {
	const buildQueryString = (obj: R, prefix: string = ''): string[] => {
		return Object.entries(obj).flatMap(([key, value]) => {
			if (value && typeof value === 'object' && !Array.isArray(value)) {
				return buildQueryString(value, `${prefix}${key}.`);
			}
			return `${prefix + key}=${value}`;
		});
	};

	return buildQueryString(source).sort().join('&');
}
