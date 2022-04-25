import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { assertEquals } from "../deps.ts";
import { deserialize, serialize } from "./index.ts";
Deno.test("serialize-and-deserialize-binary-tree-0", () => {
    const root = new TreeNode(20, null, new TreeNode(10));

    // console.log("root", root);
    const encoded = serialize(root);
    assertEquals("[20,,10]", encoded);
    // console.log("encoded", encoded);
    const decoded = deserialize(encoded);
    assertEquals(decoded, root);
    // console.log("decoded", decoded);
});
Deno.test("serialize-and-deserialize-binary-tree-1", () => {
    const root = new TreeNode(
        100,
        null,
        new TreeNode(
            1,
            new TreeNode(2),
            new TreeNode(3, new TreeNode(4), new TreeNode(5, new TreeNode(6))),
        ),
    );
    // console.log("root", root);
    const encoded = serialize(root);
    assertEquals("[100,,[1,2,[3,4,[5,6]]]]", encoded);
    // console.log("encoded", encoded);
    const decoded = deserialize(encoded);
    assertEquals(decoded, root);
    // console.log("decoded", decoded);
});

Deno.test("serialize-and-deserialize-binary-tree-2", () => {
    const root = null;
    // console.log("root", root);
    const encoded = serialize(root);
    assertEquals("null", encoded);
    // console.log("encoded", encoded);
    const decoded = deserialize(encoded);
    assertEquals(decoded, root);
    // console.log("decoded", decoded);
});

Deno.test("serialize-and-deserialize-binary-tree-3", () => {
    const root = new TreeNode(-1, new TreeNode(0), new TreeNode(1));

    // console.log("root", root);
    const encoded = serialize(root);
    assertEquals("[-1,0,1]", encoded);
    // console.log("encoded", encoded);
    const decoded = deserialize(encoded);
    assertEquals(decoded, root);
    // console.log("decoded", decoded);
});
Deno.test("serialize-and-deserialize-binary-tree-4", () => {
    const root = new TreeNode(9);
    // console.log("root", root);
    const encoded = serialize(root);
    assertEquals("9", encoded);
    // console.log("encoded", encoded);
    const decoded = deserialize(encoded);
    assertEquals(decoded, root);
    // console.log("decoded", decoded);
});
Deno.test("serialize-and-deserialize-binary-tree-5", () => {
    const root = new TreeNode(0, new TreeNode(0), new TreeNode(10));

    // console.log("root", root);
    const encoded = serialize(root);
    assertEquals("[0,0,10]", encoded);
    // console.log("encoded", encoded);
    const decoded = deserialize(encoded);
    assertEquals(decoded, root);
    // console.log("decoded", decoded);
});
Deno.test("serialize-and-deserialize-binary-tree-6", () => {
    const root = new TreeNode(10, new TreeNode(0));

    // console.log("root", root);
    const encoded = serialize(root);
    assertEquals("[10,0]", encoded);
    // console.log("encoded", encoded);
    const decoded = deserialize(encoded);
    assertEquals(decoded, root);
    // console.log("decoded", decoded);
});
Deno.test("serialize-and-deserialize-binary-tree-7", () => {
    const root = new TreeNode(10, new TreeNode(0));
    let index = 0;
    let node = root;
    while (index < 100) {
        node.left ||= new TreeNode(index);
        node.right ||= new TreeNode(index + 1);
        node = node.right;
        index += 2;
    }
    // console.log("root", root);
    const encoded = serialize(root);
    assertEquals(
        encoded,
        "[10,0,[1,2,[3,4,[5,6,[7,8,[9,10,[11,12,[13,14,[15,16,[17,18,[19,20,[21,22,[23,24,[25,26,[27,28,[29,30,[31,32,[33,34,[35,36,[37,38,[39,40,[41,42,[43,44,[45,46,[47,48,[49,50,[51,52,[53,54,[55,56,[57,58,[59,60,[61,62,[63,64,[65,66,[67,68,[69,70,[71,72,[73,74,[75,76,[77,78,[79,80,[81,82,[83,84,[85,86,[87,88,[89,90,[91,92,[93,94,[95,96,[97,98,99]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]",
    );
    // console.log("encoded", encoded);
    const decoded = deserialize(encoded);
    assertEquals(decoded, root);
    // console.log("decoded", decoded);
});
Deno.test("serialize-and-deserialize-binary-tree-8", () => {
    const root = new TreeNode(10, new TreeNode(0));
    let index = 0;
    let node = root;
    while (index < 100) {
        node.left ||= new TreeNode(index);
        node.right ||= new TreeNode(index + 1);
        node = node.left;
        index += 2;
    }
    // console.log("root", root);
    const encoded = serialize(root);
    assertEquals(
        encoded,
        "[10,[0,[2,[4,[6,[8,[10,[12,[14,[16,[18,[20,[22,[24,[26,[28,[30,[32,[34,[36,[38,[40,[42,[44,[46,[48,[50,[52,[54,[56,[58,[60,[62,[64,[66,[68,[70,[72,[74,[76,[78,[80,[82,[84,[86,[88,[90,[92,[94,[96,98,99],97],95],93],91],89],87],85],83],81],79],77],75],73],71],69],67],65],63],61],59],57],55],53],51],49],47],45],43],41],39],37],35],33],31],29],27],25],23],21],19],17],15],13],11],9],7],5],3],1]",
    );
    // console.log("encoded", encoded);
    const decoded = deserialize(encoded);
    assertEquals(decoded, root);
    // console.log("decoded", decoded);
});

