export default function floodFill(
    image: number[][],
    sr: number,
    sc: number,
    newColor: number
): number[][] {
    if (newColor === image[sr][sc]) return image;
    const currColor = image[sr][sc];
    dfs(image, sr, sc, currColor, newColor);
    return image;
}
const directions: Array<[number, number]> = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];
function dfs(
    image: number[][],
    sr: number,
    sc: number,
    oldColor: number,
    newColor: number
) {
    const row = image.length;
    const col = image[0].length;
    if (sr >= row || sr < 0 || sc < 0 || sc >= col) {
        return;
    }
    if (image[sr][sc] === oldColor) {
        image[sr][sc] = newColor;

        for (const [i, j] of directions) {
            const x = sr + i;
            const y = sc + j;
            if (x >= 0 && x < row && y >= 0 && y < col) {
                dfs(image, x, y, oldColor, newColor);
            }
        }
    }
}
