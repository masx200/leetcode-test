function isCircularSentence(sentence: string): boolean {
    const s = sentence.split(" ");
    for (let i = 0; i < s.length; i++) {
        if (s[i][s[i].length - 1] !== s[i + 1 === s.length ? 0 : i + 1][0]) {
            return false;
        }
    }
    return true;
}
export default isCircularSentence;
