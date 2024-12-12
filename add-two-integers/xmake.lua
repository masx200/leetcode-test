add_rules("mode.debug", "mode.release")

target("add-two-integers")
set_kind("static")

add_files("index.ixx")
add_files("*.ixx", {install = true, public = true})
target_end()
