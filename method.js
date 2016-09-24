var a={member:true};
var b=Object.create(a);
console.log(`b.member=${b.member}`) //true
console.log(a.hasOwnProperty('member')) //true
console.log(b.hasOwnProperty('member'))//false