import { greatestCommonDivisor } from "../max-points-on-a-line/greatest_common_divisor.ts";
import { deduplication } from "./deduplication.ts";
import { Fraction } from "./Fraction.ts";
import { parseFraction } from "./parseFraction.ts";
import { FractionToString } from "./Fraction.ts";
export function fractionAdd(fractions: Fraction[], simplify = true): Fraction {
    const denominator = deduplication(
        fractions.map((f) => f.denominator),
    ).reduce((a, b) => a * b);
    const molecular = fractions
        .map((f) => (f.sign * f.molecular * denominator) / f.denominator)
        .reduce((a, b) => a + b);
    const gcd = simplify ? greatestCommonDivisor(molecular, denominator) : 1;
    return new Fraction({
        denominator: denominator / gcd,
        molecular: molecular / gcd,
    });
}
function fractionAddition(expression: string): string {
    const fractions = parseFraction(expression);

    return FractionToString(
        fractionAdd(fractions),
    );
}
export default fractionAddition;
