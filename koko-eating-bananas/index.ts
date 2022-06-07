export default function minEatingSpeed(piles: number[], h: number): number {
    let left = 0;
    let right = 10 ** 9;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (piles.reduce((a, v) => a + Math.ceil(v / mid), 0) <= h) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right;
}
