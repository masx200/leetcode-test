export default (read4: (buf: string[]) => number) =>
    (buf: string[], n: number): number => {
        const tmp: string[] = Array<string>(4).fill("");

        let total = 0;

        let eof = false;

        while (!eof && total < n) {
            let count = read4(tmp);

            eof = count < 4;
            count = Math.min(count, n - total);

            for (let i = 0; i < count; i++) {
                buf[total++] = tmp[i];
            }
        }
        return total;
    };
