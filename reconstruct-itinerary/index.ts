function findItinerary(tickets: string[][]): string[] {
    const map: Map<string, string[]> = new Map(); // 图
    tickets.forEach(([from, to]) => {
        const array = map.get(from);
        // 设置from和to的映射关系
        if (map.has(from) && array) array.push(to);
        else map.set(from, [to]);
    });
    for (const val of map.values()) {
        // 按照字典序降序，tos中的最后一个字典序最小
        val.sort((a, b) => (a < b ? 1 : -1));
    }
    // console.log(map)
    const start: string = "JFK";
    const res: string[] = [];
    function dfs(node: string) {
        while (true) {
            const array = map.get(node);

            if (array?.length) dfs(array.pop() as string);
            else break;
        }

        res.push(node);
    }
    dfs(start);
    return res.reverse();
}
export default findItinerary;
