package masx200.leetcode_test.serialize_and_deserialize_binary_tree

import masx200.leetcode_test.insert_into_a_binary_search_tree.TreeNode
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

internal class CodecTest {
    @Test
    fun serialize() {
        assertEquals(
            "[100,[-200,null,null],[300,[100,[20,null,null],[300,null,null]],null]]",
            Codec().serialize(Codec().deserialize("[100,[-200,null,null],[300,[100,[20,null,null],[300,null,null]],null]]"))
        )
        assertEquals(
            Codec().serialize(
                (TreeNode(100, TreeNode(-200), TreeNode(300, TreeNode(100, TreeNode(20), TreeNode(300)))))),
                Codec().serialize(
                    Codec().deserialize(
                        Codec().serialize(
                            TreeNode(
                                100,
                                TreeNode(-200),
                                TreeNode(300, TreeNode(100, TreeNode(20), TreeNode(300)))
                            )
                        )
                    )
                ))
    }

    @Test
    fun deserialize() {
        assertEquals(
            "[100,[20,null,null],[300,[100,[20,null,null],[300,null,null]],null]]",
            Codec().serialize(Codec().deserialize("[100,[20,null,null],[300,[100,[20,null,null],[300,null,null]],null]]"))
        )
        assertEquals(
            "null",
            Codec().serialize(Codec().deserialize("null"))
        )
        assertEquals(
            null,
            Codec().deserialize(Codec().serialize(null))
        )
    }

}