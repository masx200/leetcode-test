export default function (t: string): number {
    const n = t.length;
    let e = 0;
    let l = 0;
    for (let o = 0; o < n; o++) {
        const n = t[o];
        let r = e;
        let a = Math.min(e, l);
        "1" === n ? r++ : a++;
        e = r;
        l = a;
    }
    return Math.min(e, l);
}
