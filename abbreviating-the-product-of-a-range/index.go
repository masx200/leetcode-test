package index

import (
	"fmt"
	"math/big"
	"strconv"
	"strings"
)

var factorials = make([]*big.Int, 10001)

func initialization() {
	if factorials[0] == nil {
		var i int64 = 0
		for ; i <= 10000; i++ {
			if i == 0 {
				factorials[i] = big.NewInt(1)
			} else {
				factorials[i] = new(big.Int).Mul(factorials[i-1], big.NewInt(i))
			}

		}
	}
}

func abbreviateProduct(left, right int) string {
	initialization()
	var s string
	if left == right {
		s = strconv.Itoa(left)
	} else {
		s = new(big.Int).Div(factorials[right], factorials[left-1]).String()
	}
	tz := len(s)
	s = strings.TrimRight(s, "0")
	tz -= len(s)
	if len(s) > 10 {
		return fmt.Sprintf("%s...%se%d", s[:5], s[len(s)-5:], tz)
	}
	return fmt.Sprintf("%se%d", s, tz)
}
