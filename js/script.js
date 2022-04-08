$(document).ready(function(){
    $(".section01 > .right > .img02").addClass("active");

    AOS.init();


    $("#scroller").simplyScroll({
        speed: 1
      });

    $(".go-top").click(function(){
      $('html,body').animate({
        scrollTop: 0
      }, 1000)
    });  
});