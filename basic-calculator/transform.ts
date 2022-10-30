import { State } from './State.ts';
import { TokenType } from './TokenType.ts';

export const transform: Record<State, Record<TokenType, State>> = {
    [State.initial]: {
        [TokenType.operator]: State.unary,
        [TokenType.number]: State.number,
        [TokenType.parentheses]: State.parentheses,
    },
    [State.unary]: {
        [TokenType.number]: State.number,
        [TokenType.parentheses]: State.parentheses,
    },
    [State.binary]: {
        [TokenType.number]: State.number,
        [TokenType.parentheses]: State.parentheses,
    },
    [State.parentheses]: {
        [TokenType.operator]: State.binary,
    },
    [State.number]: {
        [TokenType.operator]: State.binary,
    },
} as Record<State, Record<TokenType, State>>;
