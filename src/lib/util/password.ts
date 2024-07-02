import { pbkdf2Async } from '@noble/hashes/pbkdf2';
import { sha256 } from '@noble/hashes/sha256';
import { bytesToHex } from '@noble/hashes/utils';
import { getRandomString } from './random';
import { dlog } from './log';

async function hashPassword(password: string, salt: string): Promise<string> {
	const hash = await pbkdf2Async(sha256, password, salt, { c: 32, dkLen: 32 });
	const str = bytesToHex(hash);
	return `${str}-${salt}`;
}

/**
 * returns a string in the form `{hash}-{salt}`
 */
export async function turnPasswordToHash(password: string): Promise<string> {
	const salt = await getRandomString(32);
	return hashPassword(password, salt);
}

export async function isValidPasswordHash(
	storedHash: string,
	providedPassword: string
): Promise<boolean> {
	const [expectedHash, salt] = storedHash.split('-');
	dlog({ expectedHash, salt });
	const generatedHash = await hashPassword(providedPassword, salt);
	dlog({ generatedHash });
	return generatedHash === storedHash;
}
