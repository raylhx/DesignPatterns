// 定义绩效函数
var strategies = {
  'S': function (salary) {
    return salary * 4;
  },
  'A': function (salary) {
    return salary * 3;
  },
  'C': function (salary) {
    return salary * 2;
  },
};

var calculateBonus = function(level,salary){
  return strategies[level](salary);
};

console.log(calculateBonus('S', 10));
console.log(calculateBonus('A', 10));
