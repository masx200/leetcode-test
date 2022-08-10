export default function minimumLengthEncoding(words: string[]): number {
    words = words.map((s) => Array.from(s).reverse().join(""));
    words.sort();
    let res = 0;

    for (let i = 0; i < words.length - 1; i++) {
        const size = words[i].length;
        if (!words[i + 1].startsWith(words[i])) res += size + 1;
    }
    return res + words[words.length - 1].length + 1;
}
