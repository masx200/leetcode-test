import { ListNode } from "../reverse-linked-list/ListNode.ts";
import { ListNodeIterator } from "../merge-nodes-in-between-zeros/ListNodeIterator.ts";
export default function spiralMatrix(
    m: number,
    n: number,
    head: ListNode | null,
): number[][] {
    const si = spiralMatrixIterator(m, n);

    const li = ListNodeIterator(head);
    const ans = Array(m)
        .fill(0)
        .map(() => Array<number>(n).fill(-1));
    while (true) {
        const rs = si.next();
        const ri = li.next();

        if (rs.done || ri.done) break;
        const [i, j] = rs.value;
        const num = ri.value ?? -1;
        ans[i][j] = num;
    }
    return ans;
}
export function* spiralMatrixIterator(
    m: number,
    n: number,
): Generator<[number, number], void, unknown> {
    let left = 0,
        right = n,
        up = m,
        down = 0;

    let i = 0,
        j = 0;
    for (
        let direction = 0;
        left < right && down < up;
        direction = (direction + 1) % 4
    ) {
        if (direction === 0) {
            for (i = left; i < right; i++) {
                yield [j, i];
            }
            i--;

            down++;
        } else if (direction === 1) {
            for (j = down; j < up; j++) {
                yield [j, i];
            }
            j--;

            right--;
        } else if (direction === 2) {
            for (i = right - 1; i >= left; i--) {
                yield [j, i];
            }
            i++;

            up--;
        } else if (direction === 3) {
            for (j = up - 1; j >= down; j--) {
                yield [j, i];
            }
            j++;

            left++;
        }
    }
}
