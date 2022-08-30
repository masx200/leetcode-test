import { greatest_common_divisor } from "../max-points-on-a-line/greatest_common_divisor.ts";
import { deduplication } from "./deduplication.ts";
import { Fraction } from "./Fraction.ts";
import { parseFraction } from "./parseFraction.ts";

function fractionAddition(expression: string): string {
    const fractions = parseFraction(expression);

    const denominator = deduplication(
        fractions.map((f) => f.denominator),
    ).reduce((a, b) => a * b);
    const molecular = fractions
        .map((f) => (f.sign * f.molecular * denominator) / f.denominator)
        .reduce((a, b) => a + b);
    const gcd = greatest_common_divisor(molecular, denominator);

    return new Fraction({
        denominator: denominator / gcd,
        molecular: molecular / gcd,
    }).toString();
}
export default fractionAddition;
