export default function two_Sum(nums: number[], target: number): number[] {
    const storeNumstoindex = new Map<number, number>();

    for (const [i, num1] of nums.entries()) {
        const num2 = target - num1;
        const index2 = storeNumstoindex.get(num2);
        if (typeof index2 !== "undefined") {
            return [i, index2];
        } else {
            storeNumstoindex.set(num1, i);
        }
    }
    throw Error("should not go here");
}
