export default function shortestToChar(s: string, c: string): number[] {
    const cache = [...Array.from(s).map((v) => v === c).entries()].filter((
        [_i, b],
    ) => b).map(([i]) => i);
    return Array.from(s).map((_v, i) => {
        return Math.min(...cache.map((p) => Math.abs(p - i)));
    });
}
