
#include<unordered_map>

namespace fibonacci_number{
using std::unordered_map;
class Solution {

    

    

    

    

    

 // static unordered_map<int,int> cache;

    

    

public:

    int fib(int n) {

        
static   unordered_map<int,int> cache;
        

        if(cache.count(n))return cache.at(n);

        

        

auto res= n==0?0:n == 1 || n == 2 ? 1 : fib(n-1) + fib(n-2);

        cache[n]=res;

        return res;

    }

    

    

};}
