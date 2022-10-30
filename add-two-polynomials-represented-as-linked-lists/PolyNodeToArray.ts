import { PolyNode } from "./PolyNode.ts";

export function PolyNodeToArray(
    list: PolyNode | null,
): Array<[number, number]> {
    if (list === null) {
        return [];
    }
    const array: Array<[number, number]> = [];
    let temp: PolyNode | null = list;
    while (temp) {
        const { coefficient, power } = temp;
        array.push([coefficient, power]);
        temp = temp.next;
    }
    return array;
}
