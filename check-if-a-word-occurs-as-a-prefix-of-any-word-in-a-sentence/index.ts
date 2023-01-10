export default function isPrefixOfWord(
    sentence: string,
    searchWord: string,
): number {
    const index = sentence
        .split(" ")
        .findIndex((a) => a.startsWith(searchWord));

    return index < 0 ? index : index + 1;
}
