people = ['Janak', 'Elon', 'Joy','mallik', 'Janak', 'Rajveer']
people.reverse()

print(people)

people = ['Janak', 'Elon', 'joy','mallik', 'Janak', 'Rajveer']
people.sort()
print(people)

people.sort(key=lambda name: name.lower())
print(people)

people.sort(key=lambda name: len(name))
print(people)

people = ['Janak', 'Elon', 'joy','mallik', 'Janak', 'Rajveer']
people.sort(key=lambda name: len(name), reverse=True)
print(people)

people = ['Janak', 'Elon', 'joy','mallik', 'Janak', 'Rajveer']
people.sort(reverse=True)
print(people)