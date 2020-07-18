let arr = ['Blue', 'Red', 'Yellow', 'Pink'];
let arrNum = [1,233,5,6,221,0];
//Sort sắp xếp theo alphabet
//Nếu muốn sắp xếp kiểu số thì dùng sort(function(a,b) return a -b);
console.log(`Sort first`, arrNum.sort());

console.log(`Sort`,arrNum.sort(function (a, b) {
    return a - b
}));
console.log(`Sort reverse`, arr.reverse());
