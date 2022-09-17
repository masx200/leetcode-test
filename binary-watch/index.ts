import hammingWeight from "../number-of-1-bits/index.ts";

export default function readBinaryWatch(num: number): string[] {
    const res: string[] = [];

    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            const cnt = hammingWeight(i) + hammingWeight(j);
            if (cnt == num) {
                res.push(i + ":" + j.toString().padStart(2, "0"));
            }
        }
    }

    return res;
}
