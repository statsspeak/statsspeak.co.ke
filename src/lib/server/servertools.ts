export function printError(err: Error) {
	err.stack = undefined;
	console.error(err);
}

export function error(message: string, name = 'ValidationError'): Error {
	const err = new Error(message);
	err.name = name;
	return err;
}
