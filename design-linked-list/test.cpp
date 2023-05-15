
#include <gtest/gtest.h>
#include <iterator>
#include <unordered_set>
#include <vector>
#ifdef __TEST__
#include <eventpp/callbacklist.h>
#endif
#include <ranges>
import leetcode_test.design_linked_list.MyLinkedList;

using namespace leetcode_test::design_linked_list;
using namespace std;
using std::vector;

#ifdef __TEST__
struct ListNodeInspector {
    unordered_set<DLinkListNode*> nodes;
    eventpp::CallbackList<void(DLinkListNode*)>::Handle handleNew;
    eventpp::CallbackList<void(DLinkListNode*)>::Handle handleDelete;
    ListNodeInspector()
    {
        auto handleNew = DLinkListNode::CallbackNew.append([this](auto* node) {
            std::cout << "DLinkListNode New:" << node << std::endl;
            nodes.insert(node);
        });
        this->handleNew = handleNew;
        auto handleDelete = DLinkListNode::CallbackDelete.append([this](auto* node) {
            std::cout << "DLinkListNode Delete:" << node << std::endl;

            nodes.erase(node);
        });
        this->handleDelete = handleDelete;
    }
    ~ListNodeInspector()
    {
        DLinkListNode::CallbackNew.remove(handleNew);
        DLinkListNode::CallbackDelete.remove(handleDelete);
    }
};
#endif
TEST(design_linked_list, test1)
{
#ifdef __TEST__
    ListNodeInspector inspector;
#endif

    MyLinkedList* myLinkedList1 = new MyLinkedList();
    myLinkedList1->addAtHead(1);
    myLinkedList1->addAtTail(3);
    myLinkedList1->addAtIndex(1, 2); // 链表变为 1->2->3
    ASSERT_EQ(2, myLinkedList1->get(1));
    myLinkedList1->deleteAtIndex(1); // 现在，链表 ->3
    ASSERT_EQ(3, myLinkedList1->get(1)); // 返回 3
    // haha
    delete myLinkedList1;

    // haha

#ifdef __TEST__

    ASSERT_EQ

        (size_t(0), inspector.nodes.size());
#endif
}
TEST(design_linked_list, test2)
{
#ifdef __TEST__
    ListNodeInspector inspector;
#endif

    MyLinkedList* myLinkedList1 = new MyLinkedList();
    myLinkedList1->addAtHead(1);
    myLinkedList1->addAtTail(3);
    myLinkedList1->addAtIndex(1, 2); // 链表变为 1->2->3
    ASSERT_EQ(1, myLinkedList1->get(0));
    ASSERT_EQ(2, myLinkedList1->get(1));
    // myLinkedList1->deleteAtIndex(1);    // 现在，链表 ->3
    ASSERT_EQ(3, myLinkedList1->get(2)); // 返回 3
    // haha
    delete myLinkedList1;

    // haha

#ifdef __TEST__
    ASSERT_EQ

        (size_t(0), inspector.nodes.size());
#endif
}

int main(int argc, char** argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
