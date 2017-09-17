(function () {
    var mySwiper2 = new Swiper ('.swiper-container2', {
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        speed: 600,
        autoplay : 3000,
    })
    var swiper = new Swiper('.swiper-container3', {
        pagination: '.swiper-pagination',
        loop:'true',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        },
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
}());
