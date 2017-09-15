(function () {
    window.onresize = function(){
        resize();
    };
    function resize() {
        var width = document.body.clientWidth
        if(width<800){
            // $('.swiper-container').css('height','300px');
        }else {
            // $('.swiper-container').css('height','700px');
        }
    }
}());