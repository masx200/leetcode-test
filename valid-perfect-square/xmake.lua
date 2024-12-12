add_rules("mode.debug", "mode.release")

target("valid-perfect-square")
set_kind("static")
add_files("index.ixx")

add_files("*.ixx", {install = true,public = true})
target_end()
