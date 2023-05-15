if is_mode("test") then add_requires("vcpkg::eventpp") end
add_rules("mode.debug", "mode.release")
set_languages('cxx20')
target("design-linked-list")
set_kind("static")


add_files("*.ixx", {install = true})
target_end()
target("design-linked-list-test");
set_group('test')
set_default(false)
if is_mode("test") then
    add_defines("__TEST__")
    add_packages("vcpkg::eventpp")
end
add_files("test.cpp");
add_packages("vcpkg::gtest");
add_deps("design-linked-list")
target_end();
