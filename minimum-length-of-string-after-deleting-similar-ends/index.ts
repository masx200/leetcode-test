function minimumLength(s: string): number {
    while (true) {
        if (s.length === 0) return 0;
        if (s.length === 1) return 1;
        if (s[0] !== s[s.length - 1]) return s.length;

        const c = s[0];

        while (s[0] === c) s = s.slice(1);

        while (s[s.length - 1] === c) s = s.slice(0, -1);
    }
}
export default minimumLength;
