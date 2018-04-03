


//donde estará el texto
//posicion primera palabra
//estimacion inicial de palabras que caben en pantalla
info=document.getElementById("prueba")
cuerpo=document.getElementById("cuerpo")

a=0
ai=0
corte=2
alto=0
alto2=100
b=0
npalabra=0
cambiarpagina=0
solucion=""
dispositivo="pc"
carga=0

//PUBLICIDAD *************************************************************************************
					
		if(typeof(comodinx) =="undefined" || isNaN(comodinx)) {comodinx=10;}
		if(typeof(comodiny) =="undefined" || isNaN(comodiny)) {comodiny=20;}
		if(typeof(comodinz) =="undefined" || isNaN(comodinz)) {comodinz=0;}
		
		comodinx=parseInt(comodinx)	
		comodiny=parseInt(comodiny)	
		comodinz=parseInt(comodinz)
		
			
//*************************************************************************************************************		
		

posicionclick="inicio"
coordenadaX=0
coordenadaY=0

blanquito="<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"


		var lengua
		var userLanguage;
		var language="nn"
		
	

  

	
//cuando se carga por primera vez
// o se clicka, ejecutar PalabrasPaginas

	window.onload=function(){
		
		
		//IDIOMAS ****************************************************************************************
		//localStorage.removeItem("languageL");
		idiomas=[];
		
		if(typeof(titleEN) !="undefined") {idiomas.push("English");}
		if(typeof(titleES) !="undefined") {idiomas.push("Español");}
		if(typeof(titleFR) !="undefined") {idiomas.push("Français");}
		if(typeof(titleDE) !="undefined") {idiomas.push("Deutsch");}
		if(typeof(titleIT) !="undefined") {idiomas.push("Italiano");}
		if(typeof(titlePT) !="undefined") {idiomas.push("Portugues");}
		
		if (idiomas.length<2){document.getElementById("idioma").className="novisible";}
		
		if(localStorage.getItem("languageL")!=null){redirect(localStorage.getItem("languageL"));}
		else {obtenDato2();}
		
	}
		
				
		
		
		
		function iniciar() {
		
		
		pulsado=0
		desplazar=0
		vv1=0
		vv2=0
			
		
						
		if(localStorage.getItem("npalabra")!=null){
		a=localStorage.getItem("npalabra");
		a=parseInt(a);
		acuandoinicio=a
		}
		
			
		
		//localStorage.removeItem("menos1");
		if(localStorage.getItem("menos1")!=null){menos1=localStorage.getItem("menos1");}
		else {menos1="8"}
				
		//localStorage.removeItem("mas3");
		if(localStorage.getItem("mas3")!=null){mas3=localStorage.getItem("mas3");}
		else {mas3="8"}
		
		
		
		fuente="Lato, sans-serif";
		if(menos1=="1" || mas3=="1"){fuente="'PT Sans', sans-serif";}
		if(menos1=="2" || mas3=="2"){fuente="'Roboto', sans-serif";}
		if(menos1=="3" || mas3=="3"){fuente="'Dosis', sans-serif";}
		if(menos1=="4" || mas3=="4"){fuente="'Cabin', sans-serif";}
		if(menos1=="5" || mas3=="5"){fuente="'Hind', sans-serif";}
		if(menos1=="6" || mas3=="6"){fuente="'Heebo', sans-serif";}
		if(menos1=="7" || mas3=="7"){fuente="'Exo', sans-serif";}
		if(menos1=="8" || mas3=="8"){fuente="'Lato', sans-serif";}
		if(menos1=="9" || mas3=="9"){fuente="'Alegreya', serif";}
		if(menos1=="10" || mas3=="10"){fuente="'Libre Baskerville', serif";}
		if(menos1=="11" || mas3=="11"){fuente="'Titillium Web', sans-serif";}
		if(menos1=="12" || mas3=="12"){fuente="'Ubuntu', sans-serif";}
		if(menos1=="13" || mas3=="13"){fuente="'Open Sans', sans-serif";}
		if(menos1=="14" || mas3=="14"){fuente="'Questrial', sans-serif";}
		if(menos1=="15" || mas3=="15"){fuente="'Kaushan Script', cursive";}
		
		
		
		document.getElementById("cuerpo").style.fontFamily=fuente;
		document.getElementById("porcentaje2").style.fontFamily=fuente;
		fuentetxt=fuente.substring(1);
		poscomilla=fuentetxt.indexOf("'");
		fuentetxt=fuentetxt.substring(0,poscomilla)
		document.getElementById("porcentaje2").value=fuentetxt
		
		
		
		
		//localStorage.removeItem("menos4");
		if(localStorage.getItem("menos4")!=null){
		menos4=localStorage.getItem("menos4");}
		else {menos4="1.0em"}
		document.getElementById("cuerpo").style.fontSize=menos4;
		
		//localStorage.removeItem("mas6");
		if(localStorage.getItem("mas6")!=null){
		mas6=localStorage.getItem("mas6");}
		else {mas6="1.0em"}
		document.getElementById("cuerpo").style.fontSize=mas6;
		
		var mass6=parseFloat(mas6)
		document.getElementById("porcentaje4").value=parseInt(mass6*100)+"%";
		
			
		
		//localStorage.removeItem("menos7");
		if(localStorage.getItem("menos7")!=null){
		menos7=localStorage.getItem("menos7");}
		else {menos7="2.3em"}
		document.getElementById("cuerpo").style.lineHeight=menos7;
				
		
		//localStorage.removeItem("mas9");
		if(localStorage.getItem("mas9")!=null){
		mas9=localStorage.getItem("mas9");}
		else {mas9="2.3em"}
		document.getElementById("cuerpo").style.lineHeight=mas9;
				
		var mass9=parseFloat(mas9)
		document.getElementById("porcentaje8").value=parseInt(mass9*100/2.3)+"%";
		
		
		
		
		
		
		//localStorage.removeItem("menos10");
		if(localStorage.getItem("menos10")!=null){menos10=localStorage.getItem("menos10");}
		else {menos10="6"}
				
		//localStorage.removeItem("mas12");
		if(localStorage.getItem("mas12")!=null){mas12=localStorage.getItem("mas12");}
		else {mas12="6"}
		
		fondo="rgb(241,231,208)"; coloreye="rgb(0,0,0)"
		if(menos10=="1" || mas12=="1") {fondo="rgb(0,0,0)"; coloreye="rgb(204,133,67)";}
		if(menos10=="2" || mas12=="2") {fondo="rgb(236,147,66)"; coloreye="rgb(100,52,16)";}
		if(menos10=="3" || mas12=="3") {fondo="rgb(255,167,84)"; coloreye="rgb(0,0,0)";}
		if(menos10=="4" || mas12=="4") {fondo="rgb(236,225,202)"; coloreye="rgb(100,80,50)";}
		if(menos10=="5" || mas12=="5") {fondo="rgb(251,240,217)"; coloreye="rgb(95,75,50)";}
		if(menos10=="6" || mas12=="6") {fondo="rgb(241,231,208)"; coloreye="rgb(0,0,0)";}
		if(menos10=="7" || mas12=="7") {fondo="rgb(255,254,238)"; coloreye="rgb(0,0,0)";}
		if(menos10=="8" || mas12=="8") {fondo="rgb(255,255,255)"; coloreye="rgb(0,0,0)";}
				
		
		document.body.style.backgroundColor=fondo;
		document.getElementById("cuerpo").style.color=coloreye;
		
		document.getElementById("porcentaje11").style.backgroundColor=fondo;
		document.getElementById("porcentaje11").style.color=coloreye;
		
		
		//localStorage.removeItem("pormarcador");
		if(localStorage.getItem("marca")!=null){
		memorialibro=localStorage.getItem("marca");
		
		memorialibrovisual=parseFloat((Math.round(memorialibro*10000))/100).toFixed(2);}
		else {memorialibrovisual="0.00"}
		document.getElementById("pormarcador").value=memorialibrovisual+" %";
		
		
		
		



tamanoCabecera();

setTimeout(muestraReloj, 100);

setInterval(muestraReloj, 20000);

PalabrasPaginas();	

contadorPercent();




for(i=0;i<idiomas.length;i=i+1){
elemento1=document.createElement("li");
	elemento1.setAttribute("id","lis"+i);
contenido1=document.createTextNode(idiomas[i]);
    elemento1.appendChild(contenido1);
lista1=document.getElementById("idioma");
    lista1.appendChild(elemento1);
	lista1.style.fontsize="1.2em";
}

	
for(i=0;i<idiomas.length;i=i+1){
document.getElementById("lis"+i).onclick=pro1;
}















document.getElementById("portada").className="visible";
document.getElementById("titulo").innerHTML=title[0];
document.getElementById("autor").innerHTML=title[1];


document.getElementById("cuerpo").className="novisible";
document.getElementById("cabecera").className="novisible";

document.getElementById("tituloportada").innerHTML=title[0];
document.getElementById("autorportada").innerHTML="- "+title[1]+" -";

//Dejamos deshabilitados estos iconos por ponerlos solamente en mobincube
document.getElementById("compartir").className="novisible";
document.getElementById("maslibros").className="novisible";
document.getElementById("salir").className="novisible";



//list();


for(i=0;i<capitulos.length;i=i+2){
elemento=document.createElement("li");
	elemento.setAttribute("id","li"+i);
contenido=document.createTextNode(capitulos[i]);
    elemento.appendChild(contenido);
lista=document.getElementById("listaT");
    lista.appendChild(elemento);
	lista.style.fontsize="1.2em";
}

for(i=0;i<capitulos.length;i=i+2){
document.getElementById("li"+i).onclick=pro;
}
		


		localStorage.setItem("languageL", lengua.toLowerCase());

}

		
		
		
		
		
	

