import { groupBy } from "../deps.ts";

function groupAnagrams(strs: string[]) {
    return Object.values(
        groupBy(strs, (str) => Array.from(str).sort().join(""))
    );
}
export default groupAnagrams;
