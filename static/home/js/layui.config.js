//config的设置是全局的
layui.config({
    base: '/static/home/js/' //根目录
}).extend({ //模块加载名称
    menu: 'model/menu',         //公共侧边栏模块
    fixture: 'model/fixture',   //固定公共按钮模块
});
layui.use(['fixture'], function () {

})