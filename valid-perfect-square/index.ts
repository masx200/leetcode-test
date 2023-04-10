function isPerfectSquare(num: number): boolean {
    return Math.floor(sqrt(num)) ** 2 === num;
}

function sqrt(num: number) {
    let x0 = num;
    let x1 = 10 * num + 10;
    while (true) {
        x1 = -(x0 - num / x0) / (2) + x0;
        if (Math.abs(x0 - x1) < 1e-14) break;
        x0 = x1;
    }
    return x0;
}
export default isPerfectSquare;
