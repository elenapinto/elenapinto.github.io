$(document).ready(function(){
    //Letra grande y pequeña//
    function fontActual() {
        size = $( "p" ).css( "font-size" );
        size = parseInt(size, 10);
        $( "#font-size" ).text(  size  );
     }
     
        fontActual();
     
     $( "#grande").on( "click", function() {
        if ((size + 2) <= 24) {
         $( "#intro").css( "font-size", "+=3" );
         $( "span" ).css( "font-size", "+=3" );
         $( "p" ).css( "font-size", "+=3" );
         $( "h1" ).css( "font-size", "+2" );
         $( "h2" ).css( "font-size", "+=2" );
         $( "#font-size" ).text(  size += 2 );
       }
     });

     $( "#pequeña" ).on( "click", function() {
        if ((size - 2) >= 16) {
          $( "#intro").css( "font-size", "-=2" );
          $( "span" ).css( "font-size", "-=2" );
          $( "p" ).css( "font-size", "-=2" );
          $( "h1" ).css( "font-size", "-=2" );
          $( "h2" ).css( "font-size", "-=2" );
          $( "#font-size" ).text(  size -= 2  );
        }
    });
});//fin del ready//

$(document).ready(function(){

//Panel//
    var estado= false;
    $('#btn-toggle').on('click', function(){
       $('.panelToggle').slideToggle();
       if (estado==true){
           $(this).text("Abrir");
          estado=false;
       }else{
        $(this).text("Cerrar");
        estado=true;
       }
    });
});//fin del ready//


$(document).ready(function(){ 

    function espacioActual() {
         espaciado = $( "p" ).css( "letter-spacing" );
         espaciado = parseInt(espaciado, 10);
         $( "#letter-spacing" ).text( espaciado  );
      }
       espacioActual();
      
      $( "#Espaciado" ).on( "click", function() {
         if ((espaciado + 1) <=4 ) {
          $( "#intro").css( "letter-spacing", "+=2" );
          $( "span").css( "letter-spacing", "+=1" );
          $( "p" ).css( "letter-spacing", "+=2" );
          $( "h1" ).css( "letter-spacing", "+=2" );
          $( "#letter-spacing" ).text( espaciado += 2 );
        }else
        $( "#Espaciado" ).on( "click", function() {
            ((espaciado - 1) <=-2) 
                $( "#intro").css( "letter-spacing", "-=1" );
                $( "span").css( "letter-spacing", "-=1" );
                $( "p" ).css( "letter-spacing", "-=1" );
                $( "h1" ).css( "letter-spacing", "-=1" );
                $( "#letter-spacing" ).text( espaciado -=1);
              });
            });/*Fin espaciado*/
    });//fin ready

//Subrayar Vinculos//
 $(function(){
     $("#sub").on("click",function(){
        $('.subrayar').addClass('activo');
        $("#sub").on("click",function(){
        $('.subrayar').removeClass('activo');
        
     });
  });

});
     
  //Subrayar Titulos//
  $(function(){
    $("#subTitulo").on("click",function(){

       $('.subrayarTitulo').addClass('titulo');
       $("#subTitulo").on("click",function(){
       $('.subrayarTitulo').removeClass('titulo');
       
    });
 });

});

//Contraste//
$("#Contraste").click(function (){
    $("html").css("filter","invert(100%)");
    $("#Contraste").click(function (){
        $("html").css("filter","grayscale(100%)");
        $("#Contraste").click(function (){
            $("html").css("filter","invert(0%)");
        });
    });
});

//iframe//














