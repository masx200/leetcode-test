export default function minDifference(
    nums: number[],
    queries: number[][],
): number[] {
    const n = nums.length;

    const presum = Array(100)
        .fill(0)
        .map(() => Array<number>(n).fill(0));

    for (let k = 1; k <= 100; k++) {
        for (let i = 0; i < n; i++) {
            presum[k - 1][i] = (i == 0 ? 0 : presum[k - 1][i - 1]) +
                Number(nums[i] == k);
        }
    }

    return queries.map(([left, right]) => {
        const arr = Array<number>();
        for (let k = 1; k <= 100; k++) {
            const count = presum[k - 1][right] -
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
                ...arr.map((v, i, a) => (i === 0 ? Infinity : v - a[i - 1])),
            );
        }
    });
}
