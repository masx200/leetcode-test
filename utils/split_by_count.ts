import { chunk } from "https://deno.land/std@0.181.0/collections/chunk.ts";

export function split_by_count<T>(files: T[], limit: number): T[][] {
    return chunk(files, limit) as T[][];
}
