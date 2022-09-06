function uniqueLetterString(s: string): number {
    const index = new Map<string, number[]>();

    for (const [i, c] of Array.prototype.entries.call(s)) {
        const arr = index.get(c) ?? [-1];
        arr.push(i);
        index.set(c, arr);
    }
    let res = 0;

    for (const arr of index.values()) {
        arr.push(s.length);

        for (let i = 1; i < arr.length - 1; i++) {
            res += (arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i]);
        }
    }
    return res;
}
export default uniqueLetterString;
