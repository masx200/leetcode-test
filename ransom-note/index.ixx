module;
#include <string>
#include <unordered_map>
export module ransom_note.Solution;
namespace ransom_note {
using std::string;
using std::unordered_map;
export class Solution {

public:
    bool canConstruct(string ransomNote, string magazine)
    {

        auto map1 = unordered_map<char, int> {};

        for (auto c : magazine) {
            map1[c]++;
        }

        for (auto c : ransomNote) {
            map1[c]--;
            if (map1[c] < 0)
                return false;
        }
        return true;
    }
};

}