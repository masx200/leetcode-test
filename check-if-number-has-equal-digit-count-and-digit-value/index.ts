function digitCount(num: string): boolean {
    const cnt: number[] = [...num].reduce(
        (p: number[], v: string) => (p[Number(v)]++, p),
        Array<number>(10).fill(0)
    );

    return num === cnt.slice(0, num.length).join("");
}
export default digitCount;
