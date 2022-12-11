import { zip } from "../deps.ts";

export default function wordPattern(s: string, str: string): boolean {
    const t = str.split(/\s+/g);
    if (t.length !== s.length) return false;
    const ent = zip(Object(s), Object(t));
    const map = new Map(ent);
    const maa = new Map(ent.map(([k, v]) => [v, k]));

    return (
        Array.prototype.map.call(s, (v) => map.get(v)).join("") ===
            t.join("") &&
        Array.prototype.map.call(t, (v) => maa.get(v)).join("") === s
    );
}
