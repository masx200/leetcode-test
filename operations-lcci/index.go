package operations_lcci

type Operations struct {
}

func Constructor() Operations {
	return Operations{}
}

func (o *Operations) Minus(a int, b int) int {
	return a - b
}

func (o *Operations) Multiply(a int, b int) int {
	return a * b
}

func (o *Operations) Divide(a int, b int) int {
	return a / b
}
