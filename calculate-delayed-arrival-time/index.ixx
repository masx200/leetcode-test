export module leetcode_test.calculate_delayed_arrival_time.Solution;
namespace leetcode_test::calculate_delayed_arrival_time {

export class Solution {
public:
    int findDelayedArrivalTime(int arrivalTime, int delayedTime)
    {
        return (arrivalTime + delayedTime) % 24;
    }
};
}