import { Token } from './Token.ts';
import { TokenType } from './TokenType.ts';

export function getTokenType(token: Token) {
    const tokentype: TokenType = typeof token === "number"
        ? TokenType["number"]
        : typeof token === "string"
        ? TokenType["operator"]
        : Array.isArray(token)
        ? TokenType["parentheses"]
        : TokenType["unknown"];
    return tokentype;
}
