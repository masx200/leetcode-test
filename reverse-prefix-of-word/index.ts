function reversePrefix(word: string, ch: string): string {
    const index = Array.prototype.findIndex.call(word, (c) => c === ch);

    if (index < 0) return word;
    return (
        Array.from(word.slice(0, index + 1))
            .reverse()
            .join("") + word.slice(index + 1)
    );
}
export default reversePrefix;
