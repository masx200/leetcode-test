export default function findMaxConsecutiveOnes(nums: number[]): number {
    return nums.reduce(([c, m], v) => {
        c = v ? c + 1 : 0;
        m = Math.max(m, c);
        return [c, m];
    }, [0, 0])[1];
}
