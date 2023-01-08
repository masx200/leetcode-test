import { groupBy } from "../deps.ts";

export default function garbageCollection(
    garbage: string[],
    travel: number[]
): number {
    const pre: number[] = Array(travel.length + 1).fill(0);
    let mc = 0;
    let pc = 0;
    let gc = 0;
    let me = 0;
    let pe = 0;
    let ge = 0;
    for (const [i, s] of garbage.entries()) {
        if (i !== 0) {
            pre[i] = pre[i - 1] + travel[i - 1];
        }

        const counts = groupBy(s);
        const nm = counts["M"]?.length ?? 0;
        mc += nm;
        const np = counts["P"]?.length ?? 0;
        pc += np;
        const ng = counts["G"]?.length ?? 0;
        gc += ng;

        if (nm) {
            me = i;
        }
        if (np) {
            pe = i;
        }
        if (ng) {
            ge = i;
        }
    }
    return mc + pc + gc + pre[me] + pre[pe] + pre[ge];
}
