export default function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const map: Record<string, number | undefined> = {};
    for (const c of s) {
        map[c] = 1 + (map[c] ?? 0);
    }
    for (const c of t) {
        const count = -1 + (map[c] ?? 0);
        map[c] = count;
        if (count < 0) return false;
    }
    return Object.values(map).every((a) => a === 0);
}
