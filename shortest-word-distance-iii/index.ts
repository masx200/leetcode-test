export default function shortestDistance(
    words: string[],
    word1: string,
    word2: string,
): number {
    let posA = -1;
    let posB = -1;
    let minDistance = Infinity;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word === (word1)) {
            posA = i;
        } else if (word === (word2)) {
            posB = i; // this is covering normal cases, word1 not same as word2
        }

        if (posA != -1 && posB != -1 && posA != posB) { // @note: update before reset posB
            minDistance = Math.min(minDistance, Math.abs(posA - posB));
        }

        if (word1 === (word2)) {
            // always updating posA in above line, so after checking update posB
            // so that, posB is always the most recent word's index
            posB = posA;
        }
    }

    return minDistance;
}
