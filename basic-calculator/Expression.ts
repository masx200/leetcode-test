import { BinaryExpression } from './BinaryExpression.ts';
import { NumericLiteral } from './NumericLiteral.ts';
import { ParenthesizedExpression } from './ParenthesizedExpression.ts';
import { UnaryExpression } from './UnaryExpression.ts';

export type Expression =
    | BinaryExpression
    | NumericLiteral
    | UnaryExpression
    | ParenthesizedExpression;
