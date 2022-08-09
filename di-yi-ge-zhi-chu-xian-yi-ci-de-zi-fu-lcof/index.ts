export default function firstUniqChar(s: string): string {
    const seen = new Map<string, number>();

    for (const c of s) {
        seen.set(c, 1 + (seen.get(c) ?? 0));
    }
    for (const [char, count] of seen) {
        if (count === 1) return char;
    }
    return " ";
}
