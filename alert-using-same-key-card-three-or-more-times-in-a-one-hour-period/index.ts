export default function alertNames(
    keyName: string[],
    keyTime: string[]
): string[] {
    const map = new Map<string, number[]>();

    for (const [i, n] of keyName.entries()) {
        const t = keyTime[i]
            .split(":")
            .map(Number)
            .reduce((p, c, i) => p + (i === 0 ? 60 * c : c), 0);

        const arr = map.get(n) ?? [];
        arr.push(t);
        map.set(n, arr);
    }

    return [...map]
        .filter(
            ([_k, v]) =>
                v.length >= 3 &&
                v
                    .sort((a, b) => a - b)
                    .some((n, i, a) => i + 2 < a.length && 60 >= a[i + 2] - n)
        )
        .map((a) => a[0])
        .sort();
}
