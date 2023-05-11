set_policy("platform.longpaths", true)
set_languages("c17", "cxx20");
add_repositories("masx200/xmake-repo https://gitee.com/masx200/xmake-repo.git");
add_repositories(
    "masx200/xmake-repo https://ghproxy.com/https://github.com/masx200/xmake-repo.git");
add_requires("leetcode-treenode-cpp 1.1.7");
target('leetcode-test')
set_languages("c++20");
set_kind('static')
set_policy("build.c++.modules", true);
add_files('*/*.ixx', {install = true})
add_packages("leetcode-treenode-cpp");
target_end()
includes("./**/xmake.lua")
