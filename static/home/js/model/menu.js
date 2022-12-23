layui.extend({
    popup: 'plugin/popup'
}).define(['popup', 'jquery'], function (exports) {
    //公共菜单模块
    const Popup = layui.popup
    const $ = layui.jquery
    $('body').append(`<ul id="menu-list" class="menu-list">
                    <li class="active"><a href="/view" title="首页" target="_blank" class="p-10 layui-show font-right font-14">首页<i class="iconfont icon-shouye font-grey-light font-15 m-l-2"></i></a> </li>
                    <li><a href="" title="笔记" target="_blank" class="p-10 layui-show font-right font-14">笔记<i class="iconfont icon-biji font-grey-light font-15 m-l-2"></i></a></li>
                    <li><a href="" title="懂美号" target="_blank" class="p-10 layui-show font-right font-14">懂美号<i class="iconfont icon-dongmeihao font-grey-light font-15 m-l-2"></i></a></li>
                    <li><a href="" title="我的" target="_blank" class="p-10 layui-show font-right font-14">我的<i class="iconfont icon-yonghu font-grey-light font-15 m-l-2"></i></a></li>
                </ul>`)
    let menu = new Popup({
        open: '#show-menu',
        direction: 'r',
        content: $('#menu-list')
    })
    exports('menu',menu)
});  