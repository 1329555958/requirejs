/**
 * Created by wid on 2015/10/29.
 */
console.log('base loaded');
define('base3', function (require, exports, module) {
    console.log('base3 loaded');
    exports.name='wch'; // module.exports.name = 'wch';
});