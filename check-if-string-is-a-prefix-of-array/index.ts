export default function isPrefixString(s: string, words: string[]): boolean {
    for (const word of words) {
        if (s.startsWith(word)) {
            s = s.slice(word.length);
            if (s.length === 0) return true;
        } else {
            return false;
        }
    }
    return false;
}
