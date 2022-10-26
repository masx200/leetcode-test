export default function longestConsecutive(nums: number[]): number {
    const num_set: Set<number> = new Set();
    for (const num of nums) {
        num_set.add(num);
    }

    let longestStreak = 0;

    for (const num of num_set) {
        if (!num_set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (num_set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}
