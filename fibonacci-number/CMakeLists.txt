cmake_minimum_required(VERSION 3.25)
project(fibonacci_number)

set(CMAKE_CXX_STANDARD 20)

include_directories(.)

add_executable(fibonacci_number
        index.ixx)
