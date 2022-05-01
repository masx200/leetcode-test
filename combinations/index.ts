export default function combine(n: number, k: number): number[][] {
    return Array.from(
        combinations(
            Array(n)
                .fill(0)
                .map((_v, i) => i + 1),
            k,
        ),
    );
}
function* combinations<T>(iterable: Iterable<T>, r: number): Generator<T[]> {
    if (!Number.isInteger(r) || r < 0) {
        throw RangeError("r must be a non-negative integer");
    }
    const pool = [...iterable];
    const n = pool.length;
    if (r > n) {
        return;
    }
    const indices = new Uint32Array(r).map((_, index) => index);
    yield pool.slice(0, r);
    while (true) {
        let i: number;
        loop: {
            for (i = r - 1; i >= 0; i--) {
                if (indices[i] !== i + n - r) {
                    break loop;
                }
            }
            return;
        }
        const result: T[] = Array(r);
        for (let j = 0; j < i; j++) {
            result[j] = pool[indices[j]];
        }
        let index = (indices[i] += 1);
        result[i] = pool[index];
        for (let j = i + 1; j < r; j++) {
            indices[j] = index += 1;
            result[j] = pool[index];
        }
        yield result;
    }
}
