export function jsonStringify(val: object) {
	if (typeof val === 'undefined') return 'undefined';
	return JSON.stringify(val, (key, value) =>
		typeof value === 'bigint' ? value.toString() : value
	);
}
