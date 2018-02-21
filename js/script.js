$(document).ready(function () {
    
    $(window).on('load', function () {
        setTimeout(function () {
            $('.loading-overlay').hide();
        }, 1500);
    });


    var owl = $('#owl-carousel1');
    owl.owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });

    var owl2 = $('#owl-carousel2');
    owl2.owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true
    });

    var mixer = mixitup('.items-container');

});

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