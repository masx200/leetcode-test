export default function kthFactor(n: number, k: number): number {
    let count = 0,
        factor = 0;
    for (factor = 1; factor * factor <= n; ++factor) {
        if (n % factor == 0) {
            ++count;
            if (count == k) {
                return factor;
            }
        }
    }
    --factor;
    if (factor * factor == n) {
        --factor;
    }
    for (; factor > 0; --factor) {
        if (n % factor == 0) {
            ++count;
            if (count == k) {
                return n / factor;
            }
        }
    }
    return -1;
}
