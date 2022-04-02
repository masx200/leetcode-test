/**https://leetcode-cn.com/problems/two-sum/ */
export default function twoSum(nums: number[], target: number): number[] {
    // const cache_result = new Set<number>()
    const storeNumstoindex = new Map<number, number>();

    for (const [i, num1] of nums.entries()) {
        // storeNums.set(num1, i)
        const num2 = target - num1;
        // const has_num2 = cache_result.has(num2)
        const index2 = storeNumstoindex.get(num2);
        if (typeof index2 !== "undefined") {
            return [i, index2];
        } else {
            storeNumstoindex.set(num1, i);
            // cache_result.add(num1)
            // cache_result.add(num2)
        }
    }
    throw Error("should not go here");
}
