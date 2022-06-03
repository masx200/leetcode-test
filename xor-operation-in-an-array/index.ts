function xorOperation(n: number, start: number): number {
    const s = start >> 1;
    const e = n & start & 1;
    const ret = sumXor(s - 1) ^ sumXor(s + n - 1);
    return (ret << 1) | e;
}

function sumXor(x: number) {
    return x % 4 === 0 ? x : x % 4 === 1 ? 1 : x % 4 === 2 ? x + 1 : 0;
}
export default xorOperation;
