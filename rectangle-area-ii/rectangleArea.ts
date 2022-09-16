export default function rectangleArea(rectangles: number[][]): number {
    const down = Math.min(...rectangles.map((a) => a[1]));

    const up = Math.max(...rectangles.map((a) => a[3]));
    const root = new SegTree(down, up);
    const sweep = new Map<number, [number, number, number][]>();
    for (const [left, down, right, up] of rectangles) {
        insert(sweep, left, down, up, 1);
        insert(sweep, right, down, up, -1);
    }
    for (const arr of sweep.values()) {
        arr.sort((a, b) => {
            if (a[0] != b[0]) {
                return a[0] - b[0];
            } else if (a[1] != b[1]) {
                return a[1] - b[1];
            } else {
                return a[2] - b[2];
            }
        });
    }
    let ans = 0n;
    const sorted = [...sweep.entries()].sort((a, b) => a[0] - b[0]);
    for (const [index, [key, arr]] of sorted.entries()) {
        if (index === sorted.length - 1) break;
        for (const [down, up, diff] of arr) {
            update(
                root,
                { left: down, right: up },
                {
                    call: (node) => {
                        node.count += diff;

                        node.value = Math.sign(node.count) *
                            (node.right - node.left);
                    },
                    create: ({ left, right }) => new SegTree(left, right),
                    down: (node) => {
                        node.children.forEach((c) => {
                            c.count = node.count;
                            c.value = Math.sign(c.count) * (c.right - c.left);
                        });
                    },
                    up: (node) => {
                        node.value = node.children.length
                            ? node.children.reduce((a, v) => a + v.value, 0)
                            : node.value;

                        if (
                            node.value === 0
                        ) {
                            node.count = 0;
                            node.children.length = 0;
                        }
                    },
                },
            );
        }
        ans += BigInt(root.value) * BigInt(sorted[index + 1][0] - key);
    }
    return Number(ans % BigInt(10 ** 9 + 7));
}
export class SegTree {
    constructor(
        public left = 0,
        public right = 0,
        public value: number = 0,
        public count = 0,
        public children: SegTree[] = [],
    ) {}
}

function insert(
    sweep: Map<number, [number, number, number][]>,
    left: number,
    down: number,
    up: number,
    diff: number,
) {
    const arr = sweep.get(left) ?? [];
    arr.push([down, up, diff]);
    sweep.set(left, arr);
}
export function update<
    T extends { left: number; right: number; children: T[] },
>(
    node: T,
    target: { left: number; right: number },
    options: {
        call: (a: T) => void;
        create: (target: { left: number; right: number }) => T;
        down: (a: T) => void;
        up: (a: T) => void;
    },
): void {
    const { call, create, down, up } = options;
    const current = node;
    if (
        target.right < current.left ||
        target.left > current.right
    ) {
        return;
    }

    if (
        target.left <= current.left &&
        target.right >= current.right
    ) {
        if (node.children.length === 0) {
            call(node);

            return;
        }
    } else {
        if (node.children.length === 0) {
            const midx = [target.left, target.right].filter((a) =>
                current.left < a && current.right > a
            )[0] ?? current.right;

            const subinterval = OneSplit(current, midx);

            if (subinterval.length) {
                node.children = subinterval.map(
                    (c) =>
                        create(c),
                );
                down(node);
            }
        }
    }
    if (node.children.length) {
        for (const child of node.children) {
            update(child, target, options);
        }
        up(node);
    }
}
export function OneSplit(
    current: { left: number; right: number },
    midx: number,
): { left: number; right: number }[] {
    const { left, right } = current;

    if (left > right) return [];

    if ((right - left) <= 1) return [];
    const mx = midx;

    const lr = [
        { left: left, right: mx },
        { left: mx, right: right },
    ];

    const result = lr;

    return result.filter(
        ({ left, right }) =>
            left <= right && (right - left) &&
            !(left === current.left &&
                right === current.right),
    );
}
