import { countBy } from "../deps.ts";

function equalFrequency(word: string): boolean {
    for (let i = 0; i < word.length; i++) {
        const obj = countBy(word.slice(0, i) + word.slice(i + 1)),
            set = new Set();
        for (const k in obj) {
            set.add(obj[k]);
        }
        if (set.size === 1) return true;
    }
    return false;
}
export default equalFrequency;
