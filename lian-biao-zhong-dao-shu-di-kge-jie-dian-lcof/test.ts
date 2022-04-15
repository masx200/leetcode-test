Deno.test("lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof", () => {
    const examples: {
        input: [number[], number];
        output: number[];
    }[] = [
        { input: [[1, 2, 3, 4, 5], 2], output: [4, 5] },
        { input: [[1, 2, 3, 4, 5], 1], output: [5] },
        { input: [[1, 2, 3, 4, 5], 3], output: [3, 4, 5] },
    ];
    examples.forEach(({ input, output }) => {
        assertEquals(
            output,
            ListNodeToArray(
                lian_biao_zhong_dao_shu_di_kge_jie_dian_lcof(
                    ArrayToListNode(input[0]),
                    input[1],
                ),
            ),
        );
    });
});
import { assertEquals } from "../deps.ts";
import {
    ArrayToListNode,
    lian_biao_zhong_dao_shu_di_kge_jie_dian_lcof,
    ListNodeToArray,
} from "../mod.ts";
