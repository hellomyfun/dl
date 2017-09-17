(function () {
    // 导航条
    $('.nav_list li a').hover(function () {
        $(this).css('transition','0.5s')
        $(this).css('background','#670201');
    },function () {
        $(this).css('background','#bc9b58');
    })
    $('.navbar-brand').hover(function () {
        $(this).css('background','#670201');
        $(this).css('color','#ffffff');
        $(this).css('transition','0.5s')
    },function () {
        $(this).css('background','#bc9b58');
    })
    //banner
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop:true,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 600,
        autoplay : 5000,
    });
}());