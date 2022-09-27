export default function reverseVowels(s: string): string {
    const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

    const vowels = Array.prototype.filter.call(s, (c) => set.has(c));
    let i = vowels.length - 1;

    return Array.prototype.map
        .call(s, (c) => (set.has(c) ? vowels[i--] : c))
        .join("");
}
