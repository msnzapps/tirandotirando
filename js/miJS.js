//variables globales, por ejemplo la pagina actual de vertodas
///////////////////////////////////////////////////////////////////////////////////////////////////////////	

var PagActual=1;
// cuando solicitamos contenido de una pagina nueva, la sobreescribimos
///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	
	
	
	
	
	
	
//javascript para page_vertodas, funcion autoejecutable, se ejecuta al comenzar pero nunca mas... por eso su numero de pagina siempre será 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	$(function(){

	var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/php_kamasutra_ver_todas.php?pag=1";

	
	
		$.get( urlphp, function( data ) {
		
			var Img1=data.Imagen1;
			var Tit1=data.Titulo1;
			var Txt1=data.Texto1;
			var Idd1=data.Id1;
			
			var Img2=data.Imagen2;
			var Tit2=data.Titulo2;
			var Txt2=data.Texto2;
			var Idd2=data.Id2;			
			

			var Img3=data.Imagen3;
			var Tit3=data.Titulo3;
			var Txt3=data.Texto3;
			var Idd3=data.Id3;			
			

			var Img4=data.Imagen4;
			var Tit4=data.Titulo4;
			var Txt4=data.Texto4;
			var Idd4=data.Id4;			

			var Img5=data.Imagen5;
			var Tit5=data.Titulo5;
			var Txt5=data.Texto5;
			var Idd5=data.Id5;			

			var Img6=data.Imagen6;
			var Tit6=data.Titulo6;
			var Txt6=data.Texto6;
			var Idd6=data.Id6;			

			var Img7=data.Imagen7;
			var Tit7=data.Titulo7;
			var Txt7=data.Texto7;
			var Idd7=data.Id7;
			
			var Img8=data.Imagen8;
			var Tit8=data.Titulo8;
			var Txt8=data.Texto8;
			var Idd8=data.Id8;			

			var Img9=data.Imagen9;
			var Tit9=data.Titulo9;
			var Txt9=data.Texto9;
			var Idd9=data.Id9;


			var Img10=data.Imagen10;
			var Tit10=data.Titulo10;
			var Txt10=data.Texto10;
			var Idd10=data.Id10;

			
			
		 document.getElementById("titulo1").innerHTML = Tit1;
		 document.getElementById("idimg1").src = Img1;		
		 document.getElementById("txtt1").innerHTML = Txt1;
	 
		 

		 document.getElementById("titulo2").innerHTML = Tit2;
		 document.getElementById("idimg2").src = Img2;		
		 document.getElementById("txtt2").innerHTML = Txt2;		 

		 
		 document.getElementById("titulo3").innerHTML = Tit3;
		 document.getElementById("idimg3").src = Img3;		
		 document.getElementById("txtt3").innerHTML = Txt3;
		 
		 
		 document.getElementById("titulo4").innerHTML = Tit4;
		 document.getElementById("idimg4").src = Img4;		
		 document.getElementById("txtt4").innerHTML = Txt4;	
	 
		 
		 document.getElementById("titulo5").innerHTML = Tit5;
		 document.getElementById("idimg5").src = Img5;		
		 document.getElementById("txtt5").innerHTML = Txt5;	
	 

		 document.getElementById("titulo6").innerHTML = Tit6;
		 document.getElementById("idimg6").src = Img6;		
		 document.getElementById("txtt6").innerHTML = Txt6;	
		 
		 document.getElementById("titulo7").innerHTML = Tit7;
		 document.getElementById("idimg7").src = Img7;		
		 document.getElementById("txtt7").innerHTML = Txt7;			 

		 document.getElementById("titulo8").innerHTML = Tit8;
		 document.getElementById("idimg8").src = Img8;		
		 document.getElementById("txtt8").innerHTML = Txt8;	

		 document.getElementById("titulo9").innerHTML = Tit9;
		 document.getElementById("idimg9").src = Img9;		
		 document.getElementById("txtt9").innerHTML = Txt9;	

		 document.getElementById("titulo10").innerHTML = Tit10;
		 document.getElementById("idimg10").src = Img10;		
		 document.getElementById("txtt10").innerHTML = Txt10;	
		 		 
		}, "json" );


	  });
