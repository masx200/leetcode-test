// +build ignore

#pragma once
#include <vector>

using namespace std;
#include <algorithm>
#include <numeric>


int gcd(int num1, int num2) {
  while (num2 != 0) {
    int temp = num1;
    num1 = num2;
    num2 = temp % num2;
  }
  return num1;
};
