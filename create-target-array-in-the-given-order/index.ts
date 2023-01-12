export default function createTargetArray(
    nums: number[],
    index: number[],
): number[] {
    const target: number[] = Array<number>();
    target.length = nums.length;
    index.forEach((v, i) => {
        const num = nums[i];

        target.splice(v, 0, num);
        // console.log(target)
    });
    target.length = nums.length;
    return target;
}
