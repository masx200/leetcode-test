if is_mode("test") then add_requires("vcpkg::eventpp") end
set_policy("platform.longpaths", true)

add_rules("mode.debug", "mode.release");

set_languages("c17", "cxx20");
add_requires("vcpkg::gtest");
target("split-a-circular-linked-list-test");
-- 如果当前编译模式是test
if is_mode("test") then

    -- 添加test编译宏
    add_defines("__TEST__")
    add_packages("vcpkg::eventpp")
end
set_group("test")
set_default(false)
set_kind("binary");

add_files("*.ixx");
set_languages("c++20");
set_policy("build.c++.modules", true);
add_files("test.cpp");
add_packages("vcpkg::gtest");

target_end();
