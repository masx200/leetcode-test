export default function maximumRows(mat: number[][], numSelect: number): number {
const n = mat[0].length
const m = mat.length
const rows=mat.map((v,i)=>([...v.keys()].filter(j=>v[j])))
let ans=0

for(const selected  of combinations(Array(n).keys(),numSelect)){
const set=new Set(selected)
const count=mat.filter((v,i)=>rows[i].every(j=>set.has(j))).length

ans=Math.max(ans,count)
}
return ans
}
import{combinations}from "https://deno.land/x/combinatorics@1.1.2/combinations.ts"
