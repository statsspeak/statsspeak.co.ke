export function numberToBytes(input: number, bufferSize: number): Uint8Array {
	const byteArray = new Uint8Array(bufferSize).fill(0);
	let numOp = input;
	for (let i = bufferSize - 1; i >= 0; i--) {
		byteArray[i] = numOp & 0xff;
		numOp = numOp >> 8;
	}

	return byteArray;
}

export function getRandomInt64(): bigint {
	const bytes = new BigInt64Array(2);
	crypto.getRandomValues(bytes);
	const val = bytes.at(0);
	if (!val) throw new Error('Error while generating random int64');
	return val < 0 ? -val : val;
}

export function getRandomBytes(size = 8) {
	const bytes = new Uint8Array(size);
	crypto.getRandomValues(bytes);
	return bytes;
}

export async function getRandomString(len: number, charset: 'alphaUpperCase' | 'hex' = 'hex'): Promise<string> {
    const alphaUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const hex = "0123456789ABCDEF";
    let chosen: string;
    switch (charset) {
        case 'hex': {
            chosen = hex;
            break;
        }
        case 'alphaUpperCase': {
            chosen = alphaUppercase;
            break;
        }
        default: {
            throw new Error("Unknown selection " + charset)
        }
    }

    const bytes = getRandomBytes(len)
    const chars = Array(len).fill(0);
    for (const [byte, index] of bytes.entries()) {
        chars[index] = chosen[byte % chosen.length]
    }
    return chars.join("");
}
