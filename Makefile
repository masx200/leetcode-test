all:
    g++ -std=c++20 ./insert-into-a-binary-search-tree/test.cpp -o test -I ./insert-into-a-binary-search-tree -v
    
    
test:
    chmod +x test
    ./test
    
clean:
    $(RM) test
