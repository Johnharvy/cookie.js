"use strict";var cookie=function(){return this.baseInfor={name:"common-cookie",descrption:"Deal with transactions about cookie",author:"恒星"},this.getCookies=function(){var e=document.cookie.split("; "),t=Object.create(null);return e.forEach(function(e){if(-1<e.indexOf("=")){var o=e.split("=");t[o[0]]=o[1]}}),t},this.get=function(e){var o=this.getCookies();if(void 0!==(o=o[e]))return o;console.warn("cookie doesn't have the property as '"+e+"'")},this.set=function(e,o,t){if(void 0!==o&&""!==o){var i,n,r,c,s,u=new Date;return"object"==typeof t?(i=e+"="+decodeURIComponent(o),n=t.path?"; path="+t.path:"",r="number"==typeof t.expires&&0<t.expires?"; expires="+(u.setTime(u.getTime()+864e5*t.expires)&&u.toGMTString()):"",c=t.domain?"; domain="+t.domain:"",s=t.secure?"; secure":"",document.cookie=[i,n,r,c,s].join("")):document.cookie=e+"="+o}console.error("value can't be undefined or empty!")},this.clear=function(e){var o=this.getCookies();void 0===(o=o[e])?console.warn("cookie doesn't have the property."):document.cookie=e+"=0; expires=Thu, 16 Mar 1992 00:00:00 GMT"},this.clearCookies=function(o){document.cookie.split("; ").forEach(function(e){document.cookie=o?e+"; expires=Thu, 16 Mar 1992 00:00:00 GMT; path="+o:e+"; expires=Thu, 16 Mar 1992 00:00:00 GMT"})},this}.call(Object.create(null));"undefined"!=typeof module&&null!==module&&module.exports?module.exports=cookie:"function"==typeof define&&define.amd&&define(function(){return cookie});