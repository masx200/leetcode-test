export default function divideString(
    s: string,
    k: number,
    fill: string
): string[] {
    const str = s.length % k ? s.padEnd(Math.ceil(s.length / k) * k, fill) : s;

    return Array(str.length / k)
        .fill(0)
        .map((_, i) => str.slice(i * k, i * k + k));
}
