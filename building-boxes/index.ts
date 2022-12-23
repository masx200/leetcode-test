function minimumBoxes(n: number): number {
    let i = Math.floor(Math.pow(6.0 * n, 1.0 / 3));
    if (g(i) < n) {
        i++;
    }
    n -= g(i - 1);
    const j = Math.floor(Math.ceil((1.0 * (Math.sqrt(8 * n + 1) - 1)) / 2));
    return ((i - 1) * i) / 2 + j;
}

function g(x: number) {
    return (x * (x + 1) * (x + 2)) / 6;
}
export default minimumBoxes;
