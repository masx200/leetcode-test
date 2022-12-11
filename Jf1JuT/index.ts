export default function alienOrder(words: string[]): string {
    const { edges, indegrees, valid, chars } = createEdgesAndIndegrees(words);

    if (!valid) return "";

    const order = topologicalsort(edges, indegrees, chars);

    return order.length === chars.size ? order.join("") : "";
}

function createEdgesAndIndegrees(words: string[]): {
    edges: Map<string, Set<string>>;
    indegrees: Map<string, number>;
    valid: boolean;
    chars: Set<string>;
} {
    const chars: Set<string> = new Set();
    let valid = true;

    const edges = new Map<string, Set<string>>();

    const indegrees = new Map<string, number>();
    for (const word of words) {
        Array.prototype.forEach.call(word, (c: string) => {
            chars.add(c);
        });
    }
    for (let i = 0, j = 1; i < words.length && j < words.length; i++, j++) {
        const word1 = words[i];

        const word2 = words[j];

        if (word1.startsWith(word2) && word2.length < word1.length) {
            valid = false;
            return { valid, edges, indegrees, chars };
        }

        for (let k = 0; k < word1.length && k < word2.length; k++) {
            const char1 = word1[k];
            const char2 = word2[k];

            if (char1 !== char2) {
                edges.set(char1, (edges.get(char1) || new Set()).add(char2));

                break;
            }
        }
    }
    const parents = new Map<string, Set<string>>();
    for (const [parent, children] of edges) {
        for (const child of children) {
            parents.set(child, (parents.get(child) || new Set()).add(parent));
        }
    }
    parents.forEach((p, child) => {
        indegrees.set(child, p.size);
    });
    return { valid, edges, indegrees, chars };
}

function topologicalsort(
    edges: Map<string, Set<string>>,
    indegrees: Map<string, number>,
    chars: Set<string>
): string[] {
    const order: string[] = [];

    let queue = [...chars.keys()].filter((key) => !indegrees.has(key));

    while (queue.length) {
        const temp: string[] = [];
        for (const char of queue) {
            order.push(char);
            const children = edges.get(char);
            if (children) {
                for (const child of children) {
                    const indegree = -1 + (indegrees.get(child) ?? 0);

                    indegrees.set(child, indegree);
                    if (indegree === 0) {
                        temp.push(child);
                    }
                }
            }
        }
        queue = temp;
    }

    return order;
}
