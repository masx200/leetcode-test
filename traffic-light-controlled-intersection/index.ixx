module;
#include <functional>
#include <mutex>
using namespace std;
export module leetcode_test.traffic_light_controlled_intersection.TrafficLight;
namespace leetcode_test ::traffic_light_controlled_intersection {

export class TrafficLight {
    int lightId;
    mutex m;

public:
    TrafficLight() { lightId = 1; }

    void carArrived(int carId, // ID of the car
        int roadId, // ID of the road the car travels on. Can be 1
                    // (road A) or 2 (road B)
        int direction, // Direction of the car
        function<void()> turnGreen, // Use turnGreen() to turn light
                                    // to green on current road
        function<void()> crossCar // Use crossCar() to make car
                                  // cross the intersection
    )
    {
        lock_guard lock(m);
        if (lightId != roadId) {
            turnGreen();
            lightId = roadId;
        }
        crossCar();
    }
};
} // namespace leetcode_test::traffic_light_controlled_intersection