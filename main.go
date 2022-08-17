package main

import (
	"errors"
	"fmt"
	"io/fs"
	"os"
	"os/exec"
	"path"
	"runtime"
)

func main() {

	var matches, err = (fs.Glob(os.DirFS("./"), "./*/go.mod"))
	if err != nil {
		return
	}
	c := make(chan bool, runtime.NumCPU())
	for _, m := range matches {
		go run(m, c)
	}
	for range matches {
		var b = <-c
		if !b {
			panic(errors.New("test failed"))
		}
	}
}
func run(m string, out chan bool) {
	defer func() {
		var e = recover()
		if e != nil {
			fmt.Printf("%s\n", e)
			out <- false
			return
		}
		out <- true
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
