export default function intersection(
    nums1: number[],
    nums2: number[]
): number[] {
    const set = new Set(nums2);
    return Array.from(new Set(nums1.filter((a) => set.has(a))));
}
