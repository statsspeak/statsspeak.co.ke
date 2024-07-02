import { isValidPhoneNumber } from 'libphonenumber-js';
import { TypeCheckedError, isString } from 'typechecked';

export function isKenyanPhoneNumber(source: unknown): string {
	const str = isString(source);
	if (!str.startsWith('254')) {
		throw new TypeCheckedError('Value is not a valid kenyan phone number');
	} else if (!isValidPhoneNumber(str)) {
		throw new TypeCheckedError('Value is not a valid phone number');
	}
	return str;
}

export function isValidEmail(source: unknown): string {
	const str = isString(source);

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (str.length < 256 && emailRegex.test(str)) {
		return str;
	}
	throw new TypeCheckedError('Invalid Email');
}

// returns true instead of throw
export function stringIsValidEmail(source: unknown): source is string {
	try {
		isValidEmail(source);
		return true;
	} catch {
		return false;
	}
}
