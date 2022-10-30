import { buildExpression } from './buildExpression.ts';
import { evaluate } from './evaluate.ts';
import { tokenize } from './tokenize.ts';

export default function calculate(s: string): number {
    const tokens = tokenize(s);

    const ast = buildExpression(tokens);

    return evaluate(ast);
}
