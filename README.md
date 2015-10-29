# requirejs

[API DOC](http://www.requirejs.org/)

### map ?

某个模块存在多个版本时，配置不同模块对其版本的依赖映射

### 定义模块时有参数注入?

当模块不存在依赖时会按顺序注入三个参数，如下，若有依赖就只注入依赖参数
```javascript
    define('base2', function (require, exports, module) {
        console.log('base2 loaded');
        exports.name='wch'; // module.exports.name = 'wch';
    });
```

### 异常处理

+ 单个异常
```javascript
  require(['jquery'], function ($) {
    //Do something with $ here
  }, function (err) {
    //The errback, error callback
    //The error has a list of modules that failed
    var failedId = err.requireModules && err.requireModules[0];
    if (failedId === 'jquery') {
        //undef is function only on the global requirejs object.
        //Use it to clear internal knowledge of jQuery. Any modules
        //that were dependent on jQuery and in the middle of loading
        //will not be loaded yet, they will wait until a valid jQuery
        //does load.
        requirejs.undef(failedId);

        //Set the path to jQuery to local path
        requirejs.config({
            paths: {
                jquery: 'local/jquery'
            }
        });

        //Try again. Note that the above require callback
        //with the "Do something with $ here" comment will
        //be called if this new attempt to load jQuery succeeds.
        require(['jquery'], function () {});
    } else {
        //Some other error. Maybe show message to the user.
    }
  });
```
+ 全局处理
```javascript
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

### 文件合并后，配置文件不变, 可以?

保证所有的模块都应该在require之前已经加载就不会出错

### urlArg?

用于指定请求时的额外参数