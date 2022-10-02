import { countBy } from "../deps.ts";

function equalFrequency(word: string): boolean {
    for (let i = 0; i < word.length; i++) {
        const obj = countBy(word.slice(0, i) + word.slice(i + 1)),
            set = new Set<number>(Object.values(obj));

        if (set.size === 1) return true;
    }
    return false;
}
export default equalFrequency;
