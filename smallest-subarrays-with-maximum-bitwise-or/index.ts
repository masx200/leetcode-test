export default function smallestSubarrays(nums: number[]): number[] {
    const n = nums.length;
    const ans: number[] = new Array(n).fill(0);
    let ors: [number, number][] = [];
    for (let i = n - 1; i >= 0; i--) {
        ors.push([0, i]);
        ors[0][0] |= nums[i];
        let k = 0;
        for (let j = 0; j < ors.length; j++) {
            ors[j][0] |= nums[i];
            if (ors[k][0] === ors[j][0]) {
                ors[k][1] = ors[j][1];
            } else {
                ors[++k] = ors[j];
            }
        }
        // k 之后的按位或结果都和 k 相同，且 k 存储的右端点最小，所以后面无需用到
        ors = ors.slice(0, k + 1);
        ans[i] = ors[0][1] - i + 1;
    }
    return ans;
}
