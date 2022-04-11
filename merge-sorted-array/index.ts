export default function merge(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number,
): void {
    if (n === 0) {
        return;
    }
    if (m == 0) {
        nums1.splice(0, n, ...nums2);
        return;
    }
    const temp = nums1.slice(0, m);
    nums1.length = 0;
    while (temp.length > 0 && nums2.length > 0) {
        if (temp[0] > nums2[0]) {
            const first2 = nums2.shift();
            if (typeof first2 === "undefined") {
                throw Error("Invalid number");
            }
            nums1.push(first2);
        } else {
            const first1 = temp.shift();
            if (typeof first1 === "undefined") {
                throw Error("Invalid number");
            }
            nums1.push(first1);
        }
    }
    if (nums2.length) {
        nums1.push(...nums2);
    }
    if (temp.length) {
        nums1.push(...temp);
    }
}
