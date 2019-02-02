// 绩效的计算规则封装在对应的策略里
var performanceS = function(){

};
performanceS.prototype.calcluate = function (salary) {
  return salary * 4;
};

var performanceA = function(){

};
performanceA.prototype.calcluate = function (salary) {
  return salary * 3;
};

var performanceB = function(){

};
performanceB.prototype.calcluate = function (salary) {
  return salary * 2;
};

// 定义奖金类Bonuss
var Bonus = function () {
  this.salary = null; // 原始
  this.strategy = null;
}
Bonus.prototype.setSalary = function (salary) {
  this.salary = salary;
}
Bonus.prototype.setStrategy = function(strategy){
  this.strategy = strategy;
}
Bonus.prototype.getBonus = function(){
  return this.strategy.calcluate(this.salary);
  // 这里的calcluate方法指向了绩效的cal方法
}
var bonus = new Bonus();
bonus.setSalary(10);
// bonus 对象本身并没有能力进行计算，
// 而是把请求委托给了之前保存好的策略对象：
bonus.setStrategy(new performanceS());
console.log(bonus.getBonus());