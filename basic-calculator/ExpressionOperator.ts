import { BinaryExpression } from './BinaryExpression.ts';
import { UnaryExpression } from './UnaryExpression.ts';

export type ExpressionOperator =
    | UnaryExpression["operator"]
    | BinaryExpression["operator"];
