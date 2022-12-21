function maximum(a: number, b: number): number {
    return [a, b].sort((a, b) => b - a)[0];
}
export default maximum;
