import { TrieNode } from "../implement-trie-ii-prefix-tree/TrieNode.ts";
import { TrieNodeInsert } from "../implement-trie-ii-prefix-tree/TrieNodeInsert.ts";
import { PrefixTreeSearchPrefix } from "../implement-trie-prefix-tree/PrefixTreeSearchPrefix.ts";

function sumPrefixScores(words: string[]): number[] {
    const root = new TrieNode();
    for (const word of words) {
        TrieNodeInsert(root, word);
    }
    const word2sum = new Map<string, number>();
    return words.map((word) => {
        const sum = word2sum.get(word) ?? TrieNodeSum(root, word, word2sum);
        word2sum.set(word, sum);
        return sum;
    });
}
export default sumPrefixScores;

function TrieNodeSum(
    root: TrieNode,
    word: string,
    word2sum: Map<string, number>
): number {
    let sum = 0;
    let index = 0;
    PrefixTreeSearchPrefix(root, word, {
        each(node) {
            if (index) {
                sum += node.prefixCount;
                if (node.wordCount) {
                    word2sum.set(word.slice(0, index), sum);
                }
            }
            index++;
        },
    });
    return sum;
}
