/** EasyWeb iframe v3.1.2 date:2019-06-02 License By http://easyweb.vip */

// 以下代码是配置layui扩展模块的目录，每个页面都需要引入
layui.config({
    version: true,
    base: '/static/admin/lib/'
}).extend({
    admin: "extend/admin",
    // formSelects: 'formSelects/formSelects-v4',
    // treetable: 'treetable-lay/treetable',
    // dropdown: 'dropdown/dropdown',
    // notice: 'notice/notice',
    // step: 'step-lay/step',
    // dtree: 'dtree/dtree',
    // citypicker: 'city-picker/city-picker',
    // tableSelect: 'tableSelect/tableSelect',
    // cropper: 'cropper/cropper',
    // zTree: 'zTree/zTree'
}).use(['layer', 'admin'], function () {
    var $ = layui.jquery;
    var layer = layui.layer;
    var admin = layui.admin;

    // 移除loading动画
    setTimeout(function () {
        admin.removeLoading();
    }, window == top ? 600 : 100);

});