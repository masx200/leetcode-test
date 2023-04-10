module;

export module number_complement.Solution;

namespace number_complement
{

    export class Solution
    {
    public:
        int findComplement(int num)
        {
            if (num == 0)
                return 1;
            int s = -1;
            for (int i = 31; i >= 0; i--)
            {
                if (((num >> i) & 1) != 0)
                {
                    s = i;
                    break;
                }
            }
            int ans = 0;
            for (int i = 0; i < s; i++)
            {
                if (((num >> i) & 1) == 0)
                    ans |= (1 << i);
            }
            return ans;
        }
    };
}
