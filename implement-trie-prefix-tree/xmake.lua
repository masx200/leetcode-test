add_rules("mode.debug", "mode.release")
set_languages("c17", "cxx20")
target("implement-trie-prefix-tree")
set_kind("static")

add_files("index.ixx")
add_files("*.ixx", {install = true, public = true})
target_end()
