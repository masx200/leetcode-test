import { assertEquals } from "../deps.ts";
import TextEditor from "./index.ts";

Deno.test("design-a-text-editor", () => {
    const textEditor = new TextEditor();
    textEditor.addText("leetcode"); // 当前文本为 "leetcode|" 。
    assertEquals(4, textEditor.deleteText(4)); // 返回 4
    // 当前文本为 "leet|" 。
    // 删除了 4 个字符。
    textEditor.addText("practice"); // 当前文本为 "leetpractice|" 。
    assertEquals("etpractice", textEditor.cursorRight(3)); // 返回 "etpractice"
    // 当前文本为 "leetpractice|".
    // 光标无法移动到文本以外，所以无法移动。
    // "etpractice" 是光标左边的 10 个字符。
    assertEquals("leet", textEditor.cursorLeft(8)); // 返回 "leet"
    // 当前文本为 "leet|practice" 。
    // "leet" 是光标左边的 min(10, 4) = 4 个字符。
    assertEquals(4, textEditor.deleteText(10)); // 返回 4
    // 当前文本为 "|practice" 。
    // 只有 4 个字符被删除了。
    assertEquals("", textEditor.cursorLeft(2)); // 返回 ""
    // 当前文本为 "|practice" 。
    // 光标无法移动到文本以外，所以无法移动。
    // "" 是光标左边的 min(10, 0) = 0 个字符。
    assertEquals("practi", textEditor.cursorRight(6));
});
