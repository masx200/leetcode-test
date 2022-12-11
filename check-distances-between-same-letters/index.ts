export default function checkDistances(s: string, distance: number[]): boolean {
    const mp = new Map<number, number>();

    for (const [i, c] of Array.prototype.entries.call(s)) {
        const key = c.charCodeAt(0) - "a".charCodeAt(0);
        const last = mp.get(key);

        if (
            mp.has(key) &&
            typeof last !== "undefined" &&
            i - last - 1 !== distance[key]
        ) {
            return false;
        } else {
            mp.set(key, i);
        }
    }
    return true;
}
