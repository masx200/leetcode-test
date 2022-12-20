export default (read4: (buf: string[]) => number) => {
    const iBuf: string[] = [];
    return (buf: string[], n: number): number => {
        buf.length = 0;
        let count = 0;

        while (n > 0) {
            if (iBuf.length === 0 && read4(iBuf) === 0) return count;

            buf.push(iBuf.shift() as string);

            count++;
            n--;
        }
        return count;
    };
};
