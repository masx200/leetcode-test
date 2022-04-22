export default function toGoatLatin(sentence: string): string {
    return sentence.split(" ").map((v, i) => {
        if (unordered_set.has(v[0])) {
            v = v + "ma";
        } else {
            v = v.slice(1) + v[0] + "ma";
        }
        return v + "a".repeat(i + 1);
    }).join(" ");
}
const unordered_set = new Set([
    "a",
    "e",
    "i",
    "o",
    "u",
    "A",
    "E",
    "I",
    "O",
    "U",
]);
