export default function frequencySort(nums: number[]): number[] {
    const storage = new Map<number, number>();
    for (const num of nums) {
        storage.set(num, 1 + (storage.get(num) ?? 0));
    }
    return [...storage.entries()]
        .sort((a, b) => {
            if (-b[1] + a[1] < 0) {
                return -1;
            }
            if (-b[1] + a[1] > 0) {
                return 1;
            }

            return -a[0] + b[0];
        })
        .map((a) => Array(a[1]).fill(a[0]))
        .flat();
}
