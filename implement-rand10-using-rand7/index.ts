import { rand7 } from "./rand7.ts";

export default function rand10(): number {
    const a =
        rand7() -
        1 +
        7 * (rand7() - 1) +
        (rand7() - 1) * 7 * 7 +
        7 * 7 * 7 * (rand7() - 1);
    return a < 2401 ? 1 + (a % 10) : rand10();
}
