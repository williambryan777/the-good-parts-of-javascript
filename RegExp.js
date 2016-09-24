require('./util');
String.method('mystrim',function(){
    return this.replace(/^\s+|\s+$/g,'');
})


var str='   helloword    ';
var replaceStr=str.mystrim();
console.log(replaceStr.length)
console.log(replaceStr)