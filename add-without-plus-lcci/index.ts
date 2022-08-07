export default function add(a: number, b: number): number {
    if (b === 0) return a;
    if (a === 0) return b;
    return add(a ^ b, (a & b) << 1);
}
