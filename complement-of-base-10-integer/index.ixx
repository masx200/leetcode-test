module;

export module complement_of_base_10_integer.Solution;

namespace complement_of_base_10_integer {

export class Solution {
public:
    int bitwiseComplement(int num)
    {
        if (num == 0)
            return 1;
        int s = -1;
        for (int i = 31; i >= 0; i--) {
            if (((num >> i) & 1) != 0) {
                s = i;
                break;
            }
        }
        int ans = 0;
        for (int i = 0; i < s; i++) {
            if (((num >> i) & 1) == 0)
                ans |= (1 << i);
        }
        return ans;
    }
};
}
