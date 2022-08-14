package main

import (
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

	for _, m := range matches {
		cmd := exec.Command("go", "test", "-v")
		// fmt.Println(path.Dir(m), (cmd.Dir))
		cmd.Dir = "./" + path.Dir(m)
		cmd.Stdout = os.Stdout
		cmd.Stderr = os.Stderr
		var err = cmd.Run()
		if err != nil {
			panic(err)
		}
	}
}
