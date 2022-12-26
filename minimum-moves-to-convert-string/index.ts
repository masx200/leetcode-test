function minimumMoves(s: string): number {
    let t = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "X") {
            i += 2;
            t++;
        }
    }
    return t;
}
export default minimumMoves;
