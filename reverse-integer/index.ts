export default function reverse(x: number): number {
    if (0 <= x && x <= 9) return x;
    if (Math.abs(x) > 2147483641) return 0;
    if (x < 0) return -1 * (reverse(-x));
    let result = 0;

    while (x > 0) {
        result = result * 10 + x % 10;
        if (result > 2 ** 31 - 1) return 0;
        x /= 10;
        x = Math.floor(x);
    }
    return result;
}
