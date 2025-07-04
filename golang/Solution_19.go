/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
  type ListNode struct {
      Val int
      Next *ListNode
  }
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	dummy:=&ListNode(Next:head)
	fast,slow:=dummy,dummy
	for i:=0;i<=n;i++{
		if fast==nil{
			return head
		}
		fast=fast.Next
	}
	for fast!=nil{
		fast=fast.Next
		slow=slow.Next
	}
	if slow.Next!=nil{
		slow.Next=slow.Next.Next
	}
	return dummy.Next
}