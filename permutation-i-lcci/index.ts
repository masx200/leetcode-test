function permutation(s: string): string[] {
    return [...permutations(s)].map((a) => a.join(""));
}
export default permutation;
import { permutations } from "https://deno.land/x/combinatorics@1.1.2/permutations.ts";
