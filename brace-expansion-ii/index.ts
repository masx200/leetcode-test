import { evaluate, parse } from '../brace-expansion/index.ts';
import { deduplication } from '../fraction-addition-and-subtraction/deduplication.ts';

export default function braceExpansionII(s: string): string[] {
    if (s.includes("{")) {
        const m = parse(s);

        if (typeof m === "string") return [m];
        return deduplication(evaluate(m)).sort();
    } else {
        return [s];
    }
}
