function reverseWords(s: string): string {
    return s
        .trim()
        .split(/\s+/g)
        .map((a) => [...a].reverse().join(""))
        .join(" ");
}
export default reverseWords;
