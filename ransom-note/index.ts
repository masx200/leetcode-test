export default function canConstruct(
    ransomNote: string,
    magazine: string,
): boolean {
    const map1 = new Map<string, number>();

    for (const c of magazine) {
        map1.set(c, 1 + ((map1.get(c)) ?? 0));
    }

    for (const c of ransomNote) {
        map1.set(c, -1 + ((map1.get(c)) ?? 0));

        if (((map1.get(c)) ?? 0) < 0) return false;
    }
    return true;
}
