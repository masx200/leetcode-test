function rectangleArea(rectangles: number[][]): number {
    const root = new Node();
    const left = Math.min(...rectangles.map((a) => a[0]));
    const down = Math.min(...rectangles.map((a) => a[1]));
    const right = Math.max(...rectangles.map((a) => a[2]));
    const up = Math.max(...rectangles.map((a) => a[3]));

    const total = ({ left, right, down, up });
    // console.log(root, total);
    for (const [left, down, right, up] of rectangles) {
        change(root, total, { left, right, down, up }, 1n);
        // console.log(root, total);
    }
    // console.log(root, total);
    return Number(root.value % BigInt(10 ** 9 + 7));
}
function change(
    node: Node,
    current: Interval,
    target: Interval,
    value: bigint,
) {
    if (
        target.up < current.down || target.right < current.left ||
        target.down > current.up || target.left > current.right
    ) return;
    // console.log({ node, current, target, value });
    if (
        target.left <= current.left && target.down <= current.down &&
        target.right >= current.right && target.up >= current.up
    ) {
        // console.log("找到了包含target的范围了");
        if (node.children.length === 0) {
            node.value = value * BigInt(current.right - current.left) *
                BigInt(current.up - current.down);
            return;
        }
    } else {
        if (node.children.length === 0) {
            node.children = binarySplit(current).map((c) =>
                new Node(
                    BigInt(c.right - c.left) *
                        BigInt(c.up - c.down) * BigInt(node.value > 0),
                )
            );
            // console.log("创建子节点", node.value, node.children);
        }
    }
    for (const [index, next] of binarySplit(current).entries()) {
        change(node.children[index], next, target, value);
    }
    //可能没有子节点
    node.value = node.children.length
        ? node.children.reduce((a, n) => a + n.value, 0n)
        : node.value;
}
export function binarySplit(current: Interval): Interval[] {
    const { left, right, up, down } = current;

    if (left > right || down > up) return [];

    if ((right - left) * (up - down) <= 1) return [];
    const mx = Math.floor((left + right) / 2);
    const my = Math.floor((down + up) / 2);

    const lr = [{ left: left, right: mx }, { left: mx, right: right }];
    const du = [{ down: down, up: my }, { down: my, up: up }];
    const result = lr.map(({ left, right }) =>
        du.map(({ up, down }) => ({ left, right, down, up }))
    ).flat();
    return result.filter(({ left, right, up, down }) =>
        left <= right && down <= up && (right - left) * (up - down)
    );
}
export class Node {
    constructor(
        public value: bigint = 0n,
        public children: Node[] = [],
    ) {}
}
export interface Interval {
    left: number;
    right: number;
    down: number;
    up: number;
}

export default rectangleArea;
