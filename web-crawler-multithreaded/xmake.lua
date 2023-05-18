set_languages('c++20')
target("web-crawler-multithreaded")
set_kind("static")


add_files("*.ixx", {install = true})
target_end()
