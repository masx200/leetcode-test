export default function intToRoman(num: number): string {
    return [
        M[Math.floor((num / 1000) % 10)],
        C[Math.floor((num / 100) % 10)],
        X[Math.floor((num / 10) % 10)],
        I[Math.floor(num % 10)],
    ].join("");
}
const M = ["", "M", "MM", "MMM"]; //# 1000，2000，3000
const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]; //# 100~900
const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]; //# 10~90
const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]; //# 1~9
