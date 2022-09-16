function rectangleArea(rectangles: number[][]): number {
    const left = Math.min(...rectangles.map((a) => a[0]));
    const down = Math.min(...rectangles.map((a) => a[1]));
    const right = Math.max(...rectangles.map((a) => a[2]));
    const up = Math.max(...rectangles.map((a) => a[3]));

    const total = { left, right, down, up };
    const root = new SegmentNode(total);
    // console.log(root, total);
    for (const [left, down, right, up] of rectangles) {
        change(root, /*  total, */ { left, right, down, up }, 1n);
        // console.log(root, total);
    }

    // console.log(root)
    return Number(root.value % BigInt(10 ** 9 + 7));
}
function change(
    node: SegmentNode,
    // current: Interval,
    target: Interval,
    value: bigint,
) {
    const current = node.interval;
    if (
        target.up < current.down ||
        target.right < current.left ||
        target.down > current.up ||
        target.left > current.right
    ) {
        return;
    }
    // console.log({ node, current, target, value });
    const subinterval = binarySplit(current);

    if (
        target.left <= current.left &&
        target.down <= current.down &&
        target.right >= current.right &&
        target.up >= current.up
    ) {
        // console.log("找到了包含target的范围了");
        if (node.children.length === 0) {
            node.value = value *
                BigInt(current.right - current.left) *
                BigInt(current.up - current.down);
            return;
        }
    } else {
        if (node.children.length === 0) {
            if (subinterval.length) {
                node.children = subinterval.map(
                    (c) =>
                        new SegmentNode(
                            c,
                            BigInt(c.right - c.left) *
                                BigInt(c.up - c.down) *
                                BigInt(node.value > 0),
                        ),
                );
            }
            // console.log("创建子节点", node.value, node.children);
        }
    }
    if (subinterval.length) {
        // for (const [index, next] of subinterval.entries()) {
        //     change(node.children[index], /* next, */ target, value);
        // }

        for (const child of node.children) {
            change(child, target, value);
        }
        //可能没有子节点
        node.value = node.children.length
            ? node.children.reduce((a, n) => a + n.value, 0n)
            : node.value;
    }
}
export function binarySplit(current: Interval): Interval[] {
    const { left, right, up, down } = current;

    if (left > right || down > up) return [];

    if ((right - left) * (up - down) <= 1) return [];
    const mx = Math.floor((left + right) / 2);
    const my = Math.floor((down + up) / 2);

    const lr = [
        { left: left, right: mx },
        { left: mx, right: right },
    ];
    const du = [
        { down: down, up: my },
        { down: my, up: up },
    ];
    const result = lr
        .map(({ left, right }) =>
            du.map(({ up, down }) => ({ left, right, down, up }))
        )
        .flat();
    return result.filter(
        ({ left, right, up, down }) =>
            left <= right && down <= up && (right - left) * (up - down),
    );
}
export class SegmentNode {
    constructor(
        public interval: Interval = new Interval(),
        public value: bigint = 0n,
        public children: SegmentNode[] = [],
    ) {}
}
export class Interval {
    constructor(
        public left = 0,
        public right = 0,
        public down = 0,
        public up = 0,
    ) {}
}

export default rectangleArea;
