var datos_contacto ={
  "correo":"",
  "nombre": "",
  "perros":[]
  };
$(document).ready(function(){
  $("#fila-2, #fila-3, #fila-4, #fila-5").hide();
  $('#formulario').on('submit',function(event){
    event.preventDefault();
  })
  $('#fila-4').delegate('input', 'keyup', function(){

  });
  //input de correo
  $('input#correo').on('keyup', function(){
    datos_contacto.correo = $('input#correo').val().trim();
    if( datos_contacto.correo ){
      $('#fila-2').show();
    }else {
      $('#fila-2').hide();
    }
  });

  //input de nombre
  $('input#nombre').on('keyup', function(){
    datos_contacto.nombre = $('input#nombre').val().trim();
    if( datos_contacto.nombre ){
      $('#fila-3').show();
    }else {
      $('#fila-3').hide();
    }
  });

  //input de numero
  $('input#numero').on('keyup', function(){
    var numero = parseInt( $('input#numero').val().trim());
    if( numero > 0 ){

      $('#fila-4').html('');
        var indice = 0;
        while( indice < numero) {
          $('#fila-4').append(

            '<div class="col">'+
              '<p>Se llama</p>'+
              '<input type="text" class="form-control">'+
            '</div>');
          indice++;
        }


      $('#fila-4').show();
    }else {
      $('#fila-4').hide();
    }
  });


});
