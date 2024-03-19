# 链表问题
链表问题主要分为三类：
- 链表的处理：链表合并/删除
- 链表反转
- 环形链表

[21. 合并两个有序链表 - 力扣（LeetCode）](https://leetcode.cn/problems/merge-two-sorted-lists/)⭐⭐✨
- 链表处理类问题。中心思想：**处理链表节点间的指针关系**。
- 添加前置dummy节点，方便指针指向。

```ts
// 处理指针的关系
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const res: ListNode = new ListNode()
    let curr = res
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }

    curr.next = list1 || list2
    return res.next
```

```ts
// 递归实现⭐⭐⭐
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2
    if (!list2) return list1
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list2.next, list1)
        return list2
    }
};

```

## 删除节点
[83. 删除排序链表中的重复元素 - 力扣（LeetCode）](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/) ⭐⭐✨

```ts
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let node = head
    while (node && node.next) {
      // 当前节点和下个节点相同，跳过下个节点
        if (node.val === node.next.val) {
            node.next = node.next.next
        } else {
            node = node.next
        }

    }
    return head
};
```

[82. 删除排序链表中的重复元素 II - 力扣（LeetCode）](https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/)

- 前一题的延申。添加前置dummy节点，方便指针指向。

```ts
function deleteDuplicates(head: ListNode | null): ListNode | null {
  // head 前面再添加一个节点
    const dummy = new ListNode(undefined, head)
    let curr = dummy
    while (curr.next && curr.next.next) {
        if (curr.next.val === curr.next.next.val) {
          // 不止2个相同的值，做个记录都跳过
            const val = curr.next.val
            while (curr.next && curr.next.val === val) {
                curr.next = curr.next.next
            }
        } else {
            curr = curr.next
        }
    }
    // 链表起始的节点
    return dummy.next

};
```
[19. 删除链表的倒数第 N 个结点 - 力扣（LeetCode）](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

- 双指针。快慢指针