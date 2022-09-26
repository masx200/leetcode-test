export default function singleNumber(nums: number[]): number[] {
    const set = new Set<number>();
    nums.forEach((item) => {
        if (set.has(item)) {
            set.delete(item);
        } else {
            set.add(item);
        }
    });
    const arr: number[] = [];
    set.forEach((item) => {
        arr.push(item);
    });
    return arr;
}
