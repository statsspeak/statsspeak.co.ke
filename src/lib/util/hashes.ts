export function txtEncode(str: string): Uint8Array {
    return new TextEncoder().encode(str);
}

export async function sha256(str: string | Uint8Array): Promise<Uint8Array> {
    const buf = typeof str === 'string' ? txtEncode(str) : str;
    const digest = await crypto.subtle.digest("SHA-256", buf)
    return new Uint8Array(digest);
}
