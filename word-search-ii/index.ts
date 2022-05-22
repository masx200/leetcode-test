import { PrefixTreeInsert } from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";
import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";

function findWords(board: string[][], words: string[]): string[] {
    const ans = new Set(words);

    if (board.length === 1 && board[0].length === 1) {
        return words.filter(
            (word) => word.length === 1 && word === board[0][0],
        );
    }
    if (words.length === 0) return [];
    words.forEach((w) => {
        if (w.length === 0) {
            ans.delete(w);
        }
    });
    const row = board.length;
    if (!row) {
        return [];
    }
    const col = board[0].length;
    if (!col) {
        return [];
    }

    const all_chars = new Set(board.flat());
    words.forEach((word) => {
        if (Array.prototype.some.call(word, (c) => !all_chars.has(c))) {
            ans.delete(word);
        }
    });

    // const mapper = new Map<string, Array<[number, number]>>();
    words = Array.from(ans);
    // for (let i = 0; i < row; i++) {
    //     for (let j = 0; j < col; j++) {
    //         const v = board[i][j];
    //         if (words.some((word) => v === word[0])) {
    //             let list = mapper.get(v);
    //             if (!list) {
    //                 list = [];
    //                 mapper.set(v, list);
    //             }
    //             list.push([i, j]);
    //         }
    //     }
    // }

    const result = new Set<string>();

    const root = PrefixTree();
    for (const word of ans) {
        PrefixTreeInsert(root, word);
    }
    const visited: boolean[][] = Array.from(board).map((a) =>
        Array.from(a).map(() => false)
    );
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (root.children.has(board[i][j])) {
                dfs(i, j, visited, board, row, col, "", root, result);
            }
        }
    }
    // for (const word of ans) {
    //     if (!result.has(word) && mapper.has(word[0])) {
    //         for (const [i, j] of mapper.get(word[0]) || []) {
    //             if (!result.has(word) && !visited[i][j])
    //                 dfs(i, j, visited, board, row, col, "", root, result);
    //         }
    //     }
    // }

    return Array.from(result);
}
const directions: Array<[number, number]> = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

function dfs(
    i: number,
    j: number,
    visited: boolean[][],
    board: string[][],
    row: number,
    col: number,
    prefix: string,
    now: PrefixTree,
    result: Set<string>,
) {
    const node = now.children.get(board[i][j]);
    if (!node) return;
    if (node?.isEnd) {
        result.add(prefix + board[i][j]);
        node.isEnd = false;
    }
    if (visited[i][j]) {
        return;
    }
    visited[i][j] = true;
    prefix += board[i][j];
    now = node;
    for (const [f, s] of directions) {
        const x = i + f;
        const y = j + s;
        if (x >= 0 && y >= 0 && x < row && y < col && !visited[x][y]) {
            dfs(x, y, visited, board, row, col, prefix, now, result);
        }
    }
    visited[i][j] = false;
    return false;
}

export default findWords;
