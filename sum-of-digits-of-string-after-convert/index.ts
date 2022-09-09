export default function getLucky(s: string, k: number): number {
    let nums = Array.prototype.map
        .call(s, (c) => c.charCodeAt(0) - "a".charCodeAt(0) + 1)
        .join("")
        .split("")
        .map(Number) as number[];
    while (k) {
        nums = nums
            .reduce((a, v) => a + v)
            .toString()
            .split("")
            .map(Number);
        k--;
    }
    return Number(nums.join(""));
}
