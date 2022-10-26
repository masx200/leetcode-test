export default function paintingPlan(n: number, k: number): number {
    if (k === n * n) return 1;

    let res = 0;
    for (let a = 0; a <= n; a++) {
        for (let b = 0; b <= n; b++) {
            if (a * n + b * (n - a) === k) {
                res += combination(a, n) * combination(b, n);
            }
        }
    }
    return res;
}
export function combination(m: number, n: number): number {
    if (m === 0) return 1;
    let num1 = 1;
    let num2 = 1;
    let num3 = 1;
    for (let i = n; i > 0; i--) num1 *= i;
    for (let i = m; i > 0; i--) num2 *= i;
    for (let i = n - m; i > 0; i--) num3 *= i;
    return num1 / (num2 * num3);
}
