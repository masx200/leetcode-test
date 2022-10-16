export default function numberOfWays(s: string): number {
    const goalOne = ["1", "0", "1"];
    const goalTwo = ["0", "1", "0"];

    function help(goal: string[], s: string) {
        let a = 0,
            b = 0,
            c = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === goal[0]) a++;
            if (s[i] === goal[1]) b += a;
            if (s[i] === goal[2]) c += b;
        }
        return c;
    }
    return help(goalOne, s) + help(goalTwo, s);
}
