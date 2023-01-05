import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";
import { PrefixTreeInsert, PrefixTreeSearchPrefix } from "../mod.ts";

export default function replaceWords(
    dictionary: string[],
    sentence: string
): string {
    const root = PrefixTree();
    dictionary.forEach((word) =>
        PrefixTreeInsert(root, word, {
            stop: (node) => node.isEnd,
        })
    );

    const words = sentence.split(" ");
    return words
        .map((word) => {
            let index = -1;
            const node = PrefixTreeSearchPrefix(root, word, {
                stop: (node) => node.isEnd,
                each() {
                    index++;
                },
            });
            if (!node) {
                return word;
            }
            return word.slice(0, index);
        })
        .join(" ");
}
