// q. get only names
const users = [
    {
        id: 1,
        name: "Ali",
        role: 1,
    },
    {
        id: 2,
        name: "Khan",
        role: 0,
    },
    {
        id: 3,
        name: "Ahsan",
        role: 1,
    }
]

// const names = []
// for (let i = 0; i < users.length; i++) {
//     names.push(users[i].name)
// }
// const names = []
// users.forEach(user => {
//     names.push(user.name)
// })
const names = users.map((user) => user.name)
console.log(names)