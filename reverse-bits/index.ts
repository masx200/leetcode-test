export default function reverseBits(n: number): number {
    let a = 0;
    for (let i = 0; i < 32; i++) {
        a = (a << 1) | (n & 1);
        n >>>= 1;
    }
    return a >>> 0;
}
