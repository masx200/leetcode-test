module;

#include <algorithm>
#ifdef __TEST__
#include <eventpp/callbacklist.h>
#endif
export module leetcode_test.design_linked_list.MyLinkedList;
using std::max;

namespace leetcode_test::design_linked_list {
export struct DLinkListNode {
    int val;
    DLinkListNode *prev, *next;
    DLinkListNode(int _val)
        : val(_val)
        , prev(nullptr)
        , next(nullptr)
    {
#ifdef __TEST__
        CallbackNew(this);
#endif
    }
    ~DLinkListNode()

    {
#ifdef __TEST__
        CallbackDelete(this);
#endif
    }
#ifdef __TEST__
    static eventpp::CallbackList<void(DLinkListNode*)> CallbackNew;
    static eventpp::CallbackList<void(DLinkListNode*)> CallbackDelete;
#endif
};
#ifdef __TEST__
eventpp::CallbackList<void(DLinkListNode*)> DLinkListNode::CallbackDelete {};
eventpp::CallbackList<void(DLinkListNode*)> DLinkListNode::CallbackNew {};
#endif
export class MyLinkedList {
public:
    ~MyLinkedList()
    {
        DLinkListNode* node = head;
        while (node) {
            DLinkListNode* cur = node;
            node = node->next;
            delete cur;
        }
        head = nullptr;
        tail = nullptr;
    }

    MyLinkedList()
    {
        this->size = 0;
        this->head = new DLinkListNode(0);
        this->tail = new DLinkListNode(0);
        head->next = tail;
        tail->prev = head;
    }

    int get(int index)
    {
        if (index < 0 || index >= size) {
            return -1;
        }
        DLinkListNode* curr;
        if (index + 1 < size - index) {
            curr = head;
            for (int i = 0; i <= index; i++) {
                curr = curr->next;
            }
        } else {
            curr = tail;
            for (int i = 0; i < size - index; i++) {
                curr = curr->prev;
            }
        }
        return curr->val;
    }

    void addAtHead(int val) { addAtIndex(0, val); }

    void addAtTail(int val) { addAtIndex(size, val); }

    void addAtIndex(int index, int val)
    {
        if (index > size) {
            return;
        }
        index = max(0, index);
        DLinkListNode *pred, *succ;
        if (index < size - index) {
            pred = head;
            for (int i = 0; i < index; i++) {
                pred = pred->next;
            }
            succ = pred->next;
        } else {
            succ = tail;
            for (int i = 0; i < size - index; i++) {
                succ = succ->prev;
            }
            pred = succ->prev;
        }
        size++;
        auto* toAdd = new DLinkListNode(val);
        toAdd->prev = pred;
        toAdd->next = succ;
        pred->next = toAdd;
        succ->prev = toAdd;
    }

    void deleteAtIndex(int index)
    {
        if (index < 0 || index >= size) {
            return;
        }
        DLinkListNode *pred, *succ;
        if (index < size - index) {
            pred = head;
            for (int i = 0; i < index; i++) {
                pred = pred->next;
            }
            succ = pred->next->next;
        } else {
            succ = tail;
            for (int i = 0; i < size - index - 1; i++) {
                succ = succ->prev;
            }
            pred = succ->prev->prev;
        }
        size--;
        DLinkListNode* p = pred->next;
        pred->next = succ;
        succ->prev = pred;
        delete p;
    }

private:
    int size;
    DLinkListNode* head;
    DLinkListNode* tail;
};
} // namespace leetcode_test::design_linked_list
