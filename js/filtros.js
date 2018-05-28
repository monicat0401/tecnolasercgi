//jquery filtros

(function(){
	$(document).ready(function(){
		$(".btn-menu").click(function(e){
			e.preventDefault();
			var filtro = $(this).attr("data-filter");
			if (filtro == "todos") {
				$(".box-img").show(150);
			} else {
				$(".box-img").not("."+filtro).hide(150);
				$(".box-img").filter("."+filtro).show(150);
			}
		});
		
		$(".todos a").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
      $(".uv a").removeClass("active");
      $(".fibra a").removeClass("active");
            $(".co2 a").removeClass("active");
            $(".acrilico a").removeClass("active");
		});
    
    	$(".uv a").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
        $(".todos a").removeClass("active");
        $(".fibra a").removeClass("active");
        $(".co2 a").removeClass("active");
        $(".acrilico a").removeClass("active");
		});
    
    	$(".fibra a").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
      $(".todos a").removeClass("active");
      $(".uv a").removeClass("active");
        $(".co2 a").removeClass("active");
        $(".acrilico a").removeClass("active");
		});
        
        $(".co2 a").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
      $(".todos a").removeClass("active");
      $(".uv a").removeClass("active");
        $(".fibra a").removeClass("active");
        $(".acrilico a").removeClass("active");
		});
        
        $(".acrilico a").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
      $(".todos a").removeClass("active");
      $(".uv a").removeClass("active");
        $(".co2 a").removeClass("active");
        $(".fibra a").removeClass("active");
		});
    
	});
}())

//cierre jquery filtros