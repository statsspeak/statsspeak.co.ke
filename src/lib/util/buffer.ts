export function bufferToHex(val: Uint8Array) {
	const hashArray = Array.from(val);
	return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function bufferToSHA(val: Uint8Array, algo = 'SHA-256') {
	const arrBuffer = await crypto.subtle.digest(algo, val);
	return new Uint8Array(arrBuffer);
}

export function mergeUInt8Arrays(a1: Uint8Array, a2: Uint8Array): Uint8Array {
	// sum of individual array lengths
	const mergedArray = new Uint8Array(a1.length + a2.length);
	mergedArray.set(a1);
	mergedArray.set(a2, a1.length);
	return mergedArray;
}
