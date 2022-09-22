import { zip } from "../deps.ts";

export default function isIsomorphic(s: string, t: string): boolean {
    const ent = zip(Object(s), Object(t));
    const map = new Map(ent);
    const maa = new Map(ent.map(([k, v]) => [v, k]));
    return (Array.prototype.map.call(s, (v) => map.get(v)).join("") === t) &&
        (Array.prototype.map.call(t, (v) => maa.get(v)).join("") === s);
}
