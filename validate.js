// 封装校验逻辑
var strategies = {
  // 不为空校验
  isNonEmpty: function (value,err) {
    if (value === ''){
      return err;
    }
  },
  // 最小长度校验
  minLength: function (value, len, err) {
    if (value.length < len){
      return err;
    }
  },
  // 手机号码校验
  isMobile: function (value,err) {
    console.log(value);
    if (!/^1(3|4|5|7|8)\d{9}$/.test(value)){
      return err;
    }
  }
};
// Validator 类在这里作为 Context 负责接收用户的请求并委托给 strategy 对象
var Validator = function () {
  this.cache = [];
};
Validator.prototype.add = function (dom, rule, err) {
  var ary = rule.split(':');
  this.cache.push(function(){
    var strategy = ary.shift(); // 取校验策略
    ary.unshift(dom); // 取需要校验的输入值
    ary.push(err);
    return strategies[strategy].apply(dom,ary);
  });
};
var registerForm = {
  userName: 'ahhhhh',
  password: '12334',
  phoneNumber: 18825487025
};
// 用户请求
var validatorFunc = function(){
  var validator = new Validator();
  validator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空');
  validator.add(registerForm.password, 'minLength:6', '密码长度不能少于6位');
  validator.add(registerForm.phoneNumber, 'isMobile', '手机号码格式不正确');
  var errMsg = validator.start(); // 取得校验结果
  return errMsg || '';
};
Validator.prototype.start=function(){
  for(let i = 0,validatorFunc;validatorFunc = this.cache[i++];){
    let msg = validatorFunc();
    if (msg){
      return msg;
    }
  }
};

var errFlag = validatorFunc();
console.log(errFlag);