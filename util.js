module.exports={
    method:Function.prototype.method=function(name,Func){
       this.prototype[name] = Func;
        return this;
       
    }
}