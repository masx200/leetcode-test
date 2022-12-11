export default function lengthLongestPath(input: string): number {
    const folder_current: string[] = [];
    const files_path: Set<string> = new Set();
    for (const line of input.split("\n")) {
        // console.log(line)
        if (!line.includes("\t")) {
            if (line.includes(".")) {
                files_path.add(line);
            } else {
                folder_current.length = 0;
                folder_current.push(line);
            }
        } else {
            // folder_current.length = 1 + count_char(line, '\t')
            if (line.includes(".")) {
                folder_current.length = count_char(line, "\t");
                files_path.add(
                    [...folder_current, line.replaceAll("\t", "")].join("/"),
                );
            } else {
                folder_current.length = 1 + count_char(line, "\t");
                folder_current[folder_current.length - 1] = line.replaceAll(
                    "\t",
                    "",
                );
            }
        }
    }
    // console.log(files_path)
    // console.log(folder_current)
    return Math.max(0, ...Array.from(files_path.keys()).map((a) => a.length));
}

function count_char(s: string, c: string): number {
    let count = 0;
    s.replaceAll(c, (a) => (count++, a));
    return count;
}
