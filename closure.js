//闭包

var myObject = (function () {
    var value = 0;
    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
            return value;
        },
        getValue: function () {
            return value;
        }
    }
}());

console.log(myObject.increment(1));//undefine
console.log(myObject.getValue())// 1


var quo=function(status){
    return {
        get_status:function(){
            return status;
        }
    }
}

var myQuo=quo('amazed');

console.log(myQuo.get_status());
quo.sayHi=function(){
    consol.log('hi')  
}
var q2=Object.create(quo(33));
console.log(q2.get_status())
q2.sayHi;



