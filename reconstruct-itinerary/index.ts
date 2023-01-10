function findItinerary(tickets: string[][]): string[] {
    const map: Map<string, string[]> = new Map();
    tickets.forEach(([from, to]) => {
        const array = map.get(from);

        if (map.has(from) && array) array.push(to);
        else map.set(from, [to]);
    });
    for (const val of map.values()) {
        val.sort((a, b) => (a < b ? 1 : -1));
    }

    const start: string = "JFK";
    const res: string[] = [];
    function dfs(node: string) {
        const array = map.get(node);
        while (array?.length) {
            dfs(array.pop() as string);
        }

        res.push(node);
    }
    dfs(start);
    return res.reverse();
}
export default findItinerary;
