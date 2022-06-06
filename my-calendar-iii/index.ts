import { uniqBy } from "../deps.ts";

export default class MyCalendarThree {
    /* 上三角稀疏二维矩阵 */
    #startToEndToValue: UpperTriangleTwoDimensionalMap = new Map<
        number,
        Map<number, number>
    >();
    book(start: number, end: number): number {
        const map = this.#startToEndToValue;

        const intersectingIntervals = upperTriangleTwoDimensionalMapKeys(
            map
        ).filter(([key1, key2]) => {
            if (key2 < start || end - 1 < key1) {
                return false;
            } else return true;
        });
        const intervalsToChange = createIntervals(
            start,
            end - 1,
            intersectingIntervals
        );
        console.log(intervalsToChange);
        intervalsToChange.forEach((key) => {
            addOne(map, key);
        });
        console.log(map);
        return Math.max(...upperTriangleTwoDimensionalMapValues(map));
    }
}
export function createIntervals(
    start: number,
    end: number,
    intervals: Array<[number, number]>
): Array<[number, number]> {
    const points = Array.from(new Set([start, end, intervals].flat(2))).sort(
        (a, b) => a - b
    );
    const result = Array.from(intervals);
    result.push([start, end]);
    for (let i = 0, j = 1; i < points.length && j < points.length; i++, j++) {
        result.push([points[i], points[j]]);
    }
    return uniqBy(
        result.filter(([key1, key2]) => {
            if (key2 < start || end < key1) {
                return false;
            } else return true;
        }),
        (a) => JSON.stringify(a)
    );
}
export function addOne(
    map: UpperTriangleTwoDimensionalMap,
    key: [number, number]
) {
    upperTriangleTwoDimensionalMapSet(
        map,
        key,
        1 + (upperTriangleTwoDimensionalMapGet(map, key) ?? 0)
    );
}
export type UpperTriangleTwoDimensionalMap = Map<number, Map<number, number>>;
export function upperTriangleTwoDimensionalMapGet(
    map: UpperTriangleTwoDimensionalMap,
    key: [number, number]
): number | undefined {
    let [key1, key2] = key;
    if (key1 > key2) {
        [key1, key2] = [key2, key1];
    }
    return map.get(key1)?.get(key2);
}
export function upperTriangleTwoDimensionalMapHas(
    map: UpperTriangleTwoDimensionalMap,
    key: [number, number]
): boolean {
    let [key1, key2] = key;
    if (key1 > key2) {
        [key1, key2] = [key2, key1];
    }
    return map.has(key1) && !!map.get(key1)?.has(key2);
}
export function upperTriangleTwoDimensionalMapSet(
    map: UpperTriangleTwoDimensionalMap,
    key: [number, number],
    value: number
): UpperTriangleTwoDimensionalMap {
    const [key1, key2] = key;
    return map.set(
        key1,
        (map.get(key1) ?? new Map<number, number>()).set(key2, value)
    );
}
export function upperTriangleTwoDimensionalMapKeys(
    map: UpperTriangleTwoDimensionalMap
): [number, number][] {
    return Array.from(map.keys())
        .map((key1) =>
            Array.from(map.get(key1)?.keys() ?? []).map(
                (key2) => [key1, key2] as [number, number]
            )
        )
        .flat();
}
export function upperTriangleTwoDimensionalMapValues(
    map: UpperTriangleTwoDimensionalMap
): number[] {
    return Array.from(map.values())
        .map((m) => Array.from(m.values()))
        .flat();
}

const temp = new MyCalendarThree();
const args = [
    [10, 20],
    [50, 60],
    [10, 40],
    [5, 15],
    [5, 10],
    [25, 55],

    [0, 100],
    [10, 20],
    [50, 60],
    [10, 40],
    [5, 15],
    [5, 10],
    [25, 55],
] as const;
args.forEach(([start, end]) => {
    return console.log(start, end, temp.book(start, end));
});
