layui.extend({
    swiper: 'lib/swiper',
}).use(['jquery', 'swiper', 'menu'], function () {
    const $ = layui.jquery
    const Swiper = layui.swiper
    const note = {
        init: function () {
            this.swiperTopic() //轮播图
        },
        //轮播图
        swiperTopic: function () {
            let swiper = new Swiper('#home-swiper', {
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    bulletClass: 'my-bullet',
                    bulletActiveClass: 'active',
                }
            });
        }

    }
    note.init()

})