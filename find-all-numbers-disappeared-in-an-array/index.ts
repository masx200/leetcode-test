export default function findDisappearedNumbers(nums: number[]): number[] {
    const range: Array<number | undefined> = Array.from({
        length: nums.length,
    }).map((_v, i) => i + 1);
    nums.forEach((v) => {
        range[v - 1] = undefined;
    });

    return range.filter((a) => typeof a !== "undefined") as number[];
}
