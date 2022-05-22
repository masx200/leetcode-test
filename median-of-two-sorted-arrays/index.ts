export default function findMedianSortedArrays(
    nums1: number[],
    nums2: number[],
): number {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b);
    if (arr.length % 2) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        return (arr[Math.floor(arr.length / 2)] +
            arr[Math.floor(arr.length / 2) - 1]) / 2;
    }
}
