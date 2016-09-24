//柯里化
// Function.method('curry', function () {
//     var slice = Array.prototype.slice,
//         args = slice.apply(arguments),
//         that = this;
//     return function () {
//         that.apply(null, args.concat(slice.apply(arguments)));
//     };
// })

Function.prototype.curry = function () {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    return function () {
        that.apply(null, args.concat(slice.apply(arguments)));
    };

}

Function.prototype.SayHello=function(){
    console.log('hello world')
}

function SayHi(){
    console.log('hi tom...')
}

var add = function (value) {
    return value += typeof value === 'number' ? 1 : 1;
}

var res = add.curry()

console.log(res())
add.SayHello();
SayHi.apply(add);

