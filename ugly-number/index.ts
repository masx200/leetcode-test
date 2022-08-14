function isUgly(n: number): boolean {
    if (n <= 0) {
        return false;
    }

    for (const factor of [2, 3, 5]) {
        while (n % factor === 0) {
            n /= factor;
        }
    }
    return n == 1;
}
export default isUgly;
