export default function minDifference(
    nums: number[],
    queries: number[][]
): number[] {
    const n = nums.length;
    const sorted = [...new Set(nums)].sort((a, b) => a - b);
    const presum: number[][] = Array(100);

    for (const k of sorted) {
        presum[k - 1] = Array<number>(n).fill(0);
        for (let i = 0; i < n; i++) {
            presum[k - 1][i] =
                (i == 0 ? 0 : presum[k - 1][i - 1]) + Number(nums[i] == k);
        }
    }

    return queries.map(([left, right]) => {
        const arr = Array<number>();
        for (const k of sorted) {
            const count =
                presum[k - 1][right] -
                (left == 0 ? 0 : presum[k - 1][left - 1]);

            if (count) {
                arr.push(k);
            }

            if (
                arr.length >= 2 &&
                arr[arr.length - 1] - arr[arr.length - 2] == 1
            ) {
                return 1;
            }
        }
        if (arr.length <= 1) return -1;
        else {
            return Math.min(
                ...arr.map((v, i, a) => (i === 0 ? Infinity : v - a[i - 1]))
            );
        }
    });
}
