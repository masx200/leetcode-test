target("largest-rectangle-in-histogram")
set_kind("static")
add_files("index.ixx")
add_files("*.ixx", {install = true, public = true})

target_end()
