/**
 * Created by wid on 2015/10/29.
 */
console.log('come in index');
/**
 * 在require之前就已经加载的就不会再次加载，这样就可以将多个模块合并到一个文件里了
 */
define('base2', function (require, exports, module) {
    console.log('base2 loaded');
    exports.name = 'wch'; // module.exports.name = 'wch';
});
require(['text!../../assets/js/text.html'], function (html) {
    console.log(html);
});
require(['base', 'base2', 'base3'], function (base, base2) {
    console.log('index loaded', base2);
});