Deno.test("serialize-and-deserialize-binary-tree-9", () => {
    const root = new TreeNode(10, new TreeNode(0));
    let index = 0;
    let left = root;
    let right = root;
    while (index < 100) {
        left.left ||= new TreeNode(index);
        right.right ||= new TreeNode(index + 1);
        left = left.left;
        right = right.right;
        index += 2;
    }
    // console.log("root", root);
    const encoded = serialize(root);
    assertEquals(
        encoded,
        "[10,[0,[2,[4,[6,[8,[10,[12,[14,[16,[18,[20,[22,[24,[26,[28,[30,[32,[34,[36,[38,[40,[42,[44,[46,[48,[50,[52,[54,[56,[58,[60,[62,[64,[66,[68,[70,[72,[74,[76,[78,[80,[82,[84,[86,[88,[90,[92,[94,[96,98]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],[1,,[3,,[5,,[7,,[9,,[11,,[13,,[15,,[17,,[19,,[21,,[23,,[25,,[27,,[29,,[31,,[33,,[35,,[37,,[39,,[41,,[43,,[45,,[47,,[49,,[51,,[53,,[55,,[57,,[59,,[61,,[63,,[65,,[67,,[69,,[71,,[73,,[75,,[77,,[79,,[81,,[83,,[85,,[87,,[89,,[91,,[93,,[95,,[97,,99]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]",
    );
    // console.log("encoded", encoded);
    const decoded = deserialize(encoded);
    assertEquals(decoded, root);
    // console.log("decoded", decoded);
});
Deno.test("serialize-and-deserialize-binary-tree-10", () => {
    const root = new TreeNode(10, new TreeNode(0));
    let index = 0;
    let left = root;
    let right = root;
    while (index < 100) {
        left.left ||= new TreeNode(index);
        left.right ||= new TreeNode(index + 1);
        right.left ||= new TreeNode(index + 2);
        right.right ||= new TreeNode(index + 3);
        left = left.left;
        right = right.right;
        index += 4;
    }
    // console.log("root", root);
    // console.log(JSON.stringify(root))
    const encoded = serialize(root);
    assertEquals(
        encoded,
        "[10,[0,[4,[8,[12,[16,[20,[24,[28,[32,[36,[40,[44,[48,[52,[56,[60,[64,[68,[72,[76,[80,[84,[88,[92,96,97],93],89],85],81],77],73],69],65],61],57],53],49],45],41],37],33],29],25],21],17],13],9],5],[1,6,[7,10,[11,14,[15,18,[19,22,[23,26,[27,30,[31,34,[35,38,[39,42,[43,46,[47,50,[51,54,[55,58,[59,62,[63,66,[67,70,[71,74,[75,78,[79,82,[83,86,[87,90,[91,94,[95,98,99]]]]]]]]]]]]]]]]]]]]]]]]]",
    );
    // console.log("encoded", encoded);
    const decoded = deserialize(encoded);
    assertEquals(decoded, root);
    // console.log("decoded", decoded);
});
