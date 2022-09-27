export default function CheckPermutation(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false;
    }
    const table: number[] = new Array(26).fill(0);
    for (let i = 0; i < s1.length; ++i) {
        table[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    }
    for (let i = 0; i < s2.length; ++i) {
        table[s2.charCodeAt(i) - "a".charCodeAt(0)]--;
        if (table[s2.charCodeAt(i) - "a".charCodeAt(0)] < 0) {
            return false;
        }
    }
    return true;
}
