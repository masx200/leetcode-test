import merge from "../merge-intervals/index.ts";

function insert(intervals: number[][], newInterval: number[]): number[][] {
    return merge([...intervals, newInterval]);
}

export default insert;
