function numSpecial(mat: number[][]): number {
    const rowsum = mat.map((a) => a.reduce((q, v) => q + v, 0));
    const colsum = mat[0].map((_, i) => mat.reduce((q, v) => q + v[i], 0));

    let ans = 0;

    mat.forEach((a, i) =>
        a.forEach(
            (v, j) => (ans += Number([v, colsum[j], rowsum[i]].every((v) =>
                v === 1
            ))),
        )
    );

    return ans;
}
export default numSpecial;