function pro(){
	for(i=0;i<capitulos.length;i=i+2){
	document.getElementById("li"+i).style.color="rgb(97,97,97)";	
	}
	
	this.style.color="blue";
	
	for(i=0;i<capitulos.length;i=i+2){
	if(document.getElementById("li"+i).style.color=="blue") {a=capitulos[i+1]}	
	}
	
	a=parseInt(a)
	cambiarpagina=1	
	posicionclick="inicio"; PalabrasPaginas();
	cambiarpagina=0	
	
	document.getElementById("oplistado").className="novisible"
	document.getElementById("listado").style.backgroundImage="url(imglistado.png)";
}

		
		
		
		
			
		
		
		
		
		
		
		
		
		
function pro1(){
	for(i=0;i<idiomas.length;i=i+1){
	document.getElementById("lis"+i).style.color="rgb(97,97,97)";	
	}
	
	this.style.color="blue";
	
	
	for(i=0;i<idiomas.length;i=i+1){
	if(document.getElementById("lis"+i).style.color=="blue") {
	a=0;
						for(h=0;h<capitulos.length;h=h+2){
						document.getElementById("li"+h).parentNode.removeChild(document.getElementById("li"+h));
						}
	
	if(document.getElementById("lis"+i).innerHTML=="English") {redirect("en");}	
	if(document.getElementById("lis"+i).innerHTML=="Español") {redirect("es");}
	if(document.getElementById("lis"+i).innerHTML=="Français") {redirect("fr");}	
	if(document.getElementById("lis"+i).innerHTML=="Deutsch") {redirect("de");}	
	if(document.getElementById("lis"+i).innerHTML=="Italiano") {redirect("it");}	
	if(document.getElementById("lis"+i).innerHTML=="Portugues") {redirect("pt");}	
				
	}			
	}
	
		
	a=parseInt(a)
	cambiarpagina=1	
	posicionclick="inicio"; PalabrasPaginas();
	cambiarpagina=0	
	document.getElementById("titulo").innerHTML=title[0];
	document.getElementById("autor").innerHTML=title[1];
	localStorage.setItem("languageL", lengua.toLowerCase());
	document.getElementById("opfuentes").className="novisible";
	document.getElementById("letras").style.backgroundImage="url(imgletras.png)";
	
	for(i=0;i<idiomas.length;i=i+1){
	document.getElementById("lis"+i).parentNode.removeChild(document.getElementById("lis"+i));
	}
	
	
		
	
}
		
		
		
		
		
		
		
		
		
		
		

		












document.getElementById("ppen").onclick=ppenClick;
document.getElementById("ppes").onclick=ppesClick;
document.getElementById("ppfr").onclick=ppfrClick;
document.getElementById("ppde").onclick=ppdeClick;
document.getElementById("ppit").onclick=ppitClick;
document.getElementById("pppt").onclick=ppptClick;
		
		




document.getElementById("portada").onclick=portadaClick;




document.getElementById("listado").onclick=oplistadoClickMenu;
document.getElementById("letras").onclick=opfuentesClickMenu;


document.getElementById("menos1").onclick=reducirfuenteletraClick;
document.getElementById("mas3").onclick=aumentarfuenteletraClick;
document.getElementById("menos4").onclick=reducirtamanoletraClick;
document.getElementById("mas6").onclick=aumentartamanoletraClick;
document.getElementById("menos7").onclick=reducirtamanoparrafoClick;
document.getElementById("mas9").onclick=aumentartamanoparrafoClick;
document.getElementById("menos10").onclick=reducirluzparrafoClick;
document.getElementById("mas12").onclick=aumentarluzparrafoClick;


document.getElementById("salir").onclick=cerrar;

document.getElementById("marcador").onclick=marcador;
document.getElementById("abrirlibro").onclick=abrirlibro;
document.getElementById("compartir").onclick=cerrar;
document.getElementById("maslibros").onclick=library;


	



