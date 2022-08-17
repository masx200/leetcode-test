package main

import (
	"fmt"
	"io/fs"
	"os"
	"os/exec"
	"path"
	"runtime"
)

func handle(in chan string, out chan any, lim chan struct{}) {
	lim <- struct{}{}
	d := <-in
	run(d, out)
	<-lim
}
func main() {

	var matches, err = (fs.Glob(os.DirFS("./"), "./*/go.mod"))
	if err != nil {
		fmt.Println(err)
		return
	}
	var MAXREQS = runtime.NumCPU()

	var lim = make(chan struct{}, MAXREQS)
	out := make(chan any)
	in := make(chan string)
	for range matches {

		go handle(in, out, lim)

	}
	for _, m := range matches {

		in <- m
	}

	for range matches {
		var b = <-out
		if nil != b {
			panic(b)
		}
	}

}
func run(m string, out chan any) {
	defer func() {
		var e = recover()
		if e != nil {

			out <- e
			return
		}
		out <- nil
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
