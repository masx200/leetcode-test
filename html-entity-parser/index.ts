export default function html_Entity_Parser(text: string): string {
    return text.replace(entityRegExp, replacer);
}
function replacer(a: string) {
    const value = translator.get(a);
    return value ?? a;
}
const translator = new Map<string, string>([
    ["&quot;", '"'],
    ["&apos;", "'"],
    ["&amp;", "&"],
    ["&gt;", ">"],
    ["&lt;", "<"],
    ["&frasl;", "/"],
]);
const entityRegExp = /\&[a-z]+\;/g;
