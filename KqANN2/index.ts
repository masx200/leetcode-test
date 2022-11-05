function breakfastPeak(num: number): number {
    if (num === 1) return 3;
    const time = Math.floor(num / 9) * 12;
    num %= 9;
    let additional = 12;
    for (let i = 0; i <= 12; i++) {
        if (Math.floor(i / 3) + Math.floor(i / 4) + Math.floor(i / 6) >= num) {
            additional = i;
            break;
        }
    }
    return Math.floor(time + additional);
}
export default breakfastPeak;
