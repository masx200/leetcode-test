add_rules("mode.debug", "mode.release")

target("maximum-sum-with-exactly-k-elements")
set_kind("static")
add_files("index.ixx")

add_files("*.ixx", {install = true, public = true})
target_end()
