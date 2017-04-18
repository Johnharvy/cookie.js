var cookie = (function(){

      //获取cookie对象
      this.getCookie  = function(){
          var _cookie = document.cookie;
          var _arr = _cookie.split("; ");
          var _ck = Object.create(null);
          for(var x of _arr){
              if(x.indexOf("=") > -1){
                  var _z = x.split("=");
                  _ck[_z[0]] = _z[1];
              }
          }
          return _ck;
      }

      //设置cookie相应项,mountDays单位为天数,默认为一个会话周期,即退出当前浏览器时消失，
      //path表示表示哪些路径下的文件有权限读取该cookie
      this.setCookie = function(pro,val,mountDays,path){
          if(typeof val === "object")  {
              console.error("cookie property can't be object.");
              return;
          }
          if(mountDays) { //存在mountDays
              if (typeof  mountDays != "number" && mountDays != "") {
                  console.error("the parameter must be number");
                  return;
              } else if (mountDays === "") { //mountDays为""
                  if (path) document.cookie = pro + "=" + val + ";path=" + path;
                  else  document.cookie = pro + "=" + val;
                  return;
              }

              var _a = 1000 * 60 * 60 * 24 * 10/10;
              var _end = mountDays * _a;
              var now = new Date();
              now.setTime(now.getTime() + _end);
              if(path) document.cookie = pro + "=" + val + ";expires=" + now.toGMTString() + ";path=" + path;
              document.cookie = pro + "=" + val + ";expires=" + now.toGMTString();
              return;
          }
          document.cookie = pro +"="+ val;
      }

      //删除cookie相应项
      this.removeCookie = function(pro){
           var _p = this.getCookie();
           _p = _p[pro];
           if(typeof _p == "undefined"){
               console.warn("cookie doesn't have the property.");
           }else{
               document.cookie = pro + "=0;expires=Thu, 01 Jan 1970 00:00:00 GMT";
           }

      }

      //获取相应cookie项的值
     this.getCookiePro = function(pro){
         var _p = this.getCookie();
         _p = _p[pro];
         if(typeof _p == "undefined"){
             console.warn("cookie doesn't have the property.");
         }else{
            return _p;
         }
     }


      //清空cookie
      this.clearCookie = function(){
          var _arr = document.cookie.split(";");
          for(var x in _arr){
              document.cookie = x + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
          }
      }
    return this;
}).call(Object.create(null));
console.log("345");


console.log(123);

//支持同步与异步模块化加载方式
if (typeof module != "undefined" && module !== null && module.exports) module.exports = cookie;
else if (typeof define === "function" && define.amd) define(function() {return cookie});