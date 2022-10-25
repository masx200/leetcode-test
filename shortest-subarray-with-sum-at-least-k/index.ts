export default function shortestSubarray(nums: number[], k: number): number {
    const n = nums.length;
    const sum: number[] = new Array(n + 1);
    sum[0] = 0;
    for (let i = 1; i <= n; i++) {
        sum[i] = sum[i - 1] + nums[i - 1];
    }

    const q: number[] = [];
    let l = 0;
    let res = Infinity;
    for (let i = 0; i <= n; i++) {
        while (l < q.length && sum[i] - sum[q[l]] >= k) {
            res = Math.min(res, i - q[l]);
            l++;
        }
        // maintain monotonic incremental stack
        while (q.length && sum[i] < sum[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
    }
    return res === Infinity ? -1 : res;
}
