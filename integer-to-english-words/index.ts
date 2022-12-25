function numberToWords(num: number): string {
    const singles = [
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
    ];
    const teens = [
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
    ];
    const tens = [
        "",
        "Ten",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
    ];
    const thousands = ["", "Thousand", "Million", "Billion"];

    function toEnglish(num: number) {
        const curr = [];
        const hundred = Math.floor(num / 100);
        num %= 100;
        if (hundred !== 0) {
            curr.push(singles[hundred] + " Hundred ");
        }
        const ten = Math.floor(num / 10);
        if (ten >= 2) {
            curr.push(tens[ten] + " ");
            num %= 10;
        }
        if (num > 0 && num < 10) {
            curr.push(singles[num] + " ");
        } else if (num >= 10) {
            curr.push(teens[num - 10] + " ");
        }
        return curr.join("");
    }

    if (num === 0) {
        return "Zero";
    }
    const sb: string[] = [];
    for (
        let i = 3, unit = 1000000000;
        i >= 0;
        i--, unit = Math.floor(unit / 1000)
    ) {
        const curNum = Math.floor(num / unit);
        if (curNum !== 0) {
            num -= curNum * unit;
            sb.push(toEnglish(curNum) + thousands[i] + " ");
        }
    }
    return sb.join("").trim();
}
export default numberToWords;
