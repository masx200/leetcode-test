import { assertEquals } from "asserts";
import simplifyPath from "./index.ts";
Deno.test("simplify-path", () => {
    assertEquals(
        "/kdZamHVZIcbthizmUQBg/HYcOYVqzhhhgWgkV/xqpbNSHugkzda/R/RmNu/dFBzXI/YIgBwwhGKgtnwMKqjiZK/Ju/ELXRJQljUYsW/lJvosXSqmmULnXpenaK/LsWzkuYrTKZfMcFcmgv/cUESBaPzUmhRLCmm/BKycLloEYKu/ph/TpswBgAASdSDLVv/SBrbHopECJDlhNs/eROO/uj/AaKrETHioJhWdmM/myvNFuQwTklfQ/QIAqDUzcYesxKpOqgb/USxjuNlGdyipIQgqIlC/CzkZHnnwxNFrDrqPtqa/EWOfSWxHgmabUfJLIC/OXorq/SBPyPldIgQOa/UYAPKibcMvd/vcxSvKvs/yNtuaHkBSduLeTDv/OMvTMy/yBFWPAQtMWxnMRsGo/sOHoiVvBqQpQ/ADpmfIW/DFduAPq/pyDAXQiS/UWbjYgwNDQjgvjuHv/TWZNfsOAD/CzZha/kjpWJhgfjsm/BrVmnfkfB/JCnEJL/cf/PlmYUbsZHNSTAdTcD/OamtA/uVckLjw/TRDLoNicILTPq/YzVbQrwhuFDxWNTuqB/ZPZHAeGYPctPZpSlV/Aha/Yjfjq/SjQ/pJiaByOvYxBTSqVm/trX/lF/mhQLuewidQvK/NYPO/uxuhKOj/VtLKRjAng/GWrvFVHLIazclsDzZDj/vgbEBJXAQyltpTmpBF/zVeqKznVZ/H/YEUlnzNFXaZCCPTnBAOM/qvLpBVlazhgWPP/YSfbiEKhmjW/rpHmy",
        simplifyPath(
            "/kdZamHVZIcbthizmUQBg/gFdASc/////////../././HYcOYVqzhhhgWgkV///./xqpbNSHugkzda/p/..///R/RmNu/dFBzXI/YIgBwwhGKgtnwMKqjiZK/Ju///ELXRJQljUYsW/lJvosXSqmmULnXpenaK/LsWzkuYrTKZfMcFcmgv/cUESBaPzUmhRLCmm/BKycLloEYKu///ph///TpswBgAASdSDLVv/SBrbHopECJDlhNs/eROO/uj/./AaKrETHioJhWdmM/myvNFuQwTklfQ/QIAqDUzcYesxKpOqgb/USxjuNlGdyipIQgqIlC/CzkZHnnwxNFrDrqPtqa/////EWOfSWxHgmabUfJLIC/OXorq/BdmxJmSPweNe/..///.///SBPyPldIgQOa/././//UYAPKibcMvd/vcxSvKvs/yNtuaHkBSduLeTDv/OMvTMy///W/msHUdKmlYgIV/PqdydgtO/../../../EsOZHi/./../././yBFWPAQtMWxnMRsGo/./zLYxnGZ/dosHbOCsZZIt///////..///./////../sOHoiVvBqQpQ/./////ADpmfIW/./DFduAPq///pyDAXQiS/.///UWbjYgwNDQjgvjuHv///././TWZNfsOAD/////CzZha/kjpWJhgfjsm/./BrVmnfkfB///////JCnEJL/XgWHzzNVwYmGJa/../cf/////PlmYUbsZHNSTAdTcD///eorkzPyrLqyrFvayiEd///../RDkRFkMjjwDNfEO/./..///CUTOOGZLhYiGvplxFDwT/../OamtA/./snCqwYnPKRavb/./..///uVckLjw///LZXIRWkKcgSSAHVv///.././TRDLoNicILTPq/RrddZRomiSDAzseSLVXW/ROFWkQef/EcnBYYyqbAkGkFSe/..///////../../YzVbQrwhuFDxWNTuqB/ZPZHAeGYPctPZpSlV/Aha/Yjfjq/./SjQ/pJiaByOvYxBTSqVm///trX/lF///MiEIJudrmjGC/pfoPEqXeGo/../././../mhQLuewidQvK/NYPO/zmYenHBJgSyQpUda/../uxuhKOj///VtLKRjAng/nVdWdTEYDAEsbvomP/////..///GWrvFVHLIazclsDzZDj/vgbEBJXAQyltpTmpBF/zVeqKznVZ/H/./YEUlnzNFXaZCCPTnBAOM/qvLpBVlazhgWPP///uixXSzeWvpidYcx///.././YSfbiEKhmjW///rpHmy",
        ),
    );
});
Deno.test("simplify-path", () => {
    assertEquals("/home/foo", simplifyPath("/home//foo/"));
    assertEquals("/home", simplifyPath("/home/"));
    assertEquals("/", simplifyPath("/../"));

    assertEquals(simplifyPath("/a/./b/../../c/"), "/c");
});
