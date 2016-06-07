var dibujo, lienzo;


function inicio()
{
	dibujo = document.getElementById ("dibujito");
    lienzo = dibujo.getContext ("2d");
	
	dibujarGrilla(lienzo);
	
	

	//lienzo.moveTo (1,1);
	//lienzo.lineTo (299,1);
	//lienzo.lineTo (299,299);
	//lienzo.lineTo  (1,299);
	//lienzo.lineTo (1,1)
	//lienzo.strokeStyle = "	#812E14 ";
	//lienzo.stroke();
	
	lienzo.beginPath();
	lienzo.fillStyle= "rgb(41,155,243)";
	lienzo.strokeStyle = "59FF00";
	 
    lienzo.arc(150,150,100,(Math.PI*2),false);
	lienzo.stroke();
	
	lienzo.closePath();
	lienzo.fillStyle = ("red");
	lienzo.lineWidth = 1;
	lienzo.fill();
	
	
}
	function dibujarGrilla(movi){
		var ancho = 300, alto = 300;
		var linea;
		var anchoLinea = 10;
		var limiteX =  ancho / anchoLinea;
		var limiteY = alto / anchoLinea;
		for (linea = 0; linea <= limiteX; linea ++)
		{
			movi.beginPath();	
            movi.strokeStyle = "#258129";			
			movi.moveTo(linea +300,0);
			movi.lineTo(linea + 10, 300);
			movi.stroke();
			movi.closePath();
			
			
		}
		for (linea = 0 ; linea  <= limiteY; linea++)
		{
			
			movi.beginPath();
			movi.strokeStyle = "#812525";	
			movi.moveTo(anchoLinea + 0, linea + 1);
			movi.lineTo(300, linea +  299);
			movi.stroke();
			movi.closePath();
			
		}
		
	}		
		
	