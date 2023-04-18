g++  ~/cppmodules/leetcode-treenode-cpp-1.1.2/*.cxx ./insert-into-a-binary-search-tree/test.cpp -fmodules-ts  -l cppunit  -I ./insert-into-a-binary-search-tree -v -c

g++ ~/cppmodules/leetcode-treenode-cpp-1.1.2/*.cxx ./insert-into-a-binary-search-tree/test.cpp -fmodules-ts -l cppunit -o ./insert-into-a-binary-search-tree/test.bin -I ./insert-into-a-binary-search-tree -v

g++ ./check-if-it-is-a-good-array/*.ixx ./check-if-it-is-a-good-array/test.cpp -l gtest -c -I ./check-if-it-is-a-good-array -v -l pthread -fmodules-ts

g++ ./check-if-it-is-a-good-array/*.ixx ./check-if-it-is-a-good-array/test.cpp -l gtest -o ./check-if-it-is-a-good-array/test.bin -I ./check-if-it-is-a-good-array -v -l pthread -fmodules-ts

g++ ./insufficient-nodes-in-root-to-leaf-paths/test.cpp ~/cppmodules/leetcode-treenode-cpp-1.1.2/*.cxx -fmodules-ts -l gtest  -I ./insufficient-nodes-in-root-to-leaf-paths -v -l pthread -c

g++ ./insufficient-nodes-in-root-to-leaf-paths/test.cpp ~/cppmodules/leetcode-treenode-cpp-1.1.2/*.cxx -fmodules-ts -l gtest -o ./insufficient-nodes-in-root-to-leaf-paths/test.bin -I ./insufficient-nodes-in-root-to-leaf-paths -v -l pthread
