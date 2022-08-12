class Operations {
    constructor() {}

    minus(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        return Math.trunc(a / b);
    }
}
export default Operations;
