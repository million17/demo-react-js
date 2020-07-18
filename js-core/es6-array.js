let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let listItem = [
    {
        id : 1,
        name : 'Product 1',
        price : 599,
        status : true,
    },
    {
        id : 2,
        name : 'Product 1',
        price : 599,
        status : true,
    },
    {
        id : 3,
        name : 'Product 1',
        price : 599,
        status : true,
    }
]
let numbers = arrNumber.filter(
    (number) =>
        number % 2 == 0
);

let lists = listItem.map(
    (item) => item.id
)

let findIndex = arrNumber.findIndex((number) => number === 100);

console.log(`number ` , numbers);
console.log(`item` , lists);
console.log(`Find `, findIndex)
