function twoOutOfThree(
    nums1: number[],
    nums2: number[],
    nums3: number[],
): number[] {
    const map = new Map<number, Set<number>>();

    for (const [i, n] of [nums1, nums2, nums3].entries()) {
        for (const v of n) {
            const value = map.get(v) ?? new Set();
            value.add(i);
            map.set(v, value);
        }
    }

    return [...map.entries()].filter(([_, s]) => s.size >= 2).map((a) => a[0]);
}
export default twoOutOfThree;
