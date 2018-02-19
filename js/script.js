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

