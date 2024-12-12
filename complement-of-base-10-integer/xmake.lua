add_rules("mode.debug", "mode.release")

target("complement-of-base-10-integer")
set_kind("static")
add_files("index.ixx")
add_files("*.ixx", {install = true,public = true})
target_end()

