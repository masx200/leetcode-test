function orderlyQueue(s: string, k: number): string {
    
    if(s.length==1)return s
if(k===1){
    
    
    
    return Array.from(s).map((v,i)=>s.slice(-i)+s.slice(0,s.length-i)).reduce((a,v)=>a.localeCompare(v)<0?a:v)
}


return Array.from(s).sort().join("")
}
export default orderlyQueue