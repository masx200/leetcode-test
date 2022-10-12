import { default as groupBy } from "https://cdn.skypack.dev/lodash@4.17.21/groupBy?dts";
import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";
export default function equationsPossible(equations: string[]): boolean {
    const eqs = groupBy(equations, (a) => a[1]);
    const uf = new UnionFind<string>();
    for (const str of eqs["="]??[]) {
        uf.union(str[0], str[3]);
    }
    for (const str of eqs["!"]??[]) {
        if (uf.connected(str[0], str[3])) {
            return false;
        }
    }
    return true;
}
