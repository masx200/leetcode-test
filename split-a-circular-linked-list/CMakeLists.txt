cmake_minimum_required(VERSION 3.25)
project(split_a_circular_linked_list)

set(CMAKE_CXX_STANDARD 20)

add_executable(split_a_circular_linked_list
        ArrayToCircularLinkedList.ixx
        CircularLinkedListToArray.ixx
        index.ixx
        ListNode.ixx
        test.cpp
        TraversalCircularListNode.ixx)
