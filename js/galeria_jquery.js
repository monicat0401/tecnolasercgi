$('.galeria_img').click(function(e){
  var img = e.target.src;
  var modal = '<div class="modal" id="modal"><img class="modal_img" src="'+ img +'"><div class="mod_cerrar" id="modal_boton">Cerrar</div></div>';
  $('body').append(modal);
  $('#modal_boton').click(function(){
    $('#modal').remove();
  })
});

