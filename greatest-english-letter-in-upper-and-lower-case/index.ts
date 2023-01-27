function greatestLetter(s: string): string {
    const ht = new Set<string>();
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        ht.add(c);
    }
    for (let i = 25; i >= 0; i--) {
        if (
            ht.has(String.fromCharCode("a".charCodeAt(0) + i)) &&
            ht.has(String.fromCharCode("A".charCodeAt(0) + i))
        ) {
            return String.fromCharCode("A".charCodeAt(0) + i);
        }
    }
    return "";
}
export default greatestLetter;
