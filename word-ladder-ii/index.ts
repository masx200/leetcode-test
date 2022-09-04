export default function findLadders(
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
    const length = ladderLength(beginWord, endWord, wordList, edge);
    if (!length) return [];
    const current = beginWord;
    const path: string[] = [current];
    const visited = new Set<string>([current]);
    dfs(current, res, edge, length, path, visited, endWord);
    return res;
}
function ladderLength(
    beginWord: string,
    endWord: string,
    wordList: string[],
    edge: Map<string, Set<string>>
): number {
    const words = new Set(wordList);
    if (!words.has(endWord)) return 0;

    if (beginWord.length === 1) return 2;

    let current = new Set([beginWord]);

    let rightcurrent = new Set([endWord]);
    words.delete(endWord);
    let step = 1;
    while (current.size) {
        if (current.size > rightcurrent.size) {
            [current, rightcurrent] = [rightcurrent, current];
        }

        const temp: Set<string> = new Set();

        for (const word of current) {
            for (const right of rightcurrent) {
                if (edge.get(word)?.has(right)) {
                    return step + 1;
                }
            }
            for (const other of edge.get(word) ?? []) {
                if (words.has(other)) {
                    temp.add(other);

                    words.delete(other);
                }
            }
        }

        if (temp.size === 0) return 0;
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

function dfs(
    current: string,
    res: string[][],
    edge: Map<string, Set<string>>,
    length: number,
    path: string[],
    visited: Set<string>,
    endWord: string
) {
    if (path.length > length) return;
    if (current === endWord && path.length === length) {
        res.push([...path]);
    }

    for (const next of edge.get(current) ?? []) {
        if (visited.has(next)) {
            continue;
        }
        visited.add(next);
        path.push(next);
        dfs(next, res, edge, length, path, visited, endWord);
        path.pop();
        visited.delete(next);
    }
}
