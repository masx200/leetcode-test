export default function findDuplicate(paths: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const ps of paths) {
        const [directory, ...contents] = ps.split(" ");

        for (const con of contents) {
            const [name, content] = con.split(/\(|\)/g).filter(Boolean);

            const arr = map.get(content) ?? [];
            arr.push(directory + "/" + name);
            map.set(content, arr);
        }
    }

    return [...map.values()].filter((a) => a.length > 1);
}
