class Node:
  def __init__(self, key):
    self.left = None
    self.right = None
    self.val = key

def insertBST(head, key):
  if head is None:
    return Node(key)

  if head.val == key:
    return head

  if head.val < key:
    head.right = insertBST(head.right, key)
  else:
    head.left = insertBST(head.left, key)

  return head

# def inorderBST(head):
#   if not head:
#     return

#   inorderBST(head.left)
#   print(head.val, end=" ")
#   inorderBST(head.right)

def preorderBST(head):
  if head == None:
    return
  
  print(head.val, end=" ")
  preorderBST(head.left)
  preorderBST(head.right)

# def postorderBST(head):
#     if head:
#         postorderBST(head.left)
#         postorderBST(head.right)
#         print(head.val, end=" ")


r = Node(50)
r = insertBST(r, 30)
r = insertBST(r, 20)
r = insertBST(r, 40)
r = insertBST(r, 70)
r = insertBST(r, 60)
r = insertBST(r, 80)

# Print inorder traversal of the BST
preorderBST(r)
