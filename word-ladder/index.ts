export default function ladderLength(
    beginWord: string,
    endWord: string,
    wordList: string[],
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
                if (diffonechar(word, right)) {
                    return step + 1;
                }
            }
            for (const other of words) {
                if (diffonechar(other, word)) {
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

function diffonechar(word1: string, word2: string): boolean {
    let changes = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] != word2[i]) changes += 1;
    }
    return changes === 1;
}
