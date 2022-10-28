//config的设置是全局的
layui.config({
    base: '/static/js/' //根目录
}).extend({ //模块加载名称
    swiper: 'lib/swiper'    //第三方模块标记文档地址->文档：https://www.swiper.com.cn/api/index.html
});
layui.use([], function () {

})