function PalabrasPaginas(elEvento){
	
	document.getElementById("cuerpo").style.opacity="1";
	tamanoVentana();
	
	//primero vemos donde hemos pulsado el dedo
	
	
	//if(coordenadaX<(ancho/2)){posicionclick="izquierda"}
	//if(coordenadaX>=(ancho/2)){posicionclick="derecha"}
	
	//if(coordenadaX==null) {posicionclick="inicio"}
	if(cambiarpagina==1) {posicionclick="inicio"}
	
	
	if(document.getElementById("opfuentes").className=="visible" && posicionclick!="inicio"){nohacer=1;} else {nohacer=0;}
	if(document.getElementById("oplistado").className=="visible" && posicionclick!="inicio"){nohacer=1;} else {nohacer=0;}	
		if(nohacer==0){
		
	
				
	if(a<(palabras.length-1) && (posicionclick=="derecha" || posicionclick=="inicio")) {
		if (posicionclick=="derecha"){info.innerHTML=(solucion)}
		//tamanoVentana()
		
		
		alto=0
		alto2=6
		
		
		while(alto<=Math.round(alto2*0.84) && b!=(palabras.length-1)){
		calculoPalabras(0);
		}
		corte=corte-2
		calculoPalabras(1);
		npalabra=a
		//siguiente posicion de corte en siguiente página
		ai=a
		a=b+1
		corte=2
		alto=0
		alto2=100
		}
		
	
	
	if(ai>0 && posicionclick=="izquierda") {
		if (posicionclick=="izquierda"){info.innerHTML=(solucion)}
		//tamanoVentana()
		
		alto=0
		alto2=6
		
		while(alto<=Math.round(alto2*0.84) && b!=0){
		calculoReverso(0);
		}
		corte=corte-2
		if(b<3){corte=corte+1}
		calculoReverso(1);
		npalabra=b
		
		//siguiente posicion de corte en siguiente página
		a=ai
		ai=b
		corte=2
		alto=0
		alto2=100
		
		}
		
		
		
		
		info.innerHTML=(solucion+blanquito)
		
		localStorage.setItem("npalabra", npalabra);
		


     //document.getElementById("oplistado").className="novisible"
	 //document.getElementById("opfuentes").className="novisible"
	 contadorPercent();
	posicionclick="0"
	
}		
}	

	
	
	

//Calculo de longitud palabras en pagina
function calculoPalabras(finalMuestreo){
	
	solucion=""
	if((palabras.length-1)>(a+corte)){
	b=a+corte	
	}
	else {
	b=palabras.length-1	
	}
	
			if(finalMuestreo==1){
			contador=0
			for(i=a;i<=b;i++){
			//buscamos titulos para cortar
			if((palabras[i].substring(0,4)=="<h2>") && i>a) {
				contador=i-1;
				break;
			}
			}
			if(contador>0) {b=contador}
			}	
			
				
		for(i=a;i<=b;i++){solucion=solucion+palabras[i]+" "}
	
	
	
	
	
	info.innerHTML=(solucion)
	
	tamanoVentana()
	
	//alto2=tamaño ventana navegador
	//alto=tamaño ventana ocupada por el texto
	corte=(Math.round(corte*1.05)+1)
	
	
}


function calculoReverso(finalMuestreo){
	
	solucion=""
	if((ai-1-corte)>0){
	b=ai-1-corte	
	}
	else {
	b=0	
	}
		
	
			
				
			
		for(i=b;i<ai;i++){solucion=solucion+palabras[i]+" "}
				
			
	info.innerHTML=(solucion);
	
	tamanoVentana()
	//alto2=tamaño ventana navegador
	//alto=tamaño ventana ocupada por el texto
	corte=(Math.round(corte*1.05)+1)
}
		
	
	


//*******************************************************************************
	
	//tamano Cabecera
	
	function tamanoCabecera(){
	
	tamanoVentana();	
			
	standard=Math.round(1.8*ancho/10)
		
	standardv=standard+"%"
	
	document.body.style.fontSize=standardv		
	
	}
	
	
	
	
	
	
	//la HORA
	
function muestraReloj() {
var fechaHora = new Date();
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes();

if(horas < 10) { horas = '0' + horas; }
if(minutos < 10) { minutos = '0' + minutos; }

document.getElementById("reloj").innerHTML = horas+':'+minutos;
}




//contador porcentaje páginas

function contadorPercent() {

contadormate=npalabra/palabras.length
contador=(parseFloat(Math.round(npalabra*10000/(palabras.length)))/100).toFixed(2);
document.getElementById("contador").innerHTML=contador+" %"


if(contador!=document.getElementById("pormarcador").value){
document.getElementById("marcador").style.backgroundImage="url(imgmarcador.png)";}


}

		


// portada

function portadaClick(){
	
	pulsado=0
	desplazar=0
	vv1=0
	vv2=0




document.getElementById("portada").className="novisible";
document.getElementById("cabecera").className="visible";
document.getElementById("cuerpo").className="visible";
	a=acuandoinicio
	cambiarpagina=1	
	posicionclick="inicio"; PalabrasPaginas();
	cambiarpagina=0	
	
}













	
	//click en cabecera Listado
	
	function oplistadoClickMenu(){
	
			
	if(document.getElementById("oplistado").className=="novisible" && document.getElementById("opfuentes").className=="novisible") {
		document.getElementById("oplistado").className="visible"
		document.getElementById("listado").style.backgroundImage="url(imgflechaup.png)";
		if(contadormate==memorialibro){document.getElementById("marcador").style.backgroundImage="url(imgnomarcador.png)";}
		}
		
	else {document.getElementById("oplistado").className="novisible"
	document.getElementById("listado").style.backgroundImage="url(imglistado.png)";
	}
	
	
	}
	
	
	//click en cabecera Letras
		
	function opfuentesClickMenu(){
	
	
	
	if(document.getElementById("opfuentes").className=="novisible" && document.getElementById("oplistado").className=="novisible" ) {
		document.getElementById("opfuentes").className="visible"
		document.getElementById("letras").style.backgroundImage="url(imgflechaup.png)";
		}
		
	else {document.getElementById("opfuentes").className="novisible"
	document.getElementById("letras").style.backgroundImage="url(imgletras.png)";
	}
	}
	
	
	
	
	
	
	//click en opciones fuentes
	
	
		function reducirfuenteletraClick(){
		if(localStorage.getItem("menos1")!=null){
		menos1=localStorage.getItem("menos1");
		}
		menos1=parseFloat(menos1)
		if(menos1>1){
		menos1=menos1-1
		mas3=menos1
		
		fuente="Lato, sans-serif";
		if(menos1=="1"){fuente="'PT Sans', sans-serif";}
		if(menos1=="2"){fuente="'Roboto', sans-serif";}
		if(menos1=="3"){fuente="'Dosis', sans-serif";}
		if(menos1=="4"){fuente="'Cabin', sans-serif";}
		if(menos1=="5"){fuente="'Hind', sans-serif";}
		if(menos1=="6"){fuente="'Heebo', sans-serif";}
		if(menos1=="7"){fuente="'Exo', sans-serif";}
		if(menos1=="8"){fuente="'Lato', sans-serif";}
		if(menos1=="9"){fuente="'Alegreya', serif";}
		if(menos1=="10"){fuente="'Libre Baskerville', serif";}
		if(menos1=="11"){fuente="'Titillium Web', sans-serif";}
		if(menos1=="12"){fuente="'Ubuntu', sans-serif";}
		if(menos1=="13"){fuente="'Open Sans', sans-serif";}
		if(menos1=="14"){fuente="'Questrial', sans-serif";}
		if(menos1=="15"){fuente="'Kaushan Script', cursive";}
		
		
		document.getElementById("cuerpo").style.fontFamily=fuente;
		document.getElementById("porcentaje2").style.fontFamily=fuente;
				
		localStorage.setItem("menos1", menos1);
		localStorage.setItem("mas3", menos1);
		
		fuentetxt=fuente.substring(1);
		poscomilla=fuentetxt.indexOf("'");
		fuentetxt=fuentetxt.substring(0,poscomilla)
		document.getElementById("porcentaje2").value=fuentetxt;
		cambiarpagina=1
		a=npalabra; posicionclick="inicio"; PalabrasPaginas();
		document.getElementById("opfuentes").className="visible"
		cambiarpagina=0
		}
		}
	
	
	
	
	
	
	function aumentarfuenteletraClick(){
		if(localStorage.getItem("mas3")!=null){
		mas3=localStorage.getItem("mas3");
		}
		mas3=parseFloat(mas3)
		if(mas3<15){
		mas3=mas3+1
		menos1=mas3
		
		fuente="Lato, sans-serif";
		if(mas3=="1"){fuente="'PT Sans', sans-serif";}
		if(mas3=="2"){fuente="'Roboto', sans-serif";}
		if(mas3=="3"){fuente="'Dosis', sans-serif";}
		if(mas3=="4"){fuente="'Cabin', sans-serif";}
		if(mas3=="5"){fuente="'Hind', sans-serif";}
		if(mas3=="6"){fuente="'Heebo', sans-serif";}
		if(mas3=="7"){fuente="'Exo', sans-serif";}
		if(mas3=="8"){fuente="'Lato', sans-serif";}
		if(mas3=="9"){fuente="'Alegreya', serif";}
		if(mas3=="10"){fuente="'Libre Baskerville', serif";}
		if(mas3=="11"){fuente="'Titillium Web', sans-serif";}
		if(mas3=="12"){fuente="'Ubuntu', sans-serif";}
		if(mas3=="13"){fuente="'Open Sans', sans-serif";}
		if(mas3=="14"){fuente="'Questrial', sans-serif";}
		if(mas3=="15"){fuente="'Kaushan Script', cursive";}
		
		
		
		document.getElementById("cuerpo").style.fontFamily=fuente;
		document.getElementById("porcentaje2").style.fontFamily=fuente;
				
		localStorage.setItem("mas3", mas3);
		localStorage.setItem("menos1", mas3);
		
		fuentetxt=fuente.substring(1);
		poscomilla=fuentetxt.indexOf("'");
		fuentetxt=fuentetxt.substring(0,poscomilla)
		document.getElementById("porcentaje2").value=fuentetxt;
		cambiarpagina=1
		a=npalabra; posicionclick="inicio"; PalabrasPaginas();
		document.getElementById("opfuentes").className="visible"
		cambiarpagina=0
		}
		}
	
	
				
	function reducirtamanoletraClick(){
		if(localStorage.getItem("menos4")!=null){
		menos4=localStorage.getItem("menos4");
		}
		menos4=parseFloat(menos4)
		if(menos4>0.5){
		menos4=((menos4-0.1)+"em")
		document.getElementById("cuerpo").style.fontSize=menos4;
		localStorage.setItem("menos4", menos4);
		localStorage.setItem("mas6", menos4);
		var menoss4=parseFloat(menos4)
		document.getElementById("porcentaje4").value=parseInt(menoss4*100)+"%";
		cambiarpagina=1
		a=npalabra; posicionclick="inicio"; PalabrasPaginas();
		document.getElementById("opfuentes").className="visible"
		cambiarpagina=0
		}
		}
	
	
	function aumentartamanoletraClick(){
		if(localStorage.getItem("mas6")!=null){
		mas6=localStorage.getItem("mas6");
		}
		mas6=parseFloat(mas6)
		if(mas6<2.3){
		mas6=((mas6+0.1)+"em")
		document.getElementById("cuerpo").style.fontSize=mas6;
		localStorage.setItem("mas6", mas6);
		localStorage.setItem("menos4", mas6);
		var mass6=parseFloat(mas6)
		document.getElementById("porcentaje4").value=parseInt(mass6*100)+"%";
		cambiarpagina=1
		a=npalabra; posicionclick="inicio"; PalabrasPaginas();
		document.getElementById("opfuentes").className="visible"
		cambiarpagina=0
		}
		}
	
	
	
	
	
	
	function reducirtamanoparrafoClick(){
		if(localStorage.getItem("menos7")!=null){
		menos7=localStorage.getItem("menos7");
		}
		menos7=parseFloat(menos7);
		if(menos7>1.5){
		menos7=((menos7-0.1)+"em");
		document.getElementById("cuerpo").style.lineHeight=menos7;
		localStorage.setItem("menos7", menos7);
		localStorage.setItem("mas9", menos7);
		var menoss7=parseFloat(menos7)
		document.getElementById("porcentaje8").value=parseInt(menoss7*100/2.3)+"%";
		cambiarpagina=1
		a=npalabra; posicionclick="inicio"; PalabrasPaginas();
		document.getElementById("opfuentes").className="visible"
		cambiarpagina=0
		}
		}
	
	
	
	
		function aumentartamanoparrafoClick(){
		if(localStorage.getItem("mas9")!=null){
		mas9=localStorage.getItem("mas9");
		}
		mas9=parseFloat(mas9)
		if(mas9<3.3){
		mas9=((mas9+0.1)+"em")
		document.getElementById("cuerpo").style.lineHeight=mas9;
		localStorage.setItem("mas9", mas9);
		localStorage.setItem("menos7", mas9);
		var mass9=parseFloat(mas9)
		document.getElementById("porcentaje8").value=parseInt(mass9*100/2.3)+"%";
		cambiarpagina=1
		a=npalabra; posicionclick="inicio"; PalabrasPaginas();
		document.getElementById("opfuentes").className="visible"
		cambiarpagina=0
		}
		}
	
	
	
	
	
	
	function reducirluzparrafoClick(){
			
		if(localStorage.getItem("menos10")!=null){
		menos1=localStorage.getItem("menos10");
		}
		
		menos10=parseFloat(menos10)
		
		
		if(menos10>1){
		menos10=menos10-1
		mas12=menos10
		
				
		if(menos10=="1") {fondo="rgb(0,0,0)"; coloreye="rgb(204,133,67)";}
		if(menos10=="2") {fondo="rgb(236,147,66)"; coloreye="rgb(100,52,16)";}
		if(menos10=="3") {fondo="rgb(255,167,84)"; coloreye="rgb(0,0,0)";}
		if(menos10=="4") {fondo="rgb(236,225,202)"; coloreye="rgb(100,80,50)";}
		if(menos10=="5") {fondo="rgb(251,240,217)"; coloreye="rgb(95,75,50)";}
		if(menos10=="6") {fondo="rgb(241,231,208)"; coloreye="rgb(0,0,0)";}
		if(menos10=="7") {fondo="rgb(255,254,238)"; coloreye="rgb(0,0,0)";}
		if(menos10=="8") {fondo="rgb(255,255,255)"; coloreye="rgb(0,0,0)";}
				
		
		document.body.style.backgroundColor=fondo;
		document.getElementById("cuerpo").style.color=coloreye;
		
		localStorage.setItem("menos10", menos10);
		localStorage.setItem("mas12", menos10);
		
		
		
		document.getElementById("porcentaje11").style.backgroundColor=fondo;
		document.getElementById("porcentaje11").style.color=coloreye;
		
				
		}
		
		}
	
	
	
	
	
	function aumentarluzparrafoClick(){
		
		if(localStorage.getItem("mas12")!=null){
		mas12=localStorage.getItem("mas12");
		}
		mas12=parseFloat(mas12)
		
		if(mas12<8){
		
		mas12=mas12+1
		menos10=mas12
			
		if(mas12=="1") {fondo="rgb(0,0,0)"; coloreye="rgb(204,133,67)";}
		if(mas12=="2") {fondo="rgb(236,147,66)"; coloreye="rgb(100,52,16)";}
		if(mas12=="3") {fondo="rgb(255,167,84)"; coloreye="rgb(0,0,0)";}
		if(mas12=="4") {fondo="rgb(236,225,202)"; coloreye="rgb(100,80,50)";}
		if(mas12=="5") {fondo="rgb(251,240,217)"; coloreye="rgb(95,75,50)";}
		if(mas12=="6") {fondo="rgb(241,231,208)"; coloreye="rgb(0,0,0)";}
		if(mas12=="7") {fondo="rgb(255,254,238)"; coloreye="rgb(0,0,0)";}
		if(mas12=="8") {fondo="rgb(255,255,255)"; coloreye="rgb(0,0,0)";}
				
		
		document.body.style.backgroundColor=fondo;
		document.getElementById("cuerpo").style.color=coloreye;
		
		localStorage.setItem("mas12", mas12);
		localStorage.setItem("menos10", mas12);
		
		
		
		document.getElementById("porcentaje11").style.backgroundColor=fondo;
		document.getElementById("porcentaje11").style.color=coloreye;
			
				
		}
		
		}
	
	
	
	
	
	
	
	
	
	
	
	function cerrar() {
	
	//cerrar en mobincube
	window.location.href= 'mobincube://action/section/cerrar';
	
	//cerrar en web
	setTimeout(cerrado, 200);
	
			function cerrado() {
			var ventana=window.self;
			ventana.opener = window.self;
			ventana.close();
			}
	
	}
	
	
	
	
	
	
	function library() {
	
	//publicidad en mobincube
	window.location.href= 'mobincube://action/interstitial';
	
	//library
	setTimeout(espera, 100);
	
			function espera() {
			enlace="sites.google.com/view/literaturelibrum";
			enlace2=encodeURIComponent(enlace);
			window.location.href= "mobincube://action/browse/'+enlace2+'";
			}
	
	}
	
	
	
	
	
	
	function marcador() {
		if(localStorage.getItem("marca")!=null){memorialibro=localStorage.getItem("marca");}
		else {memorialibro=0}
	
	if(contadormate!=memorialibro) {
	document.getElementById("pormarcador").value=contador+" %";
	document.getElementById("marcador").style.backgroundImage="url(imgnomarcador.png)";
	localStorage.setItem("marca", contadormate);
	}		
	
	}
	
	
	
	
	function abrirlibro() {
	
	
	if(localStorage.getItem("marca")!=null){memorialibro=localStorage.getItem("marca");}
	else {memorialibro=0}
		
	if(contadormate!=memorialibro){
		
	npalabra=Math.round(palabras.length*memorialibro);
		
	
	cambiarpagina=1	
	a=npalabra; posicionclick="inicio"; PalabrasPaginas();
	cambiarpagina=0
	document.getElementById("marcador").style.backgroundImage="url(imgnomarcador.png)";
	}
	
	}
	
	
	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	   
	   
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//cosas interesantes
	//alert(document.getElementById("cuerpo").offsetHeight);
	
	//window.confirm('que hacemos')
	
	//if(window.miVariable){alert("existe");} 
	
	
