function boxDelivering(
    boxes: number[][],
    _portsCount: number,
    maxBoxes: number,
    maxWeight: number
): number {
    const { min } = Math;
    const n = boxes.length;
    boxes.unshift([-1, 0]);
    const dp = Array<number>(n + 1).fill(Infinity);
    dp[0] = 0;

    let j = 0;
    let weightSum = 0;
    let tripSum = 0;
    let lastPort = -1;
    let lastj = 0;
    for (let i = 1; i <= n; i++) {
        // find the longest valid window [i:j]
        while (
            j + 1 <= n &&
            j + 1 - i + 1 <= maxBoxes &&
            weightSum + boxes[j + 1][1] <= maxWeight
        ) {
            j += 1;
            weightSum += boxes[j][1];
            if (boxes[j][0] != boxes[j - 1][0]) tripSum += 1;
            if (boxes[j][0] != lastPort) {
                lastPort = boxes[j][0];
                lastj = j;
            }
        }
        // update dp[j]
        dp[j] = min(dp[j], dp[i - 1] + tripSum + 1);
        // in some cases, update dp[lastj-1], where [lastj:j] share the same port.
        if (j + 1 <= n && boxes[j][0] == boxes[j + 1][0]) {
            dp[lastj - 1] = min(dp[lastj - 1], dp[i - 1] + tripSum);
        }
        weightSum -= boxes[i][1];
        tripSum -= Number(i + 1 <= n && boxes[i][0] != boxes[i + 1][0]);
    }
    return dp[n];
}
export default boxDelivering;
