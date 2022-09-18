export default sumPrefixScores;
function sumPrefixScores(words: string[]): number[] {
    const root = new TrieNode();
    for (const word of words) {
        TrieNodeInsert(root, word);
    }
    const word2sum = new Map<string, number>();
    dfs(root, 0, word2sum);
    return words.map((word) => {
        const sum = word2sum.get(word) ?? 0;
        return sum;
    });
}
function dfs(node: TrieNode, sum: number, word2sum: Map<string, number>) {
    if (node.wordCount) {
        word2sum.set(node.prefix, sum);
    }
    for (const child of Object.values(node.children)) {
        dfs(child, sum + child.prefixCount, word2sum);
    }
}
export function TrieNodeInsert(root: TrieNode, word: string) {
    if (word.length === 0) return;
    let node = root;
    for (const ch of word) {
        const next = node.children[ch] ?? new TrieNode();
        node.children[ch] = next;
        node = next;
        node.prefixCount++;
    }
    node.wordCount++;
    node.prefix = word;
}
export class TrieNode {
    children: Record<string, TrieNode>;
    prefix: string;
    wordCount: number;
    prefixCount: number;
    constructor(wordCount = 0, prefixCount = 0, children = {}, prefix = "") {
        this.wordCount = wordCount;
        this.prefixCount = prefixCount;
        this.children = children;
        this.prefix = prefix;
    }
}
