var slickArgs = {
    dots: true,
    arrows: true,
    mobileFirst: true,
   };
   
$(window).on('load resize orientationchange', function() {
        $('.single-item').each(function(){
            var $carousel = $(this);
            
            if ($(window).width() >= 992) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            }
            else{
                if (!$carousel.hasClass('slick-initialized')) {
                    $carousel.slick(slickArgs);
                }
            }
        });
});