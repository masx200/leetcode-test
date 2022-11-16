function isSubsequence(w: string, s: string) {
    let index = -1;

    for (const c of w) {
        index = s.indexOf(c, index + 1);
        if (index < 0) return false;
    }

    return true;
}
export default isSubsequence;
