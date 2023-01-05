export default function matrixReshape(
    mat: number[][],
    r: number,
    c: number
): number[][] {
    if (r * c !== mat.length * mat[0].length) return mat;
    const arr = mat.flat();

    return [...Array(r).keys()].map((i) => arr.slice(i * c, i * c + c));
}
