export default function lastRemaining(n: number, m: number): number {
    let f = 0;
    for (let i = 2; i <= n; i++) {
        f = (f + m) % i;
    }
    return f;
}
