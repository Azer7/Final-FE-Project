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

// SCROLL IN INDEX

$(window).scroll(function () {
  // console.log($(this).scrollTop());
  if ($(this).scrollTop() > 600) {
    $("#header").addClass("scrolled");
  } else if ($(this).scrollTop() < 600) {
    $("#header").removeClass("scrolled");
  }
});

// SCROLL IN OTHER PAGES

$(window).scroll(function () {
  //console.log($(this).scrollTop());
  if ($(this).scrollTop() > 10) {
    $("#header2").addClass("scrolled");
  } else if ($(this).scrollTop() < 10) {
    $("#header2").removeClass("scrolled");
  }
});

// function move() {
//     var elem = document.getElementById("myBar"); 
//     var from = $( "#myBar" ).data("from");
//     var to = $( "#myBar" ).data("to");
//     var id = setInterval(frame, 300);
//     function frame() {
//       if (from == to) {
//         clearInterval(id);
//       } else {
//         from++; 
//         elem.innerHTML = from * 1  + '';
//       }
//     }
//   }
//   move()

//   function move2() {
//     var elem2 = document.getElementById("myBar2"); 
//     var from2 = $( "#myBar2" ).data("from");
//     var to2 = $( "#myBar2" ).data("to");
//     var id2 = setInterval(frame, 1);
//     function frame() {
//       if (from2 >= to2) {
//         clearInterval(id2);
//       } else {
//         from2++; 

//         elem2.innerHTML = from2 * 1  + '';
//       }
//     }
//   }
//   move2()

//   function move3() {
//     var elem3 = document.getElementById("myBar3"); 
//     var from3 = $( "#myBar3" ).data("from");
//     var to3 = $( "#myBar3" ).data("to");
//     var id3 = setInterval(frame, 6);
//     function frame() {
//       if (from3 >= to3) {
//         clearInterval(id3);
//       } else {
//         from3++; 

//         elem3.innerHTML = from3 * 1  + '';
//       }
//     }
//   }
//   move3()

//   function move4() {
//     var elem4 = document.getElementById("myBar4"); 
//     var from4 = $( "#myBar4" ).data("from");
//     var to4 = $( "#myBar4" ).data("to");
//     var id4 = setInterval(frame, 1);
//     function frame() {
//       if (from4 >= to4) {
//         clearInterval(id4);
//       } else {
//         from4++; 

//         elem4.innerHTML = from4 * 1  + '';
//       }
//     }
//   }
//   move4()



$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});


$( ".blog-ul2 a" ).hover(
  function() {
    $( this ).addClass( "active22" );
  }, function() {
    $( this ).removeClass( "active22" );
  }

  
);

$(".snake").snakeify({
  speed: 200
});
