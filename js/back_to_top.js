$(document).ready(function(){
  $('.arriba').click(function(){
    $('body,html').animate({
      scrollTop: '0px'
    }, 500);
  });
  var flag = false;
var scroll;
$(window).scroll(function(){
    scroll = $(window).scrollTop();
    if(scroll > 100){
        
        $(".arriba").css({"display":"flex"});
    }else{
        $(".arriba").css({"display":"none"});
    }
    
});
});

