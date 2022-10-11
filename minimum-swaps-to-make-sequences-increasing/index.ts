export default function minSwap(nums1: number[], nums2: number[]): number {
    const n = nums1.length;
    let a = 0,
        b = 1;
    for (let i = 1; i < n; i++) {
        const at = a,
            bt = b;
        a = b = n;
        if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
            a = Math.min(a, at);
            b = Math.min(b, bt + 1);
        }
        if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
            a = Math.min(a, bt);
            b = Math.min(b, at + 1);
        }
    }
    return Math.min(a, b);
}
