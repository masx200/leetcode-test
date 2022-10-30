export default function sandyLandManagement(size: number): number[][] {
    if (size < 4) { //size=1-3,直接返回
        return [[[1, 1]], [[1, 1], [2, 1], [2, 3]], [[1, 1], [2, 1], [2, 3], [
            3,
            1,
        ], [3, 5]]][size - 1];
    }
    const res = [[1, 1]];
    for (let i = 2; i <= size; i++) {
        const y = (size - i) % 4; //根据规律选择添加方式
        if (y === 0) {
            for (let j = 1; j < 2 * i; j += 2) {
                res.push([i, j]);
            }
        } else if (y === 1) {
            res.push([i, 2]);
        } else if (y === 2) {
            for (let j = 3; j < 2 * i; j += 2) {
                res.push([i, j]);
            }
        } else if (y === 3) {
            res.push([i, 1]);
        }
    }
    return res;
}
