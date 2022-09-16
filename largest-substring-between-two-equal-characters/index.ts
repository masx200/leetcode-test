export default function maxLengthBetweenEqualCharacters(s: string): number {
    const firstIndex: number[] = new Array(26).fill(-1);
    let maxLength = -1;
    for (let i = 0; i < s.length; i++) {
        const key = s[i].charCodeAt(0) - "a".charCodeAt(0);
        if (firstIndex[key] < 0) {
            firstIndex[key] = i;
        } else {
            maxLength = Math.max(maxLength, i - firstIndex[key] - 1);
        }
    }
    return maxLength;
}
