export function sum(a: Array<number>) {
    // return a.reduce((p, v) => p + v, 0);
    let r = 0;
    for (const v of a) {
        r += v;
    }
    return r;
}
