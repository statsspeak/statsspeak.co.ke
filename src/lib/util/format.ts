export function getError(val: unknown) {
	if (val instanceof Error) {
		return val;
	}
	return new Error('Unknown Error');
}

export function formatNumberFixed(arg: number | string | undefined, fractionDigits = 2): string {
	if (arg === undefined) return 'undefined';
	return Number(arg).toLocaleString([], { minimumFractionDigits: fractionDigits });
}

export function formatCurrency(arg: number | string | undefined): string {
	if (arg === undefined) return 'undefined';
	return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'KES' }).format(Number(arg));
}

export function formatCurrencyCents(arg: number | string) {
	const val = Number(arg) / 100;
	return formatCurrency(val);
}
