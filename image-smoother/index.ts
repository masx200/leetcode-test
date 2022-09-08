function imageSmoother(img: number[][]): number[][] {
    const dirs = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];
    return img.map((a, i) =>
        a.map((v, j) => {
            const all = [
                v,
                ...dirs
                    .map(([r, c]) => img[i + r]?.[j + c])
                    .filter(Number.isInteger),
            ] as number[];
            return Math.floor(all.reduce((a, v) => a + v) / all.length);
        })
    );
}
export default imageSmoother;
