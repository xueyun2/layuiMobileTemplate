layui.extend({
    swiper: 'lib/swiper'
}).use(['jquery', 'swiper'], function () {
    const $ = layui.jquery
    const Swiper = layui.swiper
    let swiper = new Swiper('#home-swiper', {
        effect: 'coverflow',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'my-bullet',
            bulletActiveClass: 'active',
        }
    });
    console.log('index', '首页独立的页面js')
})