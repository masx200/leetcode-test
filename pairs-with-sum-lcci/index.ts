function pairSums(nums: number[], target: number): number[][] {
    const res: number[][] = [];
    const map = new Map<number, number>();
    for (const num of nums) {
        const key = target - num;
        const value = map.get(key);

        if (map.has(key) && Number(value) > 0) {
            res.push([key, num]);
            map.set(key, (map.get(key) ?? 0) - 1);
        } else {
            map.set(num, (map.get(num) ?? 0) + 1);
        }
    }
    return res;
}
export default pairSums;
