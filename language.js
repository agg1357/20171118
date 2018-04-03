
		
		
			
		
		
		function obtenDato2(){
			
		
		for(i=0;i<idiomas.length;i=i+1){
		
		

			switch ( idiomas[i] ) {
				case "English":
				document.getElementById("ppen").innerHTML="&nbsp;&nbsp;&nbsp;ENGLISH"	
				document.getElementById("ppen").style.color="rgb(238,238,238)"	
				document.getElementById("ppen").style.backgroundColor="rgb(35,35,35)"	
				break;

				case "Español":
				document.getElementById("ppes").innerHTML="&nbsp;&nbsp;&nbsp;ESPAÑOL"
				document.getElementById("ppes").style.color="rgb(238,238,238)"	
				document.getElementById("ppes").style.backgroundColor="rgb(35,35,35)"	
				break;

				case "Français":
				document.getElementById("ppfr").innerHTML="&nbsp;&nbsp;&nbsp;FRANÇAIS"
				document.getElementById("ppfr").style.color="rgb(238,238,238)"	
				document.getElementById("ppfr").style.backgroundColor="rgb(35,35,35)"	
				break;

				case "Deutsch":
				document.getElementById("ppde").innerHTML="&nbsp;&nbsp;&nbsp;DEUTSCH"
				document.getElementById("ppde").style.color="rgb(238,238,238)"	
				document.getElementById("ppde").style.backgroundColor="rgb(35,35,35)"	
				break;
				
				case "Italiano":
				document.getElementById("ppit").innerHTML="&nbsp;&nbsp;&nbsp;ITALIANO"
				document.getElementById("ppit").style.color="rgb(238,238,238)"	
				document.getElementById("ppit").style.backgroundColor="rgb(35,35,35)"	
				break;
				
				case "Portugues":
				document.getElementById("pppt").innerHTML="&nbsp;&nbsp;&nbsp;PORTUGUESE"
				document.getElementById("pppt").style.color="rgb(238,238,238)"	
				document.getElementById("pppt").style.backgroundColor="rgb(35,35,35)"	
				break;
				
			}
		
		}

			
		}
			
		
		

		
		
		
		function ppenClick(){
		lengua="en";
		title=titleEN;palabras=palabrasEN;capitulos=capitulosEN;
		localStorage.setItem("languageL", lengua.toLowerCase());	
		document.getElementById("chooseL").className="novisible"		
		setTimeout(iniciar, 200);
		}
		
		function ppesClick(){
		lengua="es";
		title=titleES;palabras=palabrasES;capitulos=capitulosES;
		localStorage.setItem("languageL", lengua.toLowerCase());	
		document.getElementById("chooseL").className="novisible"		
		setTimeout(iniciar, 200);
		}
		
		
		function ppfrClick(){
		lengua="fr";
		title=titleFR;palabras=palabrasFR;capitulos=capitulosFR;
		localStorage.setItem("languageL", lengua.toLowerCase());	
		document.getElementById("chooseL").className="novisible"		
		setTimeout(iniciar, 200);
		}
		
		function ppdeClick(){
		lengua="de";
		title=titleDE;palabras=palabrasDE;capitulos=capitulosDE;
		localStorage.setItem("languageL", lengua.toLowerCase());	
		document.getElementById("chooseL").className="novisible"		
		setTimeout(iniciar, 200);
		}
		
		
		function ppitClick(){
		lengua="it";
		title=titleIT;palabras=palabrasIT;capitulos=capitulosIT;
		localStorage.setItem("languageL", lengua.toLowerCase());	
		document.getElementById("chooseL").className="novisible"		
		setTimeout(iniciar, 200);
		}
		
		
		function ppptClick(){
		lengua="pt";
		title=titlePT;palabras=palabrasPT;capitulos=capitulosPT;
		localStorage.setItem("languageL", lengua.toLowerCase());	
		document.getElementById("chooseL").className="novisible"		
		setTimeout(iniciar, 200);
		}
		
		
		
		
		
		
		
		
		
		function redirect(userLanguage){
			
			switch ( userLanguage ) {
				case "en":
				ppenClick();
				break;

				case "es":
				ppesClick();
				break;

				case "fr":
				ppfrClick();
				break;

				case "de":
				ppdeClick();
				break;
				
				case "it":
				ppitClick();
				break;
				
				case "pt":
				ppptClick();
				break;
				
				default:
				ppenClick();
				break;

			}
					
		}

		
		
		