export default function partitionString(s: string): number {
    let set = 0;
    let res = 0;
    for (const c of s) {
        if (set & (1 << (c.charCodeAt(0) - "a".charCodeAt(0)))) {
            res++;

            set = 0;
        }

        set |= 1 << (c.charCodeAt(0) - "a".charCodeAt(0));
    }
    return res + 1;
}
