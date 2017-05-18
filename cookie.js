var cookie = (function(){
      this.baseInfor = {
          v:1.0,
          author:"剑英"
      }

      //获取cookie对象
      this.getCookies  = function(){
          var _cookie = document.cookie;
          var _arr = _cookie.split("; ");
          var _ck = Object.create(null);

          _arr.forEach(function(item){
          if(item.indexOf("=") > -1){
                  var _z = item.split("=");
                  _ck[_z[0]] = _z[1];
                }
          });
          return _ck;
      }

      //获取相应cookie项的值
      this.get = function(pro){
        var _p = this.getCookies();
        _p = _p[pro];
        if(typeof _p == "undefined"){
            console.warn("cookie doesn't have the property.");
        }else{
            return _p;
        }
     }

      //设置cookie相应项,set(pro,val[,options]) [,options]为可选参数
      this.set = function(pro,val,et){
          if(!val) {console.error("has no value");return;}
          var _a = 1000 * 60 * 60 * 24 * 10/10, now = new Date();
          if(typeof et === "object"){
              var v,p,e,d,s;
              v = pro + "=" + decodeURIComponent(val);
              p = et.path?  "; path=" + et.path : "" ;
              e = (typeof et.expires === "number" && et.expires > 0)? "; expires="+ (now.setTime( now.getTime() + _a * et.expires ) && (now.toGMTString()))  : "";
              d = et.domain?  "; domain=" + et.domain : "";
              s = et.secure?  "; secure":"";
              return document.cookie = [v,p,e,d,s].join("");

          }else{
             return document.cookie = pro + "=" + val;
          }

      }


      //删除cookie相应项
      this.clear = function(pro){
           var _p = this.getCookies();
           _p = _p[pro];
           if(typeof _p == "undefined"){
               console.warn("cookie doesn't have the property.");
           }else{
               document.cookie = pro + "=0; expires=Thu, 16 Mar 1992 00:00:00 GMT";
           }
      }


      //清空cookie
      this.clearCookies = function(path){
          var _arr = document.cookie.split("; ");
          _arr.forEach(function(item){
            if(path) document.cookie = item + "; expires=Thu, 16 Mar 1992 00:00:00 GMT; path=" + path ;
            else  document.cookie = item + "; expires=Thu, 16 Mar 1992 00:00:00 GMT";
        });
    }

    return this;
}).call(Object.create(null));

//支持同步与异步模块化加载方式
if (typeof module != "undefined" && module !== null && module.exports) module.exports = cookie;
else if (typeof define === "function" && define.amd) define(function() {return cookie});