package serialize_and_deserialize_binary_tree

import (
	"encoding/json"
	"errors"
)

type Codec struct {
}

func Constructor() Codec {
	return Codec{}
}

type any = interface{}

func replacer(root *TreeNode) any {
	if root == nil {
		return nil
	}

	return []any{root.Val, replacer(root.Left), replacer(root.Right)}
}

// Serializes a tree to a single string.
func (c *Codec) serialize(root *TreeNode) string {
	var b, e = json.Marshal(replacer(root))

	if e != nil {
		panic(e)
	}
	// fmt.Println(string(b))
	return string(b)
}
func reviver(data any) *TreeNode {
	// fmt.Println(data)
	var vv, ok = data.([]interface{})
	//  fmt.Println(vv,ok)
	if ok {
		// fmt.Println( reflect.TypeOf(vv[0]))
		var val, ok = (vv[0]).(float64)
		// fmt.Println(val,ok)
		if ok {
			var p = &TreeNode{
				Val:   int(val),
				Left:  reviver(vv[1]),
				Right: reviver(vv[2])}
			return p
		} else {

			panic(errors.New("type error float64"))
		}

	}
	return nil

}

// Deserializes your encoded data to tree.
func (c *Codec) deserialize(data string) *TreeNode {
	var p any

	var e = json.Unmarshal([]byte(data), &p)

	if e != nil {
		panic(e)
	}
	//   fmt.Println(p)
	return reviver(p)
}
