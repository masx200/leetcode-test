export default getKth;
function getKth(lo: number, hi: number, k: number): number {
    const arr = Array(hi - lo + 1)
        .fill(0)
        .map((_, i) => i + lo);

    arr.sort((a, b) => {
        const w1 = getWeight(a);
        const w2 = getWeight(b);

        return w1 === w2 ? a - b : w1 - w2;
    });

    return arr[k - 1];
}

function cache<T extends (...args: any[]) => any>(fn: T): T {
    const store = new Map<string, ReturnType<T>>();

    return ((...args) => {
        const key = JSON.stringify(args);
        const cached = store.get(key);
        if (store.has(key)) {
            return cached as ReturnType<T>;
        }
        const result = Reflect.apply(fn, undefined, args);
        store.set(key, result);

        return result;
    }) as T;
}

const getWeight = cache(function (x: number): number {
    if (x === 1) {
        return 0;
    }
    if (x % 2) {
        return getWeight(x * 3 + 1) + 1;
    } else {
        return getWeight(x / 2) + 1;
    }
});
