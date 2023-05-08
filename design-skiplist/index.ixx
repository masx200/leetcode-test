module;
#include <unordered_map>
export module leetcode_test.design_skiplist.Skiplist;
using std::unordered_map;

namespace leetcode_test::design_skiplist {
export class Skiplist {
private:
    unordered_map<int, int> storage;

public:
    Skiplist()
        = default;

    bool search(int target)
    {
        return (storage.count(target) ? storage.at(target) : 0) > 0;
    }

    void add(int num)
    {
        storage[num]++;
    }

    bool erase(int num)
    {
        if ((storage.count(num) ? storage.at(num) : 0) == 1) {
            storage.erase(num);
            return true;
        }
        if (search(num)) {
            storage[num]--;

            return true;
        } else {
            return false;
        }
    }
};

}
