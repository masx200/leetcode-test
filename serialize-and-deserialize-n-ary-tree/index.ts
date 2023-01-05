import { Node } from "../n-ary-tree-level-order-traversal/Node.ts";

export function serialize(root: Node | null): string {
    return JSON.stringify(NAryNodeToArray(root)).replaceAll("null", "");
}
export function deserialize(data: string): Node | null {
    return ArrayToNAryNode(
        JSON.parse(data.replaceAll(",,", ",null,").replaceAll("[,", "[null,"))
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
