// deno-lint-ignore-file ban-ts-comment
export default function reorderSpaces(text: string): string {
    const words = text.split(/\s+/g).filter(Boolean);

    //@ts-ignore
    const spaces = Array.prototype.reduce.call(
        text,
        //@ts-ignore
        (a, v) => a + Number(v === " "),
        0,
    ) as number;

    if (words.length <= 1) return words.join("") + " ".repeat(spaces);
    const sep = " ".repeat(Math.floor(spaces / (words.length - 1)));

    return words.join(sep) + " ".repeat(spaces % (words.length - 1));
}
