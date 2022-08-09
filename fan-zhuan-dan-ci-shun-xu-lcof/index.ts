function reverseWords(s: string): string {
    return s.trim().split(/\s+/g).reverse().join(" ");
}
export default reverseWords;
