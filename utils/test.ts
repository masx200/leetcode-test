import { assertEquals } from "../deps.ts";
import { PrefixTreeInsert } from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";
import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";
import { PrefixTreeTraverse } from "./PrefixTreeTraverse.ts";

Deno.test("Prefix-Tree", () => {
    const words = [
        "ZXhwb3J0IHsgc3VtIH07",
        "ZXhwb3J0IHsgcG93X2JpZ2ludCB9IGZyb20gIi4vcG93eC1uL3Bvd19iaWdpbnQudHMiOw==",
        "ZXhwb3J0IHsgY2xpbWJpbmdfc3RhaXJzX2JpZ2ludCB9IGZyb2…tc3RhaXJzL2NsaW1iaW5nX3N0YWlyc19iaWdpbnQudHMiOw==",
        "ZXhwb3J0IHsgZmlib25hY2NpX2JpZ2ludCB9IGZyb20gIi4vZmlib25hY2NpLW51bWJlci9maWJvbmFjY2lfYmlnaW50LnRzIjs=",
        "aW1wb3J0IHsgQXJyYXlUb0xpc3ROb2RlIH0gZnJvbSAiLi9yZXZlcnNlLWxpbmtlZC1saXN0L0FycmF5VG9MaXN0Tm9kZS50cyI7",
        "aW1wb3J0IHsgTGlzdE5vZGUgfSBmcm9tICIuL3JldmVyc2UtbGlua2VkLWxpc3QvTGlzdE5vZGUudHMiOw==",
        "aW1wb3J0IHsgTGlzdE5vZGVUb0FycmF5IH0gZnJvbSAiLi9yZXZlcnNlLWxpbmtlZC1saXN0L0xpc3ROb2RlVG9BcnJheS50cyI7",
        "aW1wb3J0IHsgU3FydE51bWJlciB9IGZyb20gIi4vc3FydHgvU3FydE51bWJlci50cyI7",
        "aW1wb3J0IHsgZ2V0X2RlZXBfbmV4dF9vZl9saXN0IH0gZnJvbS…lZC1saXN0LWlpL2dldF9kZWVwX25leHRfb2ZfbGlzdC50cyI7",
        "aW1wb3J0IHsgZ2V0X2xlbmd0aF9vZl9saXN0IH0gZnJvbSAiLi…pbmtlZC1saXN0LWlpL2dldF9sZW5ndGhfb2ZfbGlzdC50cyI7",
        "aW1wb3J0IHsgZmxvYXQ2NGVxdWFscyB9IGZyb20gIi4vdXRpbHMvZmxvYXQ2NGVxdWFscy50cyI7",
        "aW1wb3J0IHsgc3VtIH0gZnJvbSAiLi9yaWNoZXN0LWN1c3RvbWVyLXdlYWx0aC9zdW0udHMiOw==",
        "aW1wb3J0IHsgZ2V0X2VuZF9vZl9saXN0IH0gZnJvbSAiLi9tZX…uLWxpbmtlZC1saXN0cy9nZXRfZW5kX29mX2xpc3QudHMiOw==",
        "aW1wb3J0IHsgc3VwZXJQb3dfbW9kIH0gZnJvbSAiLi9zdXBlci1wb3cvc3VwZXJQb3dfbW9kLnRzIjs=",
        "aW1wb3J0IHsgbXVsdGlwbHlfTW9kIH0gZnJvbSAiLi9zdXBlci1wb3cvbXVsdGlwbHlfTW9kLnRzIjs=",
        "aW1wb3J0IHsgcG93X2JpZ2ludF9tb2QgfSBmcm9tICIuL3N1cGVyLXBvdy9wb3dfYmlnaW50X21vZC50cyI7",
        "aW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICIuL2JpbmFyeS10cmVlLWlub3JkZXItdHJhdmVyc2FsL1RyZWVOb2RlLnRzIjs=",
        "aW1wb3J0IHsgTmVzdGVkSW50ZWdlciB9IGZyb20gIi4vbWluaS1wYXJzZXIvTmVzdGVkSW50ZWdlci50cyI7",
        "aW1wb3J0IHsgTmVzdGVkSW50ZWdlclR5cGUgfSBmcm9tICIuL21pbmktcGFyc2VyL05lc3RlZEludGVnZXJUeXBlLnRzIjs=",
        "aW1wb3J0IHsgcmFuZDcgfSBmcm9tICIuL2ltcGxlbWVudC1yYW5kMTAtdXNpbmctcmFuZDcvcmFuZDcudHMiOw==",
        "aW1wb3J0IHsgYmlnaW50X21heCB9IGZyb20gIi4vbWF4aW11bS13aWR0aC1vZi1iaW5hcnktdHJlZS9iaWdpbnRfbWF4LnRzIjs=",
        "aW1wb3J0IHsgYmlnaW50X21pbiB9IGZyb20gIi4vbWF4aW11bS13aWR0aC1vZi1iaW5hcnktdHJlZS9iaWdpbnRfbWluLnRzIjs=",
        "aW1wb3J0IHsgTm9kZSB9IGZyb20gIi4vbi1hcnktdHJlZS1sZXZlbC1vcmRlci10cmF2ZXJzYWwvTm9kZS50cyI7",
        "aW1wb3J0IHsgUHJlZml4VHJlZSB9IGZyb20gIi4vaW1wbGVtZW50LXRyaWUtcHJlZml4LXRyZWUvUHJlZml4VHJlZS50cyI7",
        "aW1wb3J0IHsgVHJpZUVhY2ggfSBmcm9tICIuL2xvbmdlc3Qtd29yZC1pbi1kaWN0aW9uYXJ5L1RyaWVFYWNoLnRzIjs=",
        "aW1wb3J0IHsgUHJlZml4VHJlZUluc2VydCB9IGZyb20gIi4vZG…hdGEtc3RydWN0dXJlL1ByZWZpeFRyZWVJbnNlcnQudHMiOw==",
        "ZXhwb3J0IHsgVHJlZU5vZGUgfTs=",
        "ZXhwb3J0IHsgQXJyYXlUb0xpc3ROb2RlLCBMaXN0Tm9kZSwgTGlzdE5vZGVUb0FycmF5IH07",
        "ZXhwb3J0IHsgU3FydE51bWJlciB9Ow==",
        "ZXhwb3J0IHsgZ2V0X2RlZXBfbmV4dF9vZl9saXN0IH07",
        "ZXhwb3J0IHsgZ2V0X2xlbmd0aF9vZl9saXN0IH07",
        "ZXhwb3J0IHsgZmxvYXQ2NGVxdWFscyB9Ow==",
        "ZXhwb3J0IHsgZ2V0X2VuZF9vZl9saXN0IH07",
        "ZXhwb3J0IHsgc3VwZXJQb3dfbW9kIH07",
        "ZXhwb3J0IHsgbXVsdGlwbHlfTW9kIH07",
        "ZXhwb3J0IHsgcG93X2JpZ2ludF9tb2QgfTs=",
        "ZXhwb3J0IHsgTmVzdGVkSW50ZWdlciB9Ow==",
        "ZXhwb3J0IHsgTmVzdGVkSW50ZWdlclR5cGUgfTs=",
        "ZXhwb3J0IHsgcmFuZDcgfTs=",
        "ZXhwb3J0IHsgYmlnaW50X21heCwgYmlnaW50X21pbiB9Ow==",
        "ZXhwb3J0IHsgTm9kZSB9Ow==",
        "ZXhwb3J0IHsgUHJlZml4VHJlZSwgVHJpZUVhY2ggfTs=",
        "ZXhwb3J0IHsgUHJlZml4VHJlZUluc2VydCB9Ow==",
    ];
    const tree = PrefixTree();
    words.forEach((word) => PrefixTreeInsert(tree, word));
    const left = new Set(words);
    const right = new Set(PrefixTreeTraverse(tree));
    // console.log(left, right);
    assertEquals(left, right);
});
