export default function uncommonFromSentences(s1: string, s2: string): string[] {
   const a=s1.split(" ")


const b=(s2.split(" "))



const cnts = new Map<string, number>(); 

for (const word of [...a,...b]) { 

cnts.set(word, (cnts.get(word) ?? 0) + 1); 

}





return Array.from(cnts.keys()).filter(k=>1===cnts.get(k))

}
