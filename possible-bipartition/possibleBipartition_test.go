package possible_bipartition

import (
	"encoding/json"
	// "fmt"
	"gotest.tools/v3/assert"
	"testing"
)

func TestPossibleBipartition(t *testing.T) {

	cases := []struct {
		n        int
		dislikes string
		result   bool
	}{
		{4, "[[1,2],[1,3],[2,4]]", true},
		{3, "[[1,2],[1,3],[2,3]]", false},
		{5, "[[1,2],[2,3],[3,4],[4,5],[1,5]]", false},
	}
	for _, c := range cases {

		var d [][]int
		var e = json.Unmarshal(([]byte(c.dislikes)), &d)
		if e != nil {
			panic(e)
		}
		// fmt.Println(c)
		// fmt.Println(d)
		assert.Equal(t, c.result, possibleBipartition(c.n, d))
	}
}
