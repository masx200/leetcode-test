export default function canCompleteCircuit(
    gas: number[],
    cost: number[],
): number {
    let space = 0; // 当前的剩余油量
    let minSpace = 0; // 当前最低油量值 默认为0是因为我们只关心当前剩余油量小于0的时候
    let res = -1; // 最低油量的下标
    for (let i = 0; i < gas.length; i++) {
        space += gas[i] - cost[i];
        if (minSpace > space) {
            minSpace = space;
            res = i;
        }
    }
    // 最终的剩余油量小于0 那么无论从哪里出发都无法循环一圈
    // 如果最终剩余油量>=0 那么从最低点出发就能保证循环的途中的剩余油量始终都是>=0
    // 上述原因可以用反证法进行证明 如果仍然存在剩余油量小于0的地方 那么当前计算出来的加油站就肯定不是最低点
    return space >= 0 ? res + 1 : -1;
}
