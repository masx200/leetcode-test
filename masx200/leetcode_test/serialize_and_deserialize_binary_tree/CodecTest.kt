package masx200.leetcode_test.serialize_and_deserialize_binary_tree

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

internal class CodecTest {
    @Test
    fun serialize() {
        assertEquals(
            "[100,[-200,null,null],[300,[100,[20,null,null],[300,null,null]],null]]",
            Codec().serialize(Codec().deserialize("[100,[-200,null,null],[300,[100,[20,null,null],[300,null,null]],null]]"))
        )
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
    }

}