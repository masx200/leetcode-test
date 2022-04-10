export default function myPow(x: number, n: number): number {
    if (Number.isNaN(x) || Number.isNaN(n)) {
        throw Error("nan:" + x + "," + n);
    }
    // console.log(x, n);
    if (x === Infinity) {
        return n > 0 ? Infinity : n < 0 ? 0 : 1;
    }
    if (x === -Infinity) {
        return (n % 2 === 0 ? 1 : -1) * myPow(-x, n);
    }
    if (n === Infinity) {
        return x === 0 ? 0 : Infinity;
    }
    if (n === -Infinity) {
        return x === 0 ? Infinity : 0;
    }
    // setTimeout(() => {
    //     cacheStore.clear();
    // }, 0);
    // const cached = cacheStore.get(`${x},${n}`);
    // if (cached) {
    //     console.log("cached");
    //     console.log(x, n);
    //     return cached;
    // }

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
        ? x * myPow(x, n - 1)
        : /* lazyMultiplyPositive(
                  () => x,
                  () => myPow(x, n - 1)
              ) */
            myPow(x * x, Math.floor(n / 2));
    /* lazyMultiplyPositive(
            () => myPow(x, Math.floor(n / 2)),
            () => myPow(x, n - Math.floor(n / 2)),
        ); */

    // cacheStore.set(`${x},${n}`, result);
    return result;
}
//缓存命中率过低
// const cacheStore = new Map<`${number},${number}`, number>();

// function lazyMultiplyPositive(a: () => number, b: () => number): number {
//     if (Math.random() < 0.5) {
//         [b, a] = [a, b];
//     }
//     const l = a();
//     if (l === 0) {
//         return 0;
//     } else if (l === Infinity) {
//         return Infinity;
//     } else {
//         return l * b();
//     }
// }
