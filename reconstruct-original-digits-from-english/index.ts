import { counter } from "../substring-with-concatenation-of-all-words/counter.ts";

export default function originalDigits(str: string): string {
    const cnt = counter(str);
    const [z, o, w, u, r, x, s, v, t, n] = Array.prototype.map.call(
        "zowurxsvtn",
        (v) => cnt.get(v) ?? 0
    ) as number[];
    return [
        z,
        o - z - w - u,
        w,
        r - z - u,
        u,
        v - s + x,
        x,
        s - x,
        t - w - r + z + u,
        (n - s + x - o + z + w + u) / 2,
    ]
        .map((v, i) => String(i).repeat(v))
        .join("");
}
