// +build ignore

#pragma once
#include <queue>
#include <string>

using namespace std;
#include "TreeNode.hpp"
#include "bfsTravelsal.hpp"

#include <iostream>
#include <iterator>
#include <regex>
#include <sstream>
std::string LeetCodeTreeNodeToString(TreeNode* root)
{
    stringstream sstream;
    auto result = bfsTravelsal(root);
    std::regex vowel_re("(,null){1,}\\]$");

    std::regex_replace(std::ostreambuf_iterator<char>(sstream), result.begin(),
        result.end(), vowel_re, "]");
    return sstream.str();
}