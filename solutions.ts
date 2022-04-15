export const solutions = new Map<string, () => Promise<{ default: unknown }>>([
    ["1410 HTML 实体解析器", () => import("./html-entity-parser/index.ts")],
    ["1 两数之和", () => import("./two-sum/index.ts")],
]);
