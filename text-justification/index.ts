export default function fullJustify(
    words: string[],
    maxWidth: number,
): string[] {
    const L = words.length;
    const queue: string[] = [];

    let i = 0;
    let count = 0;
    let tmp: string[] = [];

    while (i < L) {
        count = 0;
        tmp = [];

        while (i < L && count < maxWidth) {
            if (count + words[i].length > maxWidth) {
                break;
            }

            count += words[i].length + 1;
            tmp.push(words[i]);
            i++;
        }

        if (i === L) {
            let lastLine = tmp.join(" ");
            lastLine += " ".repeat(maxWidth - lastLine.length);
            queue.push(lastLine);
            break;
        }

        if (tmp.length === 1) {
            queue.push(tmp[0] + " ".repeat(maxWidth - count + 1));
        } else {
            const T = tmp.length - 1;
            const space = Math.floor((maxWidth - (count - T - 1)) / T);
            let extra = (maxWidth - (count - T - 1)) % T;
            queue.push(
                tmp.map((t, i) =>
                    i === T
                        ? t
                        : `${t}${" ".repeat(space + (extra-- <= 0 ? 0 : 1))}`
                ).join(""),
            );
        }
    }

    return queue;
}
