# serve as ordered sequences, allowing for efficient storage and retrieval of data elements
# Lists offer unparalleled flexibility, accommodating various data types within a single structure

# Index-Based Access, This enables rapid lookup and manipulation of specific elements within the list, critical for algorithmic efficiency.

# Mutability: allowing for dynamic modification of elements after instantiation. This capability enables real-time updates and alterations to the dataset, fostering adaptability in response to changing requirements.

# dynamically resize to accommodate the addition or removal of elements. dynamic sizing ensures optimal memory utilization and eliminates the need for predefined capacity constraints.

# Lists support appending, inserting, removing, and concatenating elements.

# Iterative Processing: facilitated by built-in constructs like loops and comprehensions. This iterative processing enables seamless traversal of lists, enabling developers to perform operations on each element systematically.

# Foundation for Advanced Data Structures and more sophisticated data structures like stacks, queues, and linked lists.

people: list[str] = ['Janak', ['ram', 'rimi'], 'eimi', 'Joy']
people.append('newi')
print(people)

# people.clear()
# print(people)

copyPeople: list[str] = people.copy()

copyPeople.remove('eimi')
print(people)
print(copyPeople)

# but there is a thing
people: list[str] = ['Janak', ['ram', 'rimi'], 'eimi', 'Joy']
print(people)
copyPeople: list[str] = people.copy()

copyPeople[1][1] = 'Shaym'
print(people)
print(copyPeople)

# count
people: list[str] = ['Janak', 'Elon', 'Joy', 'Janak']

janaks = people.count('Janak')
elons = people.count('Elon')
print(janaks)
print(elons)
print(type(people))

people = ['Janak', 'Elon', 'Joy', 'Janak']
newPeople = ['dhaka', 'NYC', 'Mallik']

people.extend(newPeople)
print(people)

print(type(people))

people.extend([newPeople])
print(people)
# output: ['Janak', 'Elon', 'Joy', 'Janak', ['dhaka', 'NYC', 'Mallik']]

print(people.index('Mallik'))

# the fix for the mallik is not in the list
people = ['Janak', 'Elon', 'Joy', 'Janak']
newPeople = ['dhaka', 'NYC', 'Mallik']

people.extend([newPeople])
print(people)
# Output: ['Janak', 'Elon', 'Joy', 'Janak', ['dhaka', 'NYC', 'Mallik']]

# Access the sublist and find the index of 'Mallik' within the sublist
sublist_index = people.index(newPeople)
sublist = people[sublist_index]
index = sublist.index('Mallik')

print(index)
# Output: 2

people = ['Janak', 'Elon', 'Joy', 'Janak']

people.insert(2, 'helloHola')
people.insert(-10000, 'helloHola')
people.insert(10000, 'helloHola')
print(people)

poped = people.pop()
print(people)

poped = people.pop(3)
print(people)
print(poped)

rem = people.remove('Janak')
print(people)
print(rem)
# output:
# ['helloHola', 'Elon', 'helloHola', 'Joy', 'Janak', 'helloHola']
# None

# this gives error as andrew doesnt exist in the list
people.remove('andrew')

people = ['Janak', 'Elon', 'Joy', 'mallik', 'Janak', 'Rajveer']
people.reverse()

print(people)

people = ['Janak', 'Elon', 'joy', 'mallik', 'Janak', 'Rajveer']
people.sort()
print(people)

people.sort(key=lambda name: name.lower())
print(people)

people.sort(key=lambda name: len(name))
print(people)

people = ['Janak', 'Elon', 'joy', 'mallik', 'Janak', 'Rajveer']
people.sort(key=lambda name: len(name), reverse=True)
print(people)

people = ['Janak', 'Elon', 'joy', 'mallik', 'Janak', 'Rajveer']
people.sort(reverse=True)
print(people)

myList = ['banana', True, 32, 'apple']
print(myList)

# IndexError: list index out of range
item = myList[34]
print(item)

item = myList[-2]
print(item)

for i in myList:
    print(i)

if 'banana' in myList:
    print('yes')
else:
    print('no')

print(len(myList))

myList.append('toy')
print(myList)

myList.insert(1, 'janak')
print(myList)

item = myList.pop()
print(item)
print(myList)

item = myList.remove(32)
print(item)
print(myList)

# ValueError: list.remove(x): x not in list
item = myList.remove('laptop')
print(item)
print(myList)

# slicing
myList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
a = myList[1:5]
a = myList[1:]
a = myList[:5]
a = myList[::1]
a = myList[1::2]
a = myList[::-1]
print(a)
