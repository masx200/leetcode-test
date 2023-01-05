import { PolyNode } from "./PolyNode.ts";

export default function addPoly(
    poly1: PolyNode | null,
    poly2: PolyNode | null
): PolyNode | null {
    const dummy = new PolyNode();
    let node = dummy;
    while (poly1 != null && poly2 != null) {
        if (poly1.power === poly2.power) {
            const nextCoefficient = poly1.coefficient + poly2.coefficient;
            const nextPower = poly1.power;
            if (nextCoefficient != 0) {
                const nextNode = new PolyNode(nextCoefficient, nextPower);
                node.next = nextNode;
                node = node.next;
            }
            poly1 = poly1.next;
            poly2 = poly2.next;
        } else if (poly1.power > poly2.power) {
            node.next = new PolyNode(poly1.coefficient, poly1.power);

            node = node.next;
            poly1 = poly1.next;
        } else {
            node.next = new PolyNode(poly2.coefficient, poly2.power);

            node = node.next;
            poly2 = poly2.next;
        }
    }
    if (poly1 != null) node.next = poly1;
    else if (poly2 != null) node.next = poly2;
    return dummy.next;
}
