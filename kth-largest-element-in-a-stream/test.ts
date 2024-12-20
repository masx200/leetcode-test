import { assert, assertEquals, assertFalse } from "../deps.ts";
import KthLargest from "./index.ts";
import { PriorityQueue } from "./PriorityQueue.ts";

Deno.test("kth-largest-element-in-a-stream", () => {
    const kthLargest = KthLargest(3, [4, 5, 8, 2]);
    assertEquals(4, kthLargest.add(3)); // return 4
    assertEquals(5, kthLargest.add(5)); // return 5
    assertEquals(5, kthLargest.add(10)); // return 5
    assertEquals(8, kthLargest.add(9)); // return 8
    assertEquals(8, kthLargest.add(4)); // return 8
});
Deno.test("PriorityQueue", () => {
    const data = [
        40,
        94,
        77,
        64,
        90,
        89,
        55,
        0,
        72,
        49,
        61,
        86,
        51,
        78,
        28,
        97,
        41,
        73,
        22,
        80,
        44,
        95,
        36,
        69,
        66,
        76,
        39,
        35,
        45,
        50,
        15,
        1,
        23,
        74,
        87,
        24,
        32,
        79,
        33,
        43,
        96,
        46,
        59,
        71,
        13,
        20,
        25,
        75,
        11,
        57,
        19,
        68,
        30,
        17,
        42,
        10,
        65,
        88,
        38,
        21,
        2,
        83,
        52,
        26,
        60,
        93,
        85,
        34,
        58,
        63,
        62,
        56,
        82,
        91,
        99,
        3,
        92,
        29,
        84,
        4,
        5,
        27,
        6,
        81,
        14,
        18,
        53,
        67,
        54,
        70,
        9,
        98,
        7,
        12,
        31,
        16,
        48,
        37,
        8,
        47,
    ];
    const maxPQ = PriorityQueue((a, b) => -a + b, data);
    assertEquals("function", typeof maxPQ.comparator);
    assertEquals(
        [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            96,
            97,
            98,
            99,
        ].sort((a, b) => -a + b),
        maxPQ.toArray(),
    );
    assertFalse(maxPQ.isEmpty());
    assertEquals(maxPQ.length(), 100);
    // assertEquals(maxPQ.tail(), 99);
    assertEquals(maxPQ.head(), 0);
    assertEquals(maxPQ.shift(), 0);
    assertEquals(maxPQ.length(), 99);
    assertEquals(maxPQ.shift(), 99);
    assertEquals(maxPQ.length(), 98);
    // assertEquals(maxPQ.tail(), 98);
    assertEquals(maxPQ.head(), 98);
    maxPQ.offer(1000);
    maxPQ.offer(-1000);
    assertEquals(
        [
            -1000,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            96,
            97,
            98,
            1000,
        ].sort((a, b) => -a + b),
        maxPQ.toArray(),
    );
    // assertEquals(maxPQ.tail(), 1000);
    assertEquals(maxPQ.head(), -1000);
    maxPQ.offer(50);
    assertEquals(
        [
            -1000,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            96,
            97,
            98,
            1000,
        ].sort((a, b) => -a + b),
        maxPQ.toArray(),
    );
    assertEquals(maxPQ.length(), 101);

    const length = maxPQ.length();
    for (let i = 0; i < length; i++) {
        assert(typeof maxPQ.shift() === "number");
    }
    assert(maxPQ.isEmpty());
    assertEquals(0, maxPQ.length());
    assertEquals(maxPQ.toArray(), []);
    maxPQ.offer(1000);
    maxPQ.offer(-1000);
    assertEquals(2, maxPQ.length());
    maxPQ.clear();
    assert(maxPQ.isEmpty());
});
