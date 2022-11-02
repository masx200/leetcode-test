export default function maxRepeating(sequence: string, word: string): number {
    if (!sequence.includes(word)) return 0;
    let left = 0;
    let right = Math.floor(sequence.length / word.length);

    while (left < right) {
        const mid = Math.ceil((left + right) / 2);

        if (sequence.includes(word.repeat(mid))) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
}
