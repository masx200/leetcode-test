export default function validateBinaryTreeNodes(
    n: number,
    leftChild: number[],
    rightChild: number[]
): boolean {
    const record = new Array(n).fill(0);
    const set = new Set(new Array(n).fill(0).map((_, index) => index));
    //找到默认的根节点
    for (let i = 0; i < n; i++) {
        if (leftChild[i] >= 0) {
            set.delete(leftChild[i]);
        }
        if (rightChild[i] >= 0) {
            set.delete(rightChild[i]);
        }
    }
    if (set.size != 1) return false;
    const q = [...set];
    while (q.length) {
        let len = q.length;
        while (len) {
            const i = q.shift() as number;
            len--;
            //若是当前节点入度大于1则不是正确的二叉树
            if (record[i]) return false;
            record[i] = 1;
            if (leftChild[i] >= 0) q.push(leftChild[i]);
            if (rightChild[i] >= 0) q.push(rightChild[i]);
        }
    }
    return Math.min(...record) == 0 ? false : true;
}
