import { getObjectValueAsString } from './objects';

export function getFormValue(data: unknown, key: string): string {
	if (data instanceof FormData) return (data?.get(key) || '') as string;
	if (data && typeof data === 'object') {
		return getObjectValueAsString(key, data);
	} else {
		return '';
	}
}

export function getFormValueAsFile(formData: FormData, key: string) {
	const val = formData.get(key);
	if (val instanceof File) {
		return val;
	}
	throw new Error(`${key} is not a file`);
}

export function extractFormValues<S extends string>(data: FormData, ...keys: S[]) {
	const cache: Record<S, string> = Object.create(null);
	keys.forEach((key) => (cache[key] = getFormValue(data, key)));
	return cache;
}

export function formDataAsObject(formData: FormData) {
	return Object.fromEntries(formData.entries()) as {
		[k: string]: string;
	};
}
