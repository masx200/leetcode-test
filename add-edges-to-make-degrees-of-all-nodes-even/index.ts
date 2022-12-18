function isPossible(n: number, edges: number[][]): boolean {
    const s = new Set<string>();
    function has(a: number, b: number) {
        return s.has(JSON.stringify([a, b]));
    }
    const deg = new Map<number, number>();

    for (const [x, y] of edges) {
        s.add(JSON.stringify([x, y]));
        s.add(JSON.stringify([y, x]));

        deg.set(x, (deg.get(x) ?? 0) + 1);
        deg.set(y, (deg.get(y) ?? 0) + 1);
    }

    const odd = [...deg].filter(([_, d]) => d % 2 > 0).map((a) => a[0]);

    const m = odd.length;

    if (m === 0) return true;

    if (m === 2) {
        const x = odd[0];
        const y = odd[1];

        if (!has(x, y)) {
            return true;
        }
        for (let i = 1; i <= n; i++) {
            if (
                i != x &&
                i != y &&
                !has(i, x) &&
                !has(i, y)
            ) {
                return true;
            }
        }
        return false;
    }
    if (m == 4) {
        const [a, b, c, d] = odd;
        return (
            (!has(a, b) &&
                !has(c, d)) ||
            (!has(a, c) &&
                !has(b, d)) ||
            (!has(a, d) && !has(b, c))
        );
    }
    return false;
}
export default isPossible;
