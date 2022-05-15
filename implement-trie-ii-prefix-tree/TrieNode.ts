export class TrieNode {
    constructor(
        public wordCount: number = 0,
        public prefixCount: number = 0,
        public readonly children = new Map<string, TrieNode>(),
    ) {}
}
