let typeOf = typeof {a: 1};
console.log(typeOf)

var _undefind = 'Hello';
console.log(_undefind);


var x = 4;
var y = 2;

console.log(x+=y);// x = x+y (-)
console.log(x*=y);// x = x*y

var a = 3;
var b = '22';
var c = parseInt(b);

console.log(a+=c);


function test(a) {
    if (a) {
        console.log(`Log a : `, a === 2 ? true : false);
    }
}

test(2);


console.log(`round`,Math.round(2.4)); // làm tròn 1 số
console.log(`pow` , Math.pow(2, 5));// lũy thừa của 2 là 5

console.log(`random : ` , Math.round((Math.random() )* 5));
console.log(`floor : ` , Math.floor((Math.random() )* 5));
