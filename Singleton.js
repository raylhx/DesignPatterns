// 单例模式
// 用一个变量来标志当前是否已经为某个类创建过对象，如果是，则在下一次获取该类的实例时，直接返回之前创建的对象
var Singleton = function(name){
  this.name = name;
  this.instance = null;
};
Singleton.prototype.getName = function(){
  console.log(this.name);
};
Singleton.getInstance = function(name){
  if (!this.instance){
    this.instance = new Singleton(name);
  }
  return this.instance;
};
var a = Singleton.getInstance('hhh');
var b = Singleton.getInstance('hhhh');
console.log(a === b)
