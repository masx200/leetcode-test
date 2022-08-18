import { group } from "../deps.ts";

export function split_by_count<T>(files: T[], limit: number) {
    return Object.values(
        group(
            files,
            (_s: any, i: number) => i % Math.floor(files.length / limit),
        ),
    ) as T[][];
}
