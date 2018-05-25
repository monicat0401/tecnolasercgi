var flag = false;
var scroll;
$(window).scroll(function(){
    scroll = $(window).scrollTop();
    if(scroll > 50){
        
        $(".menu_responsive").css({"background":"white"});
    }else{
        $(".menu_responsive").css({"background":""});
    }
    
});


