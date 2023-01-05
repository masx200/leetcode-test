export default function numDifferentIntegers(word: string): number {
    return new Set(
        word
            .split(/[^\d]+/)
            .filter(Boolean)
            .map(BigInt)
    ).size;
}
