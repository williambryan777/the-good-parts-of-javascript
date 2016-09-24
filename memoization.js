var fibonacci = function () {
    var memo=[0,1];
    var fib=function(n){
        var result=memo[n];
        if(typeof result !=='number'){
            result=fib(n-1)+fib(n-2);
            momo[n]=result;
        }
        return result;
    }
    return fib;
}();


var memoizer=function(memo,formula){
    var recur=function(n){
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fibonacci(n - 1) + fibonacci(n - 2);
            momo[n] = result;
        }
        return result;
    };
    return recur;
}

var f1=memoizer([0,1],function(recur,n){
    return recur(n-1)+recur(n-2);
})
var f1Result=f1(10)
console.log('f1Result',f1Result);