///////////////////////////////////////////////////////////////////////////////////////////////////////////		  
	  
	  
	  
	  
	  
	  
//javascript para page_vertodas, funcion que se ejecuta solo cuando la llamamos, utilizada para recargar los valores de page_vertodas, cuando pasemos a la pag 2...
///////////////////////////////////////////////////////////////////////////////////////////////////////////		
function Recargar_Ver_Todas(){

	var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/php_kamasutra_ver_todas.php?pag=";
//usamos la variable global PagActual	
	var urldef = urlphp + PagActual;
	
	
		$.get( urldef, function( data ) {
		
			var Img1=data.Imagen1;
			var Tit1=data.Titulo1;
			var Txt1=data.Texto1;
			var Idd1=data.Id1;
			
			var Img2=data.Imagen2;
			var Tit2=data.Titulo2;
			var Txt2=data.Texto2;
			var Idd2=data.Id2;			
			

			var Img3=data.Imagen3;
			var Tit3=data.Titulo3;
			var Txt3=data.Texto3;
			var Idd3=data.Id3;			
			

			var Img4=data.Imagen4;
			var Tit4=data.Titulo4;
			var Txt4=data.Texto4;
			var Idd4=data.Id4;			

			var Img5=data.Imagen5;
			var Tit5=data.Titulo5;
			var Txt5=data.Texto5;
			var Idd5=data.Id5;			

			var Img6=data.Imagen6;
			var Tit6=data.Titulo6;
			var Txt6=data.Texto6;
			var Idd6=data.Id6;			

			var Img7=data.Imagen7;
			var Tit7=data.Titulo7;
			var Txt7=data.Texto7;
			var Idd7=data.Id7;
			
			var Img8=data.Imagen8;
			var Tit8=data.Titulo8;
			var Txt8=data.Texto8;
			var Idd8=data.Id8;			

			var Img9=data.Imagen9;
			var Tit9=data.Titulo9;
			var Txt9=data.Texto9;
			var Idd9=data.Id9;


			var Img10=data.Imagen10;
			var Tit10=data.Titulo10;
			var Txt10=data.Texto10;
			var Idd10=data.Id10;

			
			
		 document.getElementById("titulo1").innerHTML = Tit1;
		 document.getElementById("idimg1").src = Img1;		
		 document.getElementById("txtt1").innerHTML = Txt1;
	 
		 

		 document.getElementById("titulo2").innerHTML = Tit2;
		 document.getElementById("idimg2").src = Img2;		
		 document.getElementById("txtt2").innerHTML = Txt2;		 

		 
		 document.getElementById("titulo3").innerHTML = Tit3;
		 document.getElementById("idimg3").src = Img3;		
		 document.getElementById("txtt3").innerHTML = Txt3;
		 
		 
		 document.getElementById("titulo4").innerHTML = Tit4;
		 document.getElementById("idimg4").src = Img4;		
		 document.getElementById("txtt4").innerHTML = Txt4;	
	 
		 
		 document.getElementById("titulo5").innerHTML = Tit5;
		 document.getElementById("idimg5").src = Img5;		
		 document.getElementById("txtt5").innerHTML = Txt5;	
	 

		 document.getElementById("titulo6").innerHTML = Tit6;
		 document.getElementById("idimg6").src = Img6;		
		 document.getElementById("txtt6").innerHTML = Txt6;	
		 
		 document.getElementById("titulo7").innerHTML = Tit7;
		 document.getElementById("idimg7").src = Img7;		
		 document.getElementById("txtt7").innerHTML = Txt7;			 

		 document.getElementById("titulo8").innerHTML = Tit8;
		 document.getElementById("idimg8").src = Img8;		
		 document.getElementById("txtt8").innerHTML = Txt8;	

		 document.getElementById("titulo9").innerHTML = Tit9;
		 document.getElementById("idimg9").src = Img9;		
		 document.getElementById("txtt9").innerHTML = Txt9;	

		 document.getElementById("titulo10").innerHTML = Tit10;
		 document.getElementById("idimg10").src = Img10;		
		 document.getElementById("txtt10").innerHTML = Txt10;	
		 		 
		}, "json" );


	  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////			  
	  
	  
	  
	  
function refreshPage()
{
    jQuery.mobile.changePage(window.location.href, {
        allowSamePageTransition: true,
        transition: 'none',
        reloadPage: true
    });
}	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
//javascript para page_ver_una, en el link pasamos la id de la tarjeta ke keremos ver
///////////////////////////////////////////////////////////////////////////////////////////////////////////			  
function VerTarjeta(IdTarjeta){


	var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/php_kamasutra_ver.php?Idcard=";
	var urldef = urlphp + IdTarjeta;
	
	
		$.get( urldef, function( data ) {

			var Img1=data.Imagen1;
			var Tit1=data.Titulo1;
			var Txt1=data.Texto1;

		
		 document.getElementById("card_titulo1").innerHTML = Tit1;
		 document.getElementById("card_idimg1").src = Img1;		
		 document.getElementById("card_txtt1").innerHTML = Txt1;
		
		
		
		
		}, "json" );
					  
				  
}




