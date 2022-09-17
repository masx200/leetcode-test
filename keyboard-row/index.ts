function findWords(words: string[]): string[] {
    const one = new Set("qwertyuiop");
    const two = new Set("asdfghjkl");
    const three = new Set("zxcvbnm");

    return words.filter((w) =>
        [one, two, three].some((s) =>
            Array.prototype.every.call(w, (c) => s.has(c.toLowerCase()))
        )
    );
}
export default findWords;
