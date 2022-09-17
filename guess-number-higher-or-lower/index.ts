export default ((guess: (num: number) => number) =>
    function guessNumber(n: number): number {
        let left = 1;
        let right = n;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            const diff = guess(mid);
            if (diff === 0) return mid;
            if (diff > 0) {
                left = mid + 1;
            }
            if (diff < 0) {
                right = mid;
            }
        }
        return left;
    });
