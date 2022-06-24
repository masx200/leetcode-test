export default function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) return true;

    let d1 = "";
    let d2 = "";

    for (let i = 0; i < s1.length; i++) {
        const ch1 = s1[i];
        const ch2 = s2[i];

        if (ch1 !== ch2) {
            d1 += ch1;
            d2 = ch2 + d2;
        }
        if (d1.length > 2) return false;
    }
    return d1.length === 2 && d1 === d2;
}
