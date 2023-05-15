if is_mode("test") then add_requires("vcpkg::eventpp") end
set_policy("platform.longpaths", true)
-- add_repositories("masx200/xmake-repo https://gitee.com/masx200/xmake-repo.git");
-- add_repositories(
--    "masx200/xmake-repo https://ghproxy.com/https://github.com/masx200/xmake-repo.git");
add_rules("mode.debug", "mode.release");
-- add_requires("leetcode-treenode-cpp 1.1.7");
set_languages("c17", "cxx20");
add_requires("vcpkg::gtest");
target("insufficient-nodes-in-root-to-leaf-paths-test");
-- 如果当前编译模式是test
if is_mode("test") then

    -- 添加test编译宏
    add_defines("__TEST__")
    add_packages("vcpkg::eventpp")
end
set_group("test")
set_default(false)
set_kind("binary");
-- add_files("debugTreeNode.ixx");
add_files("printTreeNode.ixx", "*.ixx");
set_languages("c++20");
set_policy("build.c++.modules", true);
add_files("test.cpp");
add_packages("vcpkg::gtest");
-- add_packages("leetcode-treenode-cpp");
add_files("../leetcode-treenode-cpp/*.ixx");
target_end();
