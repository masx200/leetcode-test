target("frog-jump-ii")
set_kind("static")
add_files("index.ixx")
add_files("*.ixx", {install = true,public = true})

target_end()
