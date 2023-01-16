function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
const words1=sentence1.split(" ")
const words2=sentence2.split(" ")


if(words1.length===words2.length)return sentence1===sentence2


while(words1.length&&words2.length&&words1[words1.length-1]===words2[words2.length-1]){
    words1.pop()
    words2.pop()
}

while(words1.length&&words2.length&&words1[0]===words2[0]){
    words1.shift()
    words2.shift()
}


if(words1.length===0||words2.length==0)return true





return false
}
export default areSentencesSimilar
