import { PrefixTree } from '../implement-trie-prefix-tree/PrefixTree.ts';
import { PrefixTreeInsert } from './PrefixTreeInsert.ts';

interface WordDictionary {
    addWord(word: string): void;
    search(word: string): boolean;
}
export default WordDictionary;
function WordDictionary(): WordDictionary {
    const root: PrefixTree = PrefixTree();
    function insert(word: string): void {
        PrefixTreeInsert(root, word);
    }
    function search(word: string): boolean {
        return match(word, 0, root);
    }

    return { addWord: insert, search };
}

function match(word: string, index: number, root: PrefixTree): boolean {
    if (index === word.length) return root.isEnd;

    if (word[index] !== ".") {
        const child = root.children.get(word[index]);
        if (!child) return false;
        return match(word, index + 1, child);
    } else {
        for (const child of root.children.values()) {
            if (match(word, index + 1, child)) return true;
        }
    }
    return false;
}
