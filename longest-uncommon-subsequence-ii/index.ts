export default function findLUSlength(strs: string[]): number {
    return Math.max(
        -1,
        ...strs.filter((str1, i) => {
            const check = strs.every((str, j) => {
                if (i !== j && isSubseq(str1, str)) {
                    return false;
                }

                return true;
            });

            return check;
        }).map((str) => str.length),
    );
}

const isSubseq = (s: string, t: string) => {
    if (s.length > t.length) return false;
    let ptS = 0, ptT = 0;
    while (ptS < s.length && ptT < t.length) {
        if (s[ptS] === t[ptT]) {
            ++ptS;
        }
        ++ptT;
    }
    return ptS === s.length;
};
