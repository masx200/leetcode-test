import { Node } from "./Node.ts";

const head_to_end = new WeakMap<Node, Node>();
function flatten(head: Node | null): Node | null {
    if (!head) {
        return null;
    }

    let p: Node | null | undefined = head;
    let last: Node | null | undefined = null;
    while (p) {
        last = p;
        if (p.child) {
            const next = p.next;
            const child = flatten(p.child);
            p.next = child;
            if (child) {
                child.prev = p;
            }
            p.child = null;

            // let end = child;
            // while (end && end.next) {
            //     end = end.next;
            // }
            const end = child && head_to_end.get(child);
            if (end && next) {
                end.next = next;
                next.prev = end;
            }
        }
        p = p.next;
    }
    last && head_to_end.set(head, last);
    //  console.log(head)
    return head;
}
export default flatten;
