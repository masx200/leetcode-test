function area(current: Interval): bigint {
    return BigInt(current.right - current.left) *
        BigInt(current.up - current.down);
}
function rectangleArea(rectangles: number[][]): number {
    const left = Math.min(...rectangles.map((a) => a[0]));
    const down = Math.min(...rectangles.map((a) => a[1]));
    const right = Math.max(...rectangles.map((a) => a[2]));
    const up = Math.max(...rectangles.map((a) => a[3]));

    const total = { left, right, down, up };
    const root = new SegmentNode(total);

    for (const [left, down, right, up] of rectangles) {
        change(root, { left, right, down, up }, 1n);
    }

    return Number(root.value % BigInt(10 ** 9 + 7));
}
function change(
    node: SegmentNode,
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

    if (
        contains(target, current)
    ) {
        if (node.children.length === 0) {
            node.value = value *
                area(current);

            return;
        }
    } else {
        if (node.children.length === 0) {
            const midx = [target.left, target.right].filter((a) =>
                current.left < a && current.right > a
            )[0] ?? current.right;
            const midy = [target.down, target.up].filter((a) =>
                current.down < a && current.up > a
            )[0] ?? current.up;
            const subinterval = TwoDSplit(current, midx, midy);

            if (subinterval.length) {
                node.children = subinterval.map(
                    (c) =>
                        new SegmentNode(
                            c,
                            area(c) *
                                BigInt(node.value > 0),
                        ),
                );
            }
        }
    }
    if (node.children.length) {
        for (const child of node.children) {
            change(child, target, value);
        }

        node.value = node.children.length
            ? node.children.reduce((a, n) => a + n.value, 0n)
            : node.value;

        if (
            node.value === value *
                    area(current) || node.value === 0n
        ) {
            node.children.length = 0;
        }
    }
}
export function contains(target: Interval, current: Interval): boolean {
    return target.left <= current.left &&
        target.down <= current.down &&
        target.right >= current.right &&
        target.up >= current.up;
}

export function TwoDSplit(
    current: Interval,
    midx: number,
    midy: number,
): Interval[] {
    const { left, right, up, down } = current;

    if (left > right || down > up) return [];

    if ((right - left) * (up - down) <= 1) return [];
    const mx = midx;

    const my = midy;

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
            left <= right && down <= up && (right - left) * (up - down) &&
            !(left === current.left && down === current.down &&
                up === current.up && right === current.right),
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
