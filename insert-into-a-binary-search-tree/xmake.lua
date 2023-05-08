add_repositories("masx200/xmake-repo https://gitee.com/masx200/xmake-repo.git");
add_repositories(
    "masx200/xmake-repo https://ghproxy.com/https://github.com/masx200/xmake-repo.git");
add_rules("mode.debug", "mode.release");
add_requires("leetcode-treenode-cpp 1.1.6");
add_requires("vcpkg::cppunit");
set_languages("c17", "cxx20");
target("test");
set_kind("binary");
set_languages("c++20");
set_policy("build.c++.modules", true);
add_files("*.ixx");
add_files("test.cpp");
add_packages("vcpkg::cppunit");
add_packages("leetcode-treenode-cpp");
target_end();
