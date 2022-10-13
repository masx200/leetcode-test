import { Poly } from "./Poly.ts";
import { tokenize } from "./tokenize.ts";

export default function basicCalculatorIV(
    expression: string,
    evalvars: string[],
    evalints: number[]
): string[] {
    const tokens = tokenize(expression, evalvars, evalints);
    return parse(tokens).toList();
}

function parse(tokens: (string | number)[]): Poly {
    throw new Error("Function not implemented.");
}
