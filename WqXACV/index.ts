function halfQuestions(questions: number[]): number {
    const cnt: Record<number, number> = {};

    for (const v of questions) {
        cnt[v] ??= 0;
        cnt[v]++;
    }
    const res = Object.values(cnt);

    res.sort((a, b) => -a + b);

    let ans = 0;

    const len = questions.length;
    let n = Math.floor(len / 2);
    for (const v of res) {
        if (n <= 0) break;
        ans++;
        n -= v;
    }
    return ans;
}
export default halfQuestions;
