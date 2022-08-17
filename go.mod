module github.com/masx200/leetcode-test

go 1.18

require (
	github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree v0.0.0-20220817020324-66611ff0c589
	gotest.tools/v3 v3.3.0
)

require github.com/google/go-cmp v0.5.8 // indirect

replace github.com/masx200/leetcode-test/serialize-and-deserialize-binary-tree v0.0.0-20220817020324-66611ff0c589 => ./serialize-and-deserialize-binary-tree
