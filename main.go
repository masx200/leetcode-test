package main

import (
	"fmt"
	"io/fs"
	"os"
	"os/exec"
	"path"
)

func main() {

	var matches, err = (fs.Glob(os.DirFS("./"), "./*/go.mod"))
	if err != nil {
		return
	}
	c := make(chan struct{})
	for _, m := range matches {
		go run(m, c)
	}
	for range matches {
		<-c
	}
}
func run(m string, out chan struct{}) {

	defer func() {
		out <- struct{}{}
	}()
	cmd := exec.Command("go", "test", "-v")

	cmd.Dir = "./" + path.Dir(m)
	fmt.Println(cmd.Dir, cmd)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	var err = cmd.Run()
	if err != nil {
		panic(err)
	}
}
