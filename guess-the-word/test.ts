import { assert } from "asserts";

import findSecretWord from "./index.ts";
import { Master } from "./Master.ts";

Deno.test("guess-the-word", () => {
    const inputs: [secret: string, wordlist: string[], numguesses: number][] = [
        ["zzzzzz", [
            "aaaaaa",
            "bbbbbb",
            "cccccc",
            "dddddd",
            "eeeeee",
            "ffffff",
            "gggggg",
            "hhhhhh",
            "iiiiii",
            "jjjjjj",
            "kkkkkk",
            "llllll",
            "mmmmmm",
            "nnnnnn",
            "oooooo",
            "pppppp",
            "qqqqqq",
            "rrrrrr",
            "ssssss",
            "tttttt",
            "uuuuuu",
            "vvvvvv",
            "wwwwww",
            "xxxxxx",
            "yyyyyy",
            "zzzzzz",
        ], 26],
        ["hbaczn", [
            "gaxckt",
            "trlccr",
            "jxwhkz",
            "ycbfps",
            "peayuf",
            "yiejjw",
            "ldzccp",
            "nqsjoa",
            "qrjasy",
            "pcldos",
            "acrtag",
            "buyeia",
            "ubmtpj",
            "drtclz",
            "zqderp",
            "snywek",
            "caoztp",
            "ibpghw",
            "evtkhl",
            "bhpfla",
            "ymqhxk",
            "qkvipb",
            "tvmued",
            "rvbass",
            "axeasm",
            "qolsjg",
            "roswcb",
            "vdjgxx",
            "bugbyv",
            "zipjpc",
            "tamszl",
            "osdifo",
            "dvxlxm",
            "iwmyfb",
            "wmnwhe",
            "hslnop",
            "nkrfwn",
            "puvgve",
            "rqsqpq",
            "jwoswl",
            "tittgf",
            "evqsqe",
            "aishiv",
            "pmwovj",
            "sorbte",
            "hbaczn",
            "coifed",
            "hrctvp",
            "vkytbw",
            "dizcxz",
            "arabol",
            "uywurk",
            "ppywdo",
            "resfls",
            "tmoliy",
            "etriev",
            "oanvlx",
            "wcsnzy",
            "loufkw",
            "onnwcy",
            "novblw",
            "mtxgwe",
            "rgrdbt",
            "ckolob",
            "kxnflb",
            "phonmg",
            "egcdab",
            "cykndr",
            "lkzobv",
            "ifwmwp",
            "jqmbib",
            "mypnvf",
            "lnrgnj",
            "clijwa",
            "kiioqr",
            "syzebr",
            "rqsmhg",
            "sczjmz",
            "hsdjfp",
            "mjcgvm",
            "ajotcx",
            "olgnfv",
            "mjyjxj",
            "wzgbmg",
            "lpcnbj",
            "yjjlwn",
            "blrogv",
            "bdplzs",
            "oxblph",
            "twejel",
            "rupapy",
            "euwrrz",
            "apiqzu",
            "ydcroj",
            "ldvzgq",
            "zailgu",
            "xgqpsr",
            "wxdyho",
            "alrplq",
            "brklfk",
        ], 10],
        ["ccoyyo", [
            "ccoyyo",
            "wichbx",
            "oahwep",
            "tpulot",
            "eqznzs",
            "vvmplb",
            "eywinm",
            "dqefpt",
            "kmjmxr",
            "ihkovg",
            "trbzyb",
            "xqulhc",
            "bcsbfw",
            "rwzslk",
            "abpjhw",
            "mpubps",
            "viyzbc",
            "kodlta",
            "ckfzjh",
            "phuepp",
            "rokoro",
            "nxcwmo",
            "awvqlr",
            "uooeon",
            "hhfuzz",
            "sajxgr",
            "oxgaix",
            "fnugyu",
            "lkxwru",
            "mhtrvb",
            "xxonmg",
            "tqxlbr",
            "euxtzg",
            "tjwvad",
            "uslult",
            "rtjosi",
            "hsygda",
            "vyuica",
            "mbnagm",
            "uinqur",
            "pikenp",
            "szgupv",
            "qpxmsw",
            "vunxdn",
            "jahhfn",
            "kmbeok",
            "biywow",
            "yvgwho",
            "hwzodo",
            "loffxk",
            "xavzqd",
            "vwzpfe",
            "uairjw",
            "itufkt",
            "kaklud",
            "jjinfa",
            "kqbttl",
            "zocgux",
            "ucwjig",
            "meesxb",
            "uysfyc",
            "kdfvtw",
            "vizxrv",
            "rpbdjh",
            "wynohw",
            "lhqxvx",
            "kaadty",
            "dxxwut",
            "vjtskm",
            "yrdswc",
            "byzjxm",
            "jeomdc",
            "saevda",
            "himevi",
            "ydltnu",
            "wrrpoc",
            "khuopg",
            "ooxarg",
            "vcvfry",
            "thaawc",
            "bssybb",
            "ajcwbj",
            "arwfnl",
            "nafmtm",
            "xoaumd",
            "vbejda",
            "kaefne",
            "swcrkh",
            "reeyhj",
            "vmcwaf",
            "chxitv",
            "qkwjna",
            "vklpkp",
            "xfnayl",
            "ktgmfn",
            "xrmzzm",
            "fgtuki",
            "zcffuv",
            "srxuus",
            "pydgmq",
        ], 10],
        ["azzzzz", [
            "abcdef",
            "acdefg",
            "adefgh",
            "aefghi",
            "afghij",
            "aghijk",
            "ahijkl",
            "aijklm",
            "ajklmn",
            "aklmno",
            "almnoz",
            "anopqr",
            "azzzzz",
        ], 10],
        ["acckzz", ["acckzz", "ccbazz", "eiowzz", "abcczz"], 10],
        ["hamada", ["hamada", "khaled"], 10],
    ];
    inputs.forEach((currentItem) => {
        const master = new Master(...currentItem);
        findSecretWord(currentItem[1], master);
        assert(
            master.getFound() && master.getGuesses() >= 0,
            JSON.stringify(currentItem),
        );
    });
});
