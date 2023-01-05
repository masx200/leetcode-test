function minOperations(s: string): number {
    const res = Array.prototype.reduce.call(
        s,
        //@ts-ignore
        (p: number, c: string, i: number) => p + Number(i % 2 === Number(c)),
        0,
    ) as number;
    return Math.min(res, s.length - res);
}
export default minOperations;
