export default function maxConsecutiveAnswers(
    answerKey: string,
    k: number
): number {
    let countF = 0; // 当前窗口内F的数量
    let countT = 0; // 当前窗口内T的数量
    let left = 0;
    let right = 0;
    let max = 0;
    while (right < answerKey.length) {
        answerKey[right] === "T" ? countT++ : countF++;
        right++;
        // 保证当前可以满足k次交互允许的最大窗口大小
        while (countF > k && countT > k) {
            answerKey[left] === "T" ? countT-- : countF--;
            left++;
        }
        max = Math.max(max, countF + countT);
    }
    return max;
}
