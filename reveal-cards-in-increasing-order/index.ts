export default function deckRevealedIncreasing(deck: number[]): number[] {
    if (deck.length === 0) return deck;
    deck.sort((a, b) => b - a);
    const queue: number[] = [];
    for (const [i, d] of deck.entries()) {
        queue.unshift(d);
        if (i !== deck.length - 1) {
            queue.unshift(queue[queue.length - 1]);
            queue.pop();
        }
    }
    return queue;
}
