export default function totalFruit(fruits: number[]): number {
    const n = fruits.length;
    const cnt = new Map<number, number>();

    let left = 0,
        ans = 0;
    for (let right = 0; right < n; ++right) {
        cnt.set(fruits[right], (cnt.get(fruits[right]) || 0) + 1);
        while (cnt.size > 2) {
            cnt.set(fruits[left], (cnt.get(fruits[left]) ?? 0) - 1);
            if (cnt.get(fruits[left]) == 0) {
                cnt.delete(fruits[left]);
            }
            ++left;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
}
