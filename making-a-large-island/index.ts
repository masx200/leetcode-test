import { uniqBy } from "../deps.ts";

// const uniqBy=_.uniqBy
export default function largestIsland(grid: number[][]): number {
    const m = grid.length;
    if (m === 0) {
        return 0;
    }
    const n = grid[0].length;
    if (n === 0) {
        return 0;
    }
    const islands = getIslands(grid);
    if (islands.length === 0) {
        return 1;
    }
    const areas = islands.map((i) => i.length);

    let max_area = Math.max(...areas);

    function is_valid_position(r: number, c: number) {
        return 0 <= r && r <= m - 1 && 0 <= c && c <= n - 1;
    }
    const position_to_area = new Map<number, number>();
    const position_to_island_id = new Map<number, number>();
    function get_island_id_of_position(r: number, c: number): number {
        return position_to_island_id.get(unique_id(r, c, n)) ?? 0;
    }
    function get_area_of_position(r: number, c: number): number {
        return position_to_area.get(unique_id(r, c, n)) ?? 0;
    }
    for (const [id, island] of islands.entries()) {
        const area = island.length;
        for (const position of island) {
            const [r, c] = position;
            position_to_area.set(unique_id(r, c, n), area);
            position_to_island_id.set(unique_id(r, c, n), id);
        }
    }
    for (let r = 0; r < m; ++r) {
        for (let c = 0; c < n; ++c) {
            if (grid[r][c] === 0) {
                let area = 1;
                const neighbours: [number, number][] = [
                    [r - 1, c],
                    [r + 1, c],
                    [r, c + 1],
                    [r, c - 1],
                ];
                const uniqed = uniqBy(
                    neighbours.filter(
                        ([x, y]) => is_valid_position(x, y) && grid[x][y] === 1,
                    ),
                    ([x, y]) => get_island_id_of_position(x, y),
                );
                for (const [x, y] of uniqed) {
                    //还要判断是否是相连的岛屿
                    area += get_area_of_position(x, y);
                }

                max_area = Math.max(area, max_area);
            }
        }
    }

    return max_area;
}
function getIslands(grid: number[][]): Array<[number, number][]> {
    const m = grid.length;
    if (m === 0) {
        return [];
    }
    const n = grid[0].length;
    if (n === 0) {
        return [];
    }

    const cache = new Set<number>();

    const islands: Array<[number, number][]> = [];

    for (let r = 0; r < m; ++r) {
        for (let c = 0; c < n; ++c) {
            if (cache.has(unique_id(r, c, n))) {
                continue;
            }
            if (grid[r][c] == 1) {
                // ++num_islands;
                const island: [number, number][] = [];
                dfs(grid, r, c, cache, (p: [number, number]) => island.push(p));
                islands.push(island);
            }
        }
    }

    return islands;
}

function dfs(
    grid: number[][],
    r: number,
    c: number,
    cache: Set<number>,
    output: (p: [number, number]) => void,
): void {
    const m = grid.length;
    if (m === 0) {
        return;
    }
    const n = grid[0].length;
    if (n === 0) {
        return;
    }

    if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] == 0) {
        return;
    }
    const id = unique_id(r, c, n);
    if (cache.has(id)) {
        return;
    }
    cache.add(id);
    output([r, c]);
    dfs(grid, r - 1, c, cache, output);
    dfs(grid, r + 1, c, cache, output);
    dfs(grid, r, c - 1, cache, output);
    dfs(grid, r, c + 1, cache, output);
}
function unique_id(r: number, c: number, n: number): number {
    const a = c + r * n;

    return a;
}
