import { groupBy, sum } from "../deps.ts";

function distanceBetweenBusStops(
    distance: number[],
    start: number,
    destination: number,
): number {
    [start, destination] = [
        Math.min(start, destination),
        Math.max(start, destination),
    ];

    return Math.min(
        // deno-lint-ignore ban-ts-comment
        //@ts-ignore
        ...Object.values(
            groupBy(
                Array.from(distance.entries()),
                ([index]) => start <= index && index < destination,
            ),
            // deno-lint-ignore ban-ts-comment
            //@ts-ignore
        ).map((value) => sum(value.map((a) => a[1]))),
    );
}
export default distanceBetweenBusStops;
