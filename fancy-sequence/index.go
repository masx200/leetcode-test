package fancy_sequence

type Fancy struct {
	v, a, b []int
}

func Constructor() Fancy {
	return Fancy{
		a: []int{1}, b: []int{0},
	}
}

func (f *Fancy) Append(val int) {
	f.v = append(f.v, val)
	f.a = append(f.a, f.a[len(f.a)-1])
	f.b = append(f.b, f.b[len(f.b)-1])
}

func (f *Fancy) AddAll(inc int) {
	f.b[len(f.b)-1] = (f.b[len(f.b)-1] + inc) % mod
}

func (f *Fancy) MultAll(m int) {
	f.a[len(f.a)-1] = (f.a[len(f.a)-1] * m) % mod
	f.b[len(f.b)-1] = (f.b[len(f.b)-1] * m) % mod
}

func (f *Fancy) GetIndex(idx int) int {
	if idx >= len(f.v) {
		return -1
	}
	ao := (MultiplicativeInverse(f.a[idx], mod) * f.a[len(f.a)-1]) % mod
	bo := (f.b[len(f.b)-1] - f.b[idx]*ao%mod + mod) % mod
	return (ao*f.v[idx]%mod + bo) % mod
}
func PowMod(x, y, m int) int {
	mod := int64(m)
	var ret int64 = 1
	var cur int64 = int64(x)
	for y != 0 {
		if y&1 != 0 {
			ret = (ret) * cur % mod
		}
		cur = cur * cur % mod
		y >>= 1
	}
	return int(ret)
}
func MultiplicativeInverse(x, m int) int {
	return PowMod(x, m-2, m)
}

const mod = 1000000007
