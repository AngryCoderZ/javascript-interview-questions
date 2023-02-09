//  q. get only those name whose role==1   
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
// const names = [];

// for(let i = 0; i<users.length; i++){
// users[i].role === 1 && names.push(users[i].name)
// }
// console.log(names)

const names = users.filter(user=>user.role === 1)
                .map(user=>user.name)
console.log(names)