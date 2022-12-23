layui.extend({
    beat: 'plugin/beat'
}).define(['jquery', 'beat'], function (exports) {
    const $ = layui.jquery
    const Beat = layui.beat
    const fixture = {
        init: function () {
            this.scrollTopShow()
            this.consultGlobal()
        },
        //返回顶部效果
        scrollTopShow: function () {
            let backTop = $('.back-top')
            backTop.on('click', function () {
                $('html,body').animate({
                    scrollTop: 0
                })

            })
            $(window).scroll(function (e) {
                let top = $(this).scrollTop()
                if (top >= 200) {
                    backTop.show()
                } else if (top < 20) {
                    backTop.hide()
                }
            });
        },
        //咨询按钮数字跳动
        consultGlobal: function () {
            new Beat({
                element: '.consult-global',
                offsetLr: -10,
                offsetT: -8,
                color: '#e93b3b'
            })
        }
    }
    fixture.init()
    exports('fixture', {});
});  