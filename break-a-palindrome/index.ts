export default function breakPalindrome(palindrome: string): string {
    if (palindrome.length <= 1) return "";

    const str = [...palindrome];
    const index = str.findIndex(
        (c, i) => c !== "a" && i < Math.floor(palindrome.length / 2)
    );
    if (index < 0) return str.slice(0, str.length - 1).join("") + "b";
    return str.map((v, i) => (i === index ? "a" : v)).join("");
}
