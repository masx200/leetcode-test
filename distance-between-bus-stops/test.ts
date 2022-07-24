import { assertEquals } from "../deps.ts";
import distanceBetweenBusStops from "./index.ts";

Deno.test("distance-between-bus-stops", () => {
    const distance = [1, 2, 3, 4];
    const start = 0;
    const destination = 3;
    const expected = 4;
    const actual = distanceBetweenBusStops(distance, start, destination);
    assertEquals(actual, expected);

    const distance2 = [1, 2, 3, 4];
    const start2 = 0;
    const destination2 = 2;
    const expected2 = 3;
    const actual2 = distanceBetweenBusStops(distance2, start2, destination2);
    assertEquals(actual2, expected2);

    const distance3 = [1, 2, 3, 4];
    const start3 = 0;
    const destination3 = 1;
    const expected3 = 1;

    const actual3 = distanceBetweenBusStops(distance3, start3, destination3);
    assertEquals(actual3, expected3);
    assertEquals(
        distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2),
        17,
    );
});
