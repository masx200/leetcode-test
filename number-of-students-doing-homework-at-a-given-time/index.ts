export default function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {



return startTime.map((s,i)=>Number(queryTime<=endTime[i]&&queryTime>=s)).reduce((a,v)=>a+v,0)




}
