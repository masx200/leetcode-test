export default function missingTwo(nums: number[]): number[] {
    const arr: number[] = new Array(nums.length + 2).fill(-1);
    nums.forEach((item) => {
        arr[item - 1] = item;
    });
    const reuslt: number[] = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === -1) reuslt.push(i + 1);
    }
    return reuslt;
}
