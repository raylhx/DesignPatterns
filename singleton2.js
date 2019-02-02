var CreateDiv = function(html){
  this.html = html;
  this.init();
};
CreateDiv.prototype.init = function () { 
  var div = document.createElement('div');
  div.innerHTML = this.html;
  document.body.appendChild(div);
};
// 代理
var proxy = (function(){
  var instance;
  return function (html) {
    if (!instance){
      instance = new CreateDiv(html);
    }
    return instance;
  }
})();
var a = new proxy('hhh');
var b = new proxy('hhhh');
console.log(a === b);

var user = (function(){
  var __name = 'sven',
  __age = 29;
  return {
    getUserInfo: function(){
      return __name + '-' + __age;
    }
  }
})();