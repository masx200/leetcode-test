function dfs(
    current: string,
    res: string[][],
    edge: Map<string, Set<string>>,
    length: number,
    path: string[],
    visited: Set<string>,
    endWord: string,
    wordlevel: Map<string, number>
) {
    if (path.length > length) return;
    if (current === endWord && path.length === length) {
        res.push([...path].reverse());
        return;
    }

    for (const next of edge.get(current) ?? []) {
        if (visited.has(next)) {
            continue;
        }
        if ((wordlevel.get(next) ?? 0) + 1 === wordlevel.get(current)) {
            visited.add(next);
            path.push(next);
            dfs(next, res, edge, length, path, visited, endWord, wordlevel);
            path.pop();
            visited.delete(next);
        }
    }
}
function findLadders(
    beginWord: string,
    endWord: string,
    wordList: string[]
): string[][] {
    const res: string[][] = [];

    const dict = new Set(wordList);
    if (!dict.has(endWord)) {
        return res;
    }

    const edge = buildEdge([...wordList, beginWord]);

    const wordlevel = new Map<string, number>([]);

    const length = ladderLength(beginWord, endWord, wordList, edge, wordlevel);
    if (!length) return [];
    wordlevel.set(endWord, length - 1);
    wordlevel.set(beginWord, 0);

    const current = endWord;
    const path: string[] = [current];
    const visited = new Set<string>([current]);

    dfs(current, res, edge, length, path, visited, beginWord, wordlevel);
    return res;
}
function ladderLength(
    beginWord: string,
    endWord: string,
    wordList: string[],
    edge: Map<string, Set<string>>,
    wordlevel: Map<string, number>
): number {
    const words = new Set(wordList);
    if (!words.has(endWord)) return 0;

    if (beginWord.length === 1) return 2;

    let current = [beginWord];
    let step = 1;
    let level = 0;
    wordlevel.set(beginWord, 0);
    while (current.length) {
        level++;
        const temp: string[] = [];

        for (const word of current) {
            for (const other of words) {
                if (edge.get(other)?.has(word)) {
                    if (other === endWord) return step + 1;
                    temp.push(other);
                    wordlevel.set(other, level);
                    words.delete(other);
                }
            }
        }

        current = temp;
        step = step + 1;
    }

    return 0;
}
function diffOneChar(word1: string, word2: string): boolean {
    let changes = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] != word2[i]) changes += 1;
    }
    return changes === 1;
}
function buildEdge(wordList: string[]): Map<string, Set<string>> {
    const edge = new Map<string, Set<string>>();
    for (let i = 0; i < wordList.length; i++) {
        for (let j = i + 1; j < wordList.length; j++) {
            if (diffOneChar(wordList[i], wordList[j])) {
                addEdge(edge, wordList[i], wordList[j]);
                addEdge(edge, wordList[j], wordList[i]);
            }
        }
    }
    return edge;
}

function addEdge(edge: Map<string, Set<string>>, word1: string, word2: string) {
    const set = edge.get(word1) ?? new Set();
    set.add(word2);
    edge.set(word1, set);
}
export default findLadders;
