import { ListNode, TreeNode } from "../mod.ts";
import { buildBST } from "./buildBST.ts";
import { get_length_of_list } from "../reverse-linked-list-ii/get_length_of_list.ts";

export default function sortedListbuildBST(
    head: ListNode | null,
): TreeNode | null {
    if (!head) return null;
    let node: ListNode | null = head;
    const n = get_length_of_list(head);
    // let n = 0;

    // while (node) {
    //     node = node.next;
    //     n++;
    // }
    node = head;
    // console.log(JSON.stringify(head))
    return buildBST(
        0,
        n - 1,
        () => node?.val,
        () => {
            if (!node) return;

            node = node.next;
        },
    );
}
