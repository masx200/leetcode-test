export default function countDistinctIntegers(nums: number[]): number {
    const set = new Set(nums);
    for (const v of nums) {
        set.add(Number(v.toString().split("").reverse().join("")));
    }
    return set.size;
}
