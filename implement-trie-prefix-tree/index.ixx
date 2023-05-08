module;
#include <string>
#include <vector>

export module leetcode_test.implement_trie_prefix_tree.Trie;
using std::string;
using std::vector;
namespace leetcode_test::implement_trie_prefix_tree {
/*export*/ class TrieNode {
public:
    vector<TrieNode*> children;
    bool isWord;
    TrieNode()
        : isWord(false)
        , children(26, nullptr)
    {
    }
    ~TrieNode()
    {
        for (auto& c : children)
            delete c;
    }
};
export class Trie {
public:
    ~Trie()
    {
        delete root;
    }
    /** Initialize your data structure here. */
    Trie()
    {
        root = new TrieNode();
    }

    /** Inserts a word into the trie. */
    void insert(string word)
    {
        TrieNode* p = root;
        for (char a : word) {
            int i = a - 'a';
            if (!p->children[i])
                p->children[i] = new TrieNode();
            p = p->children[i];
        }
        p->isWord = true;
    }

    /** Returns if the word is in the trie. */
    bool search(string word)
    {
        TrieNode* p = root;
        for (char a : word) {
            int i = a - 'a';
            if (!p->children[i])
                return false;
            p = p->children[i];
        }
        return p->isWord;
    }

    /** Returns if there is any word in the trie that starts with the given prefix. */
    bool startsWith(string prefix)
    {
        TrieNode* p = root;
        for (char a : prefix) {
            int i = a - 'a';
            if (!p->children[i])
                return false;
            p = p->children[i];
        }
        return true;
    }

private:
    TrieNode* root;
};
}