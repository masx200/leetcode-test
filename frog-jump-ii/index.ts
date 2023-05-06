export default function maxJump(stones: number[]): number {
    let ans = stones[1] - stones[0];
    for (let i = 2; i < stones.length; i++) {
        ans = Math.max(ans, stones[i] - stones[i - 2]);
    }
    return ans;
}
