export default function mostWordsFound(sentences: string[]): number {
    return Math.max(
        // deno-lint-ignore ban-ts-comment
        //@ts-ignore
        ...sentences.map((s) =>
            // deno-lint-ignore ban-ts-comment
            //@ts-ignore
            Array.prototype.reduce.call(s, (a, v) => a + Number(v === " "), 1)
        ),
    );
}
