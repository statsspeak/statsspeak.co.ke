import type * as CSS from 'csstype';

function toSnakeCase(key: string, separator = '-') {
	const words = key.split(/(?=[A-Z])/);
	return words.join(separator).toLowerCase();
}

export function icss(arg: CSS.Properties): string {
	return Object.entries(arg)
		.map(([k, v]) => `${toSnakeCase(k)}:${v}`)
		.join(';');
}
