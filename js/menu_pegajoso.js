var flag = false;
var scroll;
$(window).scroll(function(){
    scroll = $(window).scrollTop();
    if(scroll > 50){
        
        $("#menu").css({"background":"white"});
    }else{
        $("#menu").css({"background":""});
    }
    
});
