# requirejs
    [API DOC](http://www.requirejs.org/)
#### 定义模块时有参数注入?
    当定义一个模块时，没有任何依赖时，会按顺序注入三个参数,有依赖时只注入依赖参数
```
define('base2', function (require, exports, module) {
    console.log('base2 loaded');
    exports.name='wch'; // module.exports.name = 'wch'; = return {name:'wch'}
});
```

#### map 什么意思?
    map 是当工程中某个模块存在不同版本时，映射模块对应的版本时使用

#### urlArgs?
  Extra query string arguments appended to URLs that RequireJS uses to fetch resources.

#### 模块文件可以合并？
 可以,合并之后的文件需要在require使用到之前加载

#### 错误处理
    单个处理
    `require([],function(){},function(err){ 这里处理异常})`
    全局处理
    ```
    requirejs.onError = function (err) {
        console.log(err.requireType);
        if (err.requireType === 'timeout') {
            console.log('modules: ' + err.requireModules);
        }

        throw err;
    };
    ```
### 怎么对依赖分组?
    不可以
### text、css 怎么依赖?
<https://github.com/requirejs/text>





