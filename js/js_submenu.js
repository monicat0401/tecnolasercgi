var flag = false;
var scroll;
$(window).scroll(function(){
    scroll = $(window).scrollTop();
    if(scroll > 50){
        
        $("#subscroll").css({"background":"white"});
        $(".a_b").css({"color":"#B60E0B"});
        
    }else{
        $("#subscroll").css({"background":"#B60E0B"});
        $(".a_b").css({"color":"white"});
    }
    
});
