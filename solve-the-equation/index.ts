export default function solveEquation(equation: string): string {
    //console.log(fa.toString(),fb.toString(),)
    //console.log(a,b)
    const [a, b] = parse_equation(equation);
    if (a !== 0) return "x=" + b / a;

    if (a === 0 && b === 0) return "Infinite solutions";

    return "No solution";
}

function fmt_num_x(s: string) {
    if (/\d+/g.test(s)) return s.replace("x", "");
    return s.replace("x", "1");
}
function parse_equation(equation: string) {
    const [left, right] = equation.split("=");
    const reg = /((?<a>[-+]?(\d+)?x)|(?<b>[-+]?(\d+)))/g;
    const el = Array.from(left.matchAll(reg)).map((r) => r.groups);
    const er = Array.from(right.matchAll(reg)).map((r) => r.groups);

    const cl = el.filter((g) => g?.a).map((g) => fmt_num_x(g?.a ?? ""));
    const cr = er.filter((g) => g?.a).map((g) => fmt_num_x(g?.a ?? ""));
    const nl = el.filter((g) => g?.b).map((g) => g?.b);
    const nr = er.filter((g) => g?.b).map((g) => g?.b);
    //console.log(cl,cr,nl,nr)
    const bodya =
        "return " +
        (cl.length ? cl.join(" ") : "0 ") +
        `-(${cr.length ? cr.join(" ") : "0"})`;
    const bodyb =
        "return " +
        (nr.length ? nr.join(" ") : " 0 ") +
        `-(${nl.length ? nl.join(" ") : " 0 "})`;

    //console.log(bodya,bodyb)
    //return ""
    const fa = new Function(bodya);

    const a = fa();
    const fb = new Function(bodyb);

    const b = fb() ?? 0;
    return [a, b];
}
