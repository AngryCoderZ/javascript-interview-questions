// merge all arrays into arr1 
// remove duplicate

let arr1 = [1];
let arr2 = [2, 3];
let arr3 = [1, 4, 5, 6];

arr1.push(...arr2, ...arr3)
console.log(arr1)


// const removeDuplicate = arr1.filter((num,index)=>arr1.indexOf(num) === index)
// console.log(removeDuplicate)

// const unique = []
// const removeDuplicate = arr1.forEach(item => {
//     if (!unique.includes(item)) {
//         unique.push(item)
//     }
// })
// console.log(unique)

console.log([...new Set(arr1)])
