
export default numSpecial;
function numSpecial(mat: number[][]): number {
const rowsum=mat.map(a=>a.reduce((q,v)=>q+v,0))
const colsum=mat[0].map((_,i)=>mat.reduce((q,v)=>q+v[i],0))

let ans=0


mat.forEach((a,i)=>rowsum[i]===1&&a.forEach((v,j)=>

ans+=Number(v===1&&colsum[j]===1)

))


return ans
}
