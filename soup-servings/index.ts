import { memoize } from "../deps.ts";

export default function soupServings(n: number): number {
    n = Math.ceil(n / 25);
    if (n >= 179) {
        return 1.0;
    }
    const dfs = memoize(
        (a: number, b: number): number => {
            if (a <= 0 && b <= 0) {
                return 0.5;
            } else if (a <= 0) {
                return 1;
            } else if (b <= 0) {
                return 0;
            }

            return (
                0.25 *
                (dfs(a - 4, b) +
                    dfs(a - 3, b - 1) +
                    dfs(a - 2, b - 2) +
                    dfs(a - 1, b - 3))
            );
        },
        (a: number, b: number) => JSON.stringify([a, b])
    );
    return dfs(n, n);
}
