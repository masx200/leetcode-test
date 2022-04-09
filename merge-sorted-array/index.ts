/**
 Do not return anything, modify nums1 in-place instead.
 */
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
// /**
//  Do not return anything, modify nums1 in-place instead.
//  */
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//     nums1.splice(m, nums1.length - m, ...nums2);
//     nums1.sort((a, b) => a - b);
// //   let p1 = 0, p2 = 0;
// //     const sorted = new Array(m + n).fill(0);
// //     var cur;
// //     while (p1 < m || p2 < n) {
// //         if (p1 === m) {
// //             cur = nums2[p2++];
// //         } else if (p2 === n) {
// //             cur = nums1[p1++];
// //         } else if (nums1[p1] < nums2[p2]) {
// //             cur = nums1[p1++];
// //         } else {
// //             cur = nums2[p2++];
// //         }
// //         sorted[p1 + p2 - 1] = cur;
// //     }
// //     for (let i = 0; i != m + n; ++i) {
// //         nums1[i] = sorted[i];
// //     }

// };
