export default function bestCoordinate(
    towers: number[][],
    radius: number,
): number[] {
    const xmax = Math.max(...towers.map((a) => a[0]));
    const ymax = Math.max(...towers.map((a) => a[1]));

    return Array(xmax + 1)
        .fill(0)
        .reduce(
            (p: [number, number, number], _, x): [number, number, number] => {
                const current: [number, number, number] = Array(ymax + 1)
                    .fill(0)
                    .reduce(
                        (
                            p: [number, number, number],
                            _,
                            y,
                        ): [number, number, number] => {
                            const value: [number, number, number] = [
                                x,
                                y,
                                calcquality(x, y, radius, towers),
                            ];
                            return selectmax(p, value);
                        },
                        [0, 0, 0],
                    );
                return selectmax(p, current);
            },
            [0, 0, 0],
        )
        .slice(0, 2);
}

function selectmax(
    a: [number, number, number],
    b: [number, number, number],
): [number, number, number] {
    if (a[2] > b[2]) return a;
    if (a[2] < b[2]) return b;

    if (a[0] > b[0]) return b;

    if (a[0] < b[0]) return a;

    if (a[1] < b[1]) return a;
    return b;
}

function calcquality(
    x: number,
    y: number,
    radius: number,
    towers: number[][],
): number {
    return towers.reduce((p, [q, w, e]) => {
        const d = Math.hypot(x - q, y - w);
        if (d > radius) return p;
        return p + Math.floor(e / (1 + d));
    }, 0);
}
