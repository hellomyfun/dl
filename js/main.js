(function () {
    // 导航条
    $('.nav_list li a').hover(function () {
        $(this).css('background','#7F0A03');
    },function () {
        $(this).css('background','#212121');
    })
    $('.navbar-brand').hover(function () {
        $(this).css('background','#7F0A03');
        $(this).css('color','#ffffff');
    },function () {
        $(this).css('background','#212121');
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