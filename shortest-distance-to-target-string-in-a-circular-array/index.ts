function closetTarget(
    words: string[],
    target: string,
    startIndex: number
): number {
    if (!words.includes(target)) return -1;

    if (words[startIndex] === target) return 0;
    const indexes: number[] = [];

    for (const [index, word] of words.entries()) {
        if (word === target) indexes.push(index);
    }

    return Math.min(
        ...indexes.map((index) => Math.abs(index - startIndex)),
        ...indexes.map((index) => Math.abs(words.length + index - startIndex)),
        ...indexes.map((index) => Math.abs(-words.length + index - startIndex))
    );
}
export default closetTarget;
