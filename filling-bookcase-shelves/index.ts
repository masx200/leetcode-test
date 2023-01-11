export default function minHeightShelves(
    books: number[][],
    shelfWidth: number
): number {
    const dp = Array(books.length + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= books.length; i++) {
        let curHeight = 0,
            curWidth = 0;
        for (let j = i - 1; j >= 0; j--) {
            const [thickness, height] = books[j];
            curHeight = Math.max(curHeight, height);
            curWidth += thickness;
            if (curWidth > shelfWidth) break;

            dp[i] = Math.min(dp[i], dp[j] + curHeight);
        }
    }
    return dp.at(-1);
}
