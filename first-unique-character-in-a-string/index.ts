export default function firstUniqChar(s: string): number {
    const cnts: Record<string, number> = {};
    for (const w of s) {
        const arr = cnts[w] ?? 0;

        cnts[w] = arr + 1;
    }

    for (const [i, w] of Array.prototype.entries.call(s)) {
        if (cnts[w] === 1) {
            return i;
        }
    }
    return -1;
}
