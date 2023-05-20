
#include <gtest/gtest.h>
#include <functional>
#include <future>
#include <iostream>
#include <mutex>
#include <queue>
#include <thread>
#include<sstream>
#include  <algorithm>
import leetcode_test.building_h2o.H2O;
using namespace std;
using leetcode_test::building_h2o::H2O;
TEST(building_h2o,main) {
    stringstream output;
    mutex lock;
    H2O h2o {};

    auto t1 = thread([&]() {
        h2o.hydrogen([&]() {
            lock_guard<mutex> gaurd{lock};
            cout << "H" << endl;
            output << "H";
        });
    });
    auto t2 = thread([&]() {
        h2o.hydrogen([&]() {
            lock_guard<mutex> gaurd { lock };
            cout << "H" << endl;
            output << "H";
        });
    });
    auto t3 = thread([&]() {
        h2o.oxygen([&]() {
            lock_guard<mutex> gaurd { lock };
            cout << "O" << endl;
            output << "O";
        });
    });
    auto t4 = thread([&]() {
        h2o.hydrogen([&]() {
            lock_guard<mutex> gaurd { lock };
            cout << "H" << endl;
            output << "H";
        });
    });
    auto t6 = thread([&]() {
        h2o.hydrogen([&]() {
            lock_guard<mutex> gaurd { lock };
            cout << "H" << endl;
            output << "H";
        });
    });
    auto t5 = thread([&]() {
        h2o.oxygen([&]() {
            lock_guard<mutex> gaurd { lock };
            cout << "O" << endl;
            output << "O";
        });
    });

    t1.join();
    t2.join();
    t3.join();
    t4.join();
    t5.join();
    t6.join();

    string res = output.str();
    ASSERT_EQ(6, res.size());
    auto one = res.substr(0, 3);
    ASSERT_EQ(1, count(one.begin(), one.end(), 'O'));
    ASSERT_EQ(2, count(one.begin(), one.end(), 'H'));
    auto two = res.substr(3, 3);
    ASSERT_EQ(1, count(two.begin(), two.end(), 'O'));
    ASSERT_EQ(2, count(two.begin(), two.end(), 'H'));
}

int main(int argc, char **argv) {
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}