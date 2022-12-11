function maximumValue(strs: string[]): number {
    return strs.reduce(
        (p, c) => Math.max(p, /^\d+$/.test(c) ? Number(c) : c.length),
        0
    );
}
export default maximumValue;
