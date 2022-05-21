export default function fizzBuzz(n: number): string[] {
    const res = Array(n)
        .fill("0")
        .map((_v, i) => String(i + 1));
    for (let i = 2; i < n; i += 3) {
        res[i] = "Fizz";
    }
    for (let i = 4; i < n; i += 5) {
        res[i] = "Buzz";
    }
    for (let i = 14; i < n; i += 15) {
        res[i] = "FizzBuzz";
    }
    return res;
}
