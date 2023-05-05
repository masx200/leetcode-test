export module sum_multiples.Solution;
namespace sum_multiples
{
    export class Solution
    {
    public:
        int sumOfMultiples(int n)
        {
            return sum(n, 3) + sum(n, 5) + sum(n, 7) - sum(n, 21) - sum(n, 35) - sum(n, 15) + sum(n, 105);
        }

    private:
        auto sum(int n, int m) -> int
        {
            return ((m + (n - n % m)) * (n / m)) / 2;
        }
    };
}
