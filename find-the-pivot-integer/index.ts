function pivotInteger(n: number): number {
    const m = Math.floor((n * (n + 1)) / 2);

    const x = Math.floor(Math.sqrt(m));
    return x * x === m ? x : -1;
}
export default pivotInteger;
