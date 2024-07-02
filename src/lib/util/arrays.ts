export function concatArrayBuffer(one: Uint8Array, two: Uint8Array) {
    const mergedArray = new Uint8Array(one.length + two.length);
    mergedArray.set(one);
    mergedArray.set(two, one.length);
    return mergedArray;
}
