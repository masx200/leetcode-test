export default function majorityElement(nums: number[]): number {
    const cnts = new Map<number, number>();
    for (const word of nums) {
        const count = (cnts.get(word) ?? 0) + 1;
        cnts.set(word, count);

        if (count > nums.length / 2) return word;
    }

    throw Error("not found");
}
