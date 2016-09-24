//作用域

var foo=function(){
    var a=3,b=5;
    var bar=function(){
        var b=7,c=11;
        a+=b+c;
        console.log('a=%s,b=%s,c=%s',a,b,c);

    };
    try {
        console.log('a=%s,b=%s,c=%s', a, b, c);
    } catch (error) {
        console.log(error);
    }
    bar();
    console.log('a=%s,b=%s', a, b);
}

foo();

