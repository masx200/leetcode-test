export function sum(a: Array<number>): number {
    let r = 0;
    for (const v of a) {
        r += v;
    }
    return r;
}
