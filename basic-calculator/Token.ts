import { Tokens } from './Tokens.ts';

export type Token = Tokens extends (infer P)[] ? P : never;
