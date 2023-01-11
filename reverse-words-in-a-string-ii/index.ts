export default function reverseWords(s: string[]): void {
    Array.prototype.forEach.call(
        s.join("").trim().split(/\s+/g).reverse().join(" "),
        (v, i) => (s[i] = v)
    );
}
