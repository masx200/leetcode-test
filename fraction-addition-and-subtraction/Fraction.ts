export class Fraction {
    sign: number;
    molecular: number;
    denominator: number;
    toString() {
        return `${
            this.sign < 0 ? "-" : ""
        }${this.molecular}/${this.denominator}`;
    }
    constructor({
        sign = "+",
        molecular = 1,
        denominator = 1,
    }: {
        sign?: "+" | "-" | number;
        molecular?: number | string;
        denominator?: number | string;
    } = {}) {
        sign = sign || "+";
        this.sign = (sign === "+" ? 1 : sign === "-" ? -1 : sign) *
            Math.sign(Number(denominator)) *
            Math.sign(Number(molecular));
        this.molecular = Math.abs(Number(molecular));
        this.denominator = Math.abs(Number(denominator));
    }
}
