import { groupBy } from '../deps.ts';

export default function areOccurrencesEqual(s: string): boolean {
    //@ts-ignore
    return new Set(Object.values(groupBy(s)).map((a) => a.length)).size === 1;
}
