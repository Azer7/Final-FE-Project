// $(document).ready(function () {

//     $(document).ready(function () {
//         $(".owl-carousel").owlCarousel();
//     });




$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:5,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

});



var portfolioIsotope = function () {
    if ($().isotope) {
        var $container = $('.portfolio-content');
        $container.imagesLoaded(function () {
            $container.isotope({
                itemSelector: '.portfolio-item',
                transitionDuration: '1s'
            });
        });

        $('.portfolio-filter li').on('click', function () {
            var selector = $(this).find("a").attr('data-filter');
            $('.portfolio-filter li').removeClass('active');
            $(this).addClass('active');
            $container.isotope({
                filter: selector
            });
            return false;
        });
    };
}

    // $('.dropdown').hover(function () {
    //    $(this).addClass("show");
    //    $(this).find(".dropdown-menu").addClass("show");
    // },function(){
    //     $(this).removeClass("show");
    //     $(this).find(".dropdown-menu").removeClass("show");
    // });



    // $(window).scroll(function() {
    //     console.log($(this).scrollTop());
    //     if($(this).scrollTop()>10) {
    //         $( "#headerA" ).addClass("scrolled2");
    //     } else if($(this).scrollTop()<10) {
    //         $( "#headerA" ).removeClass("scrolled2");
    //     }
    // });

