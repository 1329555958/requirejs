/**
 * Created by wid on 2015/10/28.
 */
require.config({

    baseUrl: "/assets/js/", //若配置的是相对路径,就是相对于此，不是/开头的都是相对路径
    /**
     *配置路径
     *不应该包含扩展名，可以配置目录
     */
    paths: {
        "some": "some/v1.0"
    },
    /*配置deps、定义模块是没有指定依赖的需要配置
    exports
    、init等*/
    shim:{
        'jquery.scroll': ['jquery'], //只有依赖时可用直接写数组
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    /*2.1.10 加入的新特性，多个模块可以从一个文件中加载*/
    bundles: {
        'base': ['base', 'base3'],
        'secondary': ['text!secondary.html']
    },
    waitSeconds: 15 //超时时间
});