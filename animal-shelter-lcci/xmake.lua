add_rules("mode.debug", "mode.release")
set_languages("c17", "cxx20")
target("animal-shelter-lcci")
set_kind("static")
add_files("index.ixx")

add_files("*.ixx",{install=true})
target_end()