export default function containsNearbyDuplicate(
    nums: number[],
    k: number
): boolean {
    const map: Map<number, number> = new Map();
    return nums.some((num, index) => {
        const other = map.get(num);
        if (
            map.has(num) &&
            typeof other === "number" &&
            Math.abs(index - other) <= k
        ) {
            return true;
        } else {
            map.set(num, index);
        }

        return false;
    });
}
