import { Node } from "../n-ary-tree-level-order-traversal/Node.ts";

export function serialize(root: Node | null): string {
    return JSON.stringify(NAryNodeToArray(root)).replaceAll("null", "");
}
export function deserialize(data: string): Node | null {
    return ArrayToNAryNode(
        JSON.parse(data.replaceAll(",,", ",null,").replaceAll("[,", "[null,")),
    );
}
function NAryNodeToArray(root: Node | null): (number[] | null)[][] {
    if (!root) return [];
    let current: Node[] = [root];
    const result: (number[] | null)[][] = [[[root.val]]];
    while (current.length > 0) {
        const next: Node[] = [];
        const temp: (number[] | null)[] = [];
        for (const node of current) {
            const values: number[] = [];
            for (const child of node.children) {
                next.push(child);
                values.push(child.val);
            }
            if (values.length) {
                temp.push(values);
            } else {
                temp.push(null);
            }
        }
        while (temp.length > 1) {
            if (!temp[temp.length - 1]) {
                //删除末尾的null
                temp.length--;
            } else {
                break;
            }
        }
        result.push(temp);
        current = next;
    }
    if (result.length > 1) {
        // console.log(result.at(-1));
        //最后一个全为空删掉
        result.length--;
    }
    return result;
}
function ArrayToNAryNode(array: (number[] | null)[][]): Node | null {
    if (array.length === 0) {
        return null;
    }
    const first = array[0]?.[0]?.[0];
    if (typeof first === "undefined") {
        return null;
    }
    const root = new Node(first);
    let current = [root];
    for (let i = 1; i < array.length; i++) {
        const next: Node[] = [];
        const temp = array[i];
        for (const [j, values] of temp.entries()) {
            if (values) {
                // console.log(values);
                values
                    .map((v) => new Node(v))
                    .forEach(function (n) {
                        current[j].children.push(n);
                        next.push(n);
                    });
            }
        }
        current = next;
    }
    return root;
}
// Deno.test("NAryNodeToArray", () => {
//     const root = new Node(1, [
//         new Node(3, [new Node(5), new Node(6)]),
//         new Node(2),
//         new Node(4, [
//             new Node(13, [
//                 new Node(15),
//                 new Node(16, [
//                     new Node(43, [
//                         new Node(25),
//                         new Node(26, [
//                             new Node(14, [
//                                 new Node(23, [
//                                     new Node(45),
//                                     new Node(46, [
//                                         new Node(33, [
//                                             new Node(35),
//                                             new Node(36),
//                                         ]),
//                                     ]),
//                                 ]),
//                             ]),
//                         ]),
//                     ]),
//                 ]),
//             ]),
//         ]),
//     ]);
//     console.log(JSON.stringify(root, null, 4), NAryNodeToArray(root));
//     console.log(null, NAryNodeToArray(null));
//     const root2 = new Node(10);
//     console.log(root2, NAryNodeToArray(root2));
//     const root3 = new Node(10, [new Node(20, [new Node(200)]), new Node(21)]);
//     console.log(JSON.stringify(root3, null, 4), NAryNodeToArray(root3));
// });
// Deno.test("ArrayToNAryNode", () => {
//     const array = [[[10]], [[20, 21, 19]], [null, [200]]];
//     console.log(array, JSON.stringify(ArrayToNAryNode(array), null, 4));
// });
