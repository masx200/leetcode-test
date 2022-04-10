export default function myPow(x: number, n: number): number {
    if (Number.isNaN(x) || Number.isNaN(n)) {
        throw Error("nan:" + x + "," + n);
    }
    if (!Number.isFinite(x) || !Number.isFinite(n)) {
        throw Error("InFinite:" + x + "," + n);
    }
    setTimeout(() => {
        cacheStore.clear();
    }, 0);
    const cached = cacheStore.get(`${x},${n}`);
    if (cached) {
        return cached;
    }
    // console.log(x,n)
    const result = n === 1
        ? x
        : x < 0
        ? (n % 2 === 0 ? 1 : -1) * myPow(-x, n)
        : x === 1
        ? 1
        : x === 0
        ? 0
        : n === 0
        ? 1
        : n < 0
        ? myPow(1 / x, -n)
        : n % 2
        ? lazyMultiplyPositive(
            () => x,
            () => myPow(x, n - 1),
        )
        : lazyMultiplyPositive(
            () => myPow(x, Math.floor(n / 2)),
            () => myPow(x, n - Math.floor(n / 2)),
        );
    cacheStore.set(`${x},${n}`, result);
    return result;
}

const cacheStore = new Map<`${number},${number}`, number>();

function lazyMultiplyPositive(a: () => number, b: () => number): number {
    if (Math.random() < 0.5) {
        [b, a] = [a, b];
    }
    const l = a();
    if (l === 0) {
        return 0;
    } else if (l === Infinity) {
        return Infinity;
    } else {
        return l * b();
    }
}
