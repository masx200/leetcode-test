export default isScramble;
function isScramble(
    s1: string,
    s2: string,
    cache = new Map<string, boolean>()
): boolean {
    if (cache.has(s1 + s2)) return Boolean(cache.get(s1 + s2));

    const res =
        s1 === s2 ||
        ([...s1].sort().join("") === [...s2].sort().join("") &&
            Array(s1.length - 1)
                .fill(0)
                .some(
                    (_, i) =>
                        (isScramble(
                            s1.slice(0, i + 1),
                            s2.slice(0, i + 1),
                            cache
                        ) &&
                            isScramble(
                                s1.slice(i + 1),
                                s2.slice(i + 1),
                                cache
                            )) ||
                        (isScramble(
                            s1.slice(0, i + 1),
                            s2.slice(-(i + 1)),
                            cache
                        ) &&
                            isScramble(
                                s1.slice(i + 1),
                                s2.slice(0, -(i + 1)),
                                cache
                            ))
                ));

    cache.set(s1 + s2, res);
    return res;
}
