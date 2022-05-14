export default function romanToInt(s: string): number {
    let result = 0;
    let index = 0;
    while (index < s.length) {
        if (![...one_char_to_num.keys()].includes(s[0])) {
            throw Error("unexpeted");
        }
        loop: {
            // console.log(loop)
            for (const map of [two_char_to_num, one_char_to_num]) {
                for (const [char, num] of map) {
                    if (s.length === 0) break;

                    // console.log(s, char, num)
                    if (char === s.slice(index, char.length + index)) {
                        // console.log(s, char, num)
                        result += num;
                        // s = s.slice(char.length)
                        index += char.length;
                        break loop;
                    }
                }
            }
        }
    }

    return result;
}
const one_char_to_num = new Map<string, number>([
    ["M", 1000],
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
]);
const two_char_to_num = new Map<string, number>([
    ["CM", 900],
    ["IV", 4],
    ["IX", 9],
    ["XL", 40],
    ["XC", 90],
    ["CD", 400],
]);

// console.log(romanToInt("MCMXCIV"))
