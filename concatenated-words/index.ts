import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";
import { PrefixTreeInsert } from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";

export default function findAllConcatenatedWordsInADict(
    words: string[],
): string[] {
    const root = PrefixTree();
    const ans: string[] = new Array(0);
    words.sort((a, b) => (a.length - b.length));
    for (const word of words) {
        if (word.length == 0) {
            continue;
        }
        if (dfs(root, word, new Set())) {
            ans.push(word);
        } else {
            PrefixTreeInsert(root, word);
        }
    }
    return ans;
}

function dfs(root: PrefixTree, word: string, visited: Set<string>): boolean {
    if (word.length == 0) {
        return true;
    }
    if (visited.has(word)) {
        return false;
    }
    visited.add(word);

    let node: PrefixTree | undefined = root;
    for (let i = 0; i < word.length; i++) {
        const ch = word.charAt(i);

        node = node.children.get(ch);
        if (!node) {
            return false;
        }
        if (node.isEnd) {
            if (dfs(root, word.slice(i + 1), visited)) {
                return true;
            }
        }
    }
    return false;
}
