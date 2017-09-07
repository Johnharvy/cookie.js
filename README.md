# Cookie.js——小巧简单的cookie设置器
#### 导语
>[cookie.js](https://johnharvy.github.io/2017/09/07/cookie-js/) 是一个用来处理cookie数据管理的函数库，非常简单，一看就会用，希望你会用上它。


## cookie.js的用法

### 安装
    npm i commom-cookie

### 设置cookie项
    cookie.set(pro,value,[,options])

 options可选，例如：
     
     cookie.set('name','cookie.js',{path:'/',expires:'1',domain:'...',secure:true})    
### 获取cookie某项的值
    cookie.get(pro)    

### 获取所有cookie的值
    cookie.getCookies()

### 删除cookie某项（非同域不能清除）
    cookie.clear(pro)

### 删除cookie所有的项（非同域不能清除）  
    cookie.clearCookies()