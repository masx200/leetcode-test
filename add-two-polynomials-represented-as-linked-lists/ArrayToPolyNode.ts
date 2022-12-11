import { PolyNode } from "./PolyNode.ts";

export function ArrayToPolyNode(
    array: Array<[number, number]>
): PolyNode | null {
    if (array.length === 0) {
        return null;
    }
    const [c, p] = array[0];
    const list = new PolyNode(c, p);
    let cur = list;
    for (let i = 1; i < array.length; i++) {
        const v = array[i];
        const [c, p] = v;
        const l = new PolyNode(c, p);
        cur.next = l;
        cur = cur.next;
    }

    return list;
}
