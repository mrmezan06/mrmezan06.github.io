//======ISOTOPE  ==============//
$(document).ready(function (){
  let $btns=$(".project_section .button-group button");
  $btns.click(function(e){
    $(".project_section .button-group button").removeClass("active");
    e.target.classList.add("active");
    let= selector =$(e.target).attr("data-filter");
    $(".project_section .grid").isotope({
      filter:selector
    });
    return false;
  });
  //======Magnific Popup ==============//
$(".project_section .button-group #btn1").trigger("click");
$(".project_section .grid .test-popup-link").magnificPopup({
  type:'image',
  gallery :{enabled : true}
});

//=====owl carousel=====================//
$(".aboutme_section .carousel .owl-carousel.owl-theme").owlCarousel({
  // loop:true,
  autoplay: true,
  dots: true,
  responsive:({
    0:{
      items:1
    },
    560:{
      items:2
    }
  })
})
//========Sticky navber==============//
    let nav_offset_top = $('.header_area').height() + 50;
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();
});
