
 "use strict"

/**
 *  name : common-cookie
 *  Deal with transactions about cookie 
 */
  var cookie = (function(){
      this.baseInfor = {
          name : "common-cookie",
          descrption : "Deal with transactions about cookie",
          author:"恒星"
      }

      /**
       *   Get the cookie object
       *   @return {Object} 
       */
      this.getCookies  = function(){
           var _cookie = document.cookie,
               _arr = _cookie.split("; "),
               _ck = Object.create(null);
               _arr.forEach(function(item){
                  if(item.indexOf("=") > -1){
                      var _z = item.split("=");
                      _ck[_z[0]] = _z[1];
                   }
           });
           return _ck;
      }

      
      /**
       *  Get the value of the corresponding cookie item
       *  @param {String} key
       *  @return {String}
       */
      this.get = function(key){
          var _p = this.getCookies();
              _p = _p[key];
          if(typeof _p === "undefined"){
              console.warn("cookie doesn't have the property as '" + key + "'"  );
          }else{
              return _p;
          }
      }

      /**
       *  Setting the cookie corresponding item
       *  @param {String} key
       *  @param {String} val 
       *  @param {Object} et 
       *    - @param {String} path
       *    - @param {Number} expires
       *    - @param {String} domain
       *    - @param {Boolean}  secure
       */
      this.set = function(key,val,et){
          if(typeof val === 'undefined' ||  val  === '') {console.error("value can't be undefined or empty!");return;}
          var _a = 1000 * 60 * 60 * 24 * 10/10, now = new Date();
          if(typeof et === "object"){
              var v,p,e,d,s;
              v = key + "=" + decodeURIComponent(val);
              p = et.path?  "; path=" + et.path : "" ;
              e = (typeof et.expires === "number" && et.expires > 0)? "; expires="+ (now.setTime( now.getTime() + _a * et.expires ) && (now.toGMTString()))  : "";
              d = et.domain?  "; domain=" + et.domain : "";
              s = et.secure?  "; secure":"";
              return document.cookie = [v,p,e,d,s].join("");
          }else{
             return document.cookie = key + "=" + val;
          }

      }

      /**
       *  Delete the cookie corresponding item under the current domain name
       *  @param {String} key
       */
      this.clear = function(key){
          var _p = this.getCookies();
              _p = _p[key];
          if(typeof _p === "undefined"){
              console.warn("cookie doesn't have the property.");
          }else{
              document.cookie = key + "=0; expires=Thu, 16 Mar 1992 00:00:00 GMT";
          }
      }


      /**
       *  Delete all cookie 
       *  @param {String} path
       */
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