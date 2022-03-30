function entityParser(text: string): string {
return text.replace(entityRegExp,replacer);
};
const replacer=(a:string)=>{
    const value=translator.get(a);
    return value??a;
}
const translator=new Map<string,string>([
    ["&quot;","\""],
    ["&apos;","\'"],
    ["&amp;","\&"],
    ["&gt;","\>"],
    ["&lt;","\<"],
    ["&frasl;","\/"],
    
    ]);
const entityRegExp=/\&[a-z]+\;/g;