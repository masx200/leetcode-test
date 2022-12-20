function maximumScore(a: number, b: number, c: number): number {
    const sum = a + b + c;
    const maxVal = Math.max(a, b, c);
    return Math.min(sum - maxVal, Math.floor(sum / 2));
}
export default maximumScore;
