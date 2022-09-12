export default function compareVersion(version1: string, version2: string): number {
const a=version1.split(".").map(Number)

const b=version2.split(".").map(Number)

for(let i =0 ;i<Math.max(a.length,b.length);i++){
    
    const q=a[i]??0
    
    const w=b[i]??0
    
    if(q>w)return 1
    if(q<w)return -1
    
}
return 0
}
