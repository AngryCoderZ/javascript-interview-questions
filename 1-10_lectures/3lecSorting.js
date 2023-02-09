//  q. sort users by age & show names only

const users = [
    {
        id: 1,
        name: "Ali",
        role: 1,
        age: 45,
    },
    {
        id: 2,
        name: "Khan",
        role: 0,
        age: 20,
    },
    {
        id: 3,
        name: "Ahsan",
        role: 1,
        age: 40
    }
]

const names = users.sort((a, b) => a.age > b.age ? -1 : 1)
    .filter(user => user.role === 1)
    .map(user => user.name)
console.log(names)