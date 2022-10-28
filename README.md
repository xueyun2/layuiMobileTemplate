# 公共CSS说明文档

[公共CSS文件说明](./css.md)

# 文件目录结构说明

- `static`                          #静态资源目录
  - `css`                           
    - `lib`                         #第三方库`css`,或者`js`插件中使用的样式.
    - `public`                      #公共样式
  - `img`                           #图片资源
  - `js`
    - `layui`                       #`layui`框架
    - `lib`                         #第三方插件
    - `public`                      #公共模块`js`
    - `layui.config.js`             #`layui`全局配置文件
- `view`                            #视图文件,存放`html`模板

# 页面加载样式说明

```html
    <!-- 公共样式部分 -->
    <link rel="stylesheet" href="/static/js/layui/css/layui.css">
    <link rel="stylesheet" href="/static/css/public/public.css">
    <!-- 当前页面部分 -->
    <link rel="stylesheet" href="/static/css/index/index.css">
    <!-- 当前页面使用插件样式 -->
    <link rel="stylesheet" href="/static/css/lib/swiper.min.css">

    <!-- 全局js -->
    <script src="/static/js/layui/layui.js"></script>
    <script src="/static/js/layui.config.js"></script>
    <!-- 当前页面js -->
    <script src="/static/js/index/index.js"></script>
```

# `layui`模块加载说明

## 定义一个layui模块

`login.js`

> 如果只需要加载默认执行可以不返回接口,直接在函数中编写效果代码.在`layui.use('login',function(){})`默认执行`login.js`中的代码.

```JavaScript
layui.define(function(exports){ 
/**
 * 编写模块代码
 * ...
 */
/**
 * exports()函数
 * @param string 接口名称 
 * @param object 返回对象或函数
 */
exports('mymod', {});
}); 
```

`layui.config.js`

```JavaScript
//config的设置是全局的,只加载全局类的模块.
layui.config({
    base: '/static/js/' //根目录
}).extend({ //模块加载名称
    login: 'public/login' //加载全局登录弹窗模块
}).use(['login'], function () {
    //在use中加载login全局模块
})
```

## 页面中加载模块

定义点评模块:`comment.js`

```JavaScript

layui.define(function(exports){ 
    let obj = {
        sendComment:function(text){
            //发送点评
        }
    }
exports('comment', obj);
}); 

```
在`index`页面中引入`comment.js`模块

`index.js`

```JavaScript
layui.extend({ //模块加载名称
    comment: 'index/comment' //加载全局登录弹窗模块
}).use(['comment'],function(exports){ 
    let comment = layui.comment
    comment.sendComment('发送点评函数')
}); 

```


