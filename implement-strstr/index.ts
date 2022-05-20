export default function strStr(haystack: string, needle: string): number {
    if (needle.length == 0) return 0;
    // return haystack.search(needle)

    // const index=haystack.indexOf(needle[0])

    // if(index===-1){return -1}

    const spl = Array.from(haystack);
    const ind = [...spl.entries()]
        .filter(([_i, a]) => a === needle[0])
        .map(([i]) => i);

    if (ind.length === 0) return -1;
    for (const i of ind) {
        if (needle === haystack.slice(i, i + needle.length)) {
            return i;
        }
    }
    return -1;
}
