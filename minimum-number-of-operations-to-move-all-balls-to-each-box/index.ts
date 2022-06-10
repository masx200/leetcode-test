export default function minOperations(boxes: string): number[] {
    const dp: number[] = Array(boxes.length).fill(0);

    let right = 0;
    for (const [index, value] of Array.prototype.entries.call(boxes)) {
        if (value === "1") {
            dp[0] += index;
            right += 1;
        }
    }
    let left = 0;
    for (let j = 1; j < boxes.length; j++) {
        if (boxes[j - 1] === "1") {
            left += 1;
            right -= 1;
        }
        dp[j] = dp[j - 1] - right + left;
    }
    return dp;
}
