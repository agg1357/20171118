	
	
	
	pulsado=0
	tamanoVentana();
	desplazar=0
	PubIntersticial=0
	PubVideo=0
	
	
			setInterval(mover,15);
				
			function mover() {
						if(pulsado>1){
						document.getElementById("cuerpo").style.position="relative";
						desplazar=desplazar+50
								if(pulsado=="2") {document.getElementById("cuerpo").style.left=8-desplazar+"px";
												  document.getElementById("cuerpo").style.right=8+desplazar+"px";}
								//if(pulsado=="3") {document.getElementById("cuerpo").style.left=8+desplazar+"px";
												  //document.getElementById("cuerpo").style.right=8-desplazar+"px";}
						
								if(pulsado=="3") {document.getElementById("cuerpo").style.opacity=((ancho-desplazar)/(ancho+desplazar));}
												  
							
							
							
							
																
						
							if(desplazar>1.5*ancho){
							document.getElementById("cuerpo").style.left="5px";
							document.getElementById("cuerpo").style.right="5px";
							pulsado=0;
							document.getElementById("cuerpo").style.opacity=1;
							if(document.getElementById("portada").className=="visible"){portadaClick();} else {PalabrasPaginas();}
							}
						
						
						
					}
				}
			
				
				
								
	
	
	
	
	var touchStartCoords =  {'x':-1, 'y':-1}, // X and Y coordinates on mousedown or touchstart events.
    touchEndCoords = {'x':-1, 'y':-1},// X and Y coordinates on mouseup or touchend events.
    direction = 'undefined',// Swipe direction
    minDistanceXAxis = ancho2/60,// Min distance on mousemove or touchmove on the X axis
    maxDistanceYAxis = ancho2/5,// Max distance on mousemove or touchmove on the Y axis
    maxAllowedTime = 5000,// Max allowed time between swipeStart and swipeEnd
    startTime = 0,// Time on swipeStart
    elapsedTime = 0,// Elapsed time between swipeStart and swipeEnd
    targetElement = document.getElementById('cuerpo');// Element to delegate
	targetElement2 = document.getElementById('portada');// Element to delegate
	targetElement3 = document.getElementById('imagen');// Element to delegate
	
	
function swipeStart(e) {
  e = e ? e : window.event;
  e = ('changedTouches' in e)?e.changedTouches[0] : e;
  touchStartCoords = {'x':e.pageX, 'y':e.pageY};
  startTime = new Date().getTime();
 // targetElement.textContent = " ";
 
  
  if(document.getElementById("portada").className=="novisible") {pulsado=1;}
 //alert("ancho2="+ancho2+"       ancho="+ancho)
 
  }

function swipeMove(e){
  e = e ? e : window.event;
  e.preventDefault();
  if(pulsado=="1") {
	  //var v=20/(Math.abs(e.pageX - touchStartCoords.x)+1);
	  //vv1=8+(e.pageX - touchStartCoords.x)
	  //vv2=8-(e.pageX - touchStartCoords.x)
	  //document.getElementById("cuerpo").style.opacity=v;
	  //document.getElementById("cuerpo").style.position="absolute"
	  //document.getElementById("cuerpo").style.left=5+(e.pageX - touchStartCoords.x)+"px"
	  //document.getElementById("cuerpo").style.right=5-(e.pageX - touchStartCoords.x)+"px"
	  }
}

function swipeEnd(e) {
  
  desplazar=0
  e = e ? e : window.event;
  e = ('changedTouches' in e)?e.changedTouches[0] : e;
  touchEndCoords = {'x':e.pageX - touchStartCoords.x, 'y':e.pageY - touchStartCoords.y};
  elapsedTime = new Date().getTime() - startTime;
  if (elapsedTime <= maxAllowedTime){
    if (Math.abs(touchEndCoords.x) >= minDistanceXAxis && Math.abs(touchEndCoords.y) <= maxDistanceYAxis){
      direction = (touchEndCoords.x < 0)? 'left' : 'right';
      switch(direction){
        case 'left':
          posicionclick="derecha";
					pulsado=2	
						PubIntersticial=PubIntersticial+1
						PubVideo=PubVideo+1
						if(PubIntersticial==comodinx && comodinx>0 && PubIntersticial!=comodiny) {window.location.href= 'mobincube://action/interstitial';}
						if(PubIntersticial>comodinx) {PubIntersticial=1;}
						if(PubVideo==comodiny && comodiny>0) {window.location.href= 'mobincube://action/videoad';}
						if(PubVideo>comodiny) {PubVideo=1;}
						  
		  break;
        
		case 'right':
          
          posicionclick="izquierda";
					pulsado=3
		  
		 
		  break;
      }
    }
  }
		
    	
	//document.getElementById("cuerpo").style.opacity="1"; 
	
		
	
}

  
  
function addMultipleListeners(el, s, fn) {
  var evts = s.split(' ');
  for (var i=0, iLen=evts.length; i<iLen; i++) {
    el.addEventListener(evts[i], fn, false);
  }
}




addMultipleListeners(targetElement, 'mousedown touchstart', swipeStart);
addMultipleListeners(targetElement, 'mousemove touchmove', swipeMove);
addMultipleListeners(targetElement, 'mouseup touchend', swipeEnd);
	
addMultipleListeners(targetElement2, 'mousedown touchstart', swipeStart);
addMultipleListeners(targetElement2, 'mousemove touchmove', swipeMove);
addMultipleListeners(targetElement2, 'mouseup touchend', swipeEnd);

addMultipleListeners(targetElement3, 'mousedown touchstart', swipeStart);
addMultipleListeners(targetElement3, 'mousemove touchmove', swipeMove);
addMultipleListeners(targetElement3, 'mouseup touchend', swipeEnd);

	
	
	
	
	