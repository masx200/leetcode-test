function smallestValue(n: number): number {
    while (true) {
        let x = n;
        let s = 0;

        for (let i = 2; i * i <= x; i++) {
            for (; x % i == 0; x /= i) {
                s += i;
            }
        }
        if (x > 1) {
            s += x;
        }
        if (s == n) {
            return n;
        }
        n = s;
    }
}
export default smallestValue;
