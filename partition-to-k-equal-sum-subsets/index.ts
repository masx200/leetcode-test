export default function canPartitionKSubsets(
    nums: number[],
    k: number
): boolean {
    const sum = nums.reduce((a, v) => a + v, 0);
    if (sum % k != 0) return false;
    const sub = Math.floor(sum / k);
    nums.sort((a, b) => a - b);
    if (nums[nums.length - 1] > sub) return false;
    let i = nums.length - 1;
    while (i >= 0 && nums[i] === sub) {
        i--, k--, nums.pop();
    }

    const n = nums.length;
    const dp = new Array<number>(1 << n);
    dp[0] = 0;

    const queue = [0];

    for (const i of queue) {
        if (i === (1 << n) - 1) return true;
        const cur = dp[i];

        for (let j = 0; j < n; j++) {
            if (cur + nums[j] > sub) {
                break;
            }
            if (!(i & (1 << j))) {
                const next = i | (1 << j);

                if ("undefined" === typeof dp[next]) {
                    dp[next] = (cur + nums[j]) % sub;
                    queue.push(next);
                }
            }
        }
    }

    return false;
}
