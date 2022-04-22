export default function findTheDifference(s: string, t: string): string {
    const cnt = new Map<string, number>();

    Array.prototype.forEach.call(t, (v) => cnt.set(v, 1 + (cnt.get(v) || 0)));

    Array.prototype.forEach.call(s, (v) => cnt.set(v, -1 + (cnt.get(v) || 0)));

    return [...cnt.entries()].filter((a) => a[1])[0][0];
}
