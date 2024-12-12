set_policy("platform.longpaths", true)
set_languages("c17", "cxx20");

target('leetcode-test')
on_load(function(target)
    print("download dependences")
    os.execv("xmake", {"lua", "install.lua"})
end)
set_languages("c++20");
set_kind('static')
set_policy("build.c++.modules", true);
add_files('*/*.ixx', {install = true})

add_files("./leetcode-treenode-cpp/*.ixx", {public = true});
target_end()
includes("./*/xmake.lua")
