function getModel(word: string): Array<number> {
    const modelMap = new Map<string, number>();
    const model: Array<number> = [];
    for (const char of word) {
        if (!modelMap.has(char)) {
            modelMap.set(char, modelMap.size);
        }
        const size = modelMap.get(char);
        if (typeof size === "number") {
            model.push(size);
        }
    }
    return model;
}
function findAndReplacePattern(words: string[], pattern: string): string[] {
    const model = getModel(pattern);
    return words.filter(
        (word) =>
            word.length === pattern.length && ArrayEquals(model, getModel(word))
    );
}
function ArrayEquals(a: Array<unknown>, b: Array<unknown>): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
export default findAndReplacePattern;
