function isNStraightHand(hand: number[], groupSize: number): boolean {
    const n = hand.length;
    if (n % groupSize !== 0) {
        return false;
    }
    hand.sort((a, b) => a - b);
    const cnt = new Map<number, number>();
    for (const x of hand) {
        cnt.set(x, (cnt.get(x) || 0) + 1);
    }
    for (const x of hand) {
        if (!cnt.has(x)) {
            continue;
        }
        for (let j = 0; j < groupSize; j++) {
            const num = x + j;
            if (!cnt.has(num)) {
                return false;
            }
            cnt.set(num, (cnt.get(num) ?? 0) - 1);
            if (cnt.get(num) == 0) {
                cnt.delete(num);
            }
        }
    }
    return true;
}
export default isNStraightHand;
