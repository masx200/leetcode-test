import { Fraction } from "../fraction-addition-and-subtraction/Fraction.ts";
import { fractionAdd } from "../fraction-addition-and-subtraction/index.ts";

export default function fraction(cont: number[]): number[] {
    const result = cont.reduceRight(
        (p, c) =>
            fractionAdd([
                new Fraction({ molecular: c, denominator: 1 }),
                fractionReciprocal(p),
            ]),
        new Fraction({ molecular: 1, denominator: 0 })
    );
    return [result.molecular, result.denominator];
}
export function fractionReciprocal(fraction: Fraction): Fraction {
    return new Fraction({
        sign: fraction.sign,
        denominator: fraction.molecular,
        molecular: fraction.denominator,
    });
}
