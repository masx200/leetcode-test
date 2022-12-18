function cycleLengthQueries(_n: number, queries: number[][]): number[] {
    return queries.map(([a, b]) => {
        let ans = 1;
        while (a !== b) {
            if (a > b) {
                a = a >> 1;
            } else {
                b = b >> 1;
            }
            ans++;
        }
        return ans;
    });
}
export default cycleLengthQueries;
