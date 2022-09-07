export default function constructArray(n: number, k: number): number[] {

    const answer: number[] = new Array(n).fill(0);
    let idx = 0;
    for (let i = 1; i < n - k; ++i) {
        answer[idx] = i;
        ++idx;
    }
    for (let i = n - k, j = n; i <= j; ++i, --j) {
        answer[idx] = i;
        ++idx;
        if (i !== j) {
            answer[idx] = j;
            ++idx;
        }
    }
    return answer;
};
