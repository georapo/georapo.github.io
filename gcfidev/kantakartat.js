/* kantakartat.js  */
/* kuntien wms-kantakarttatasot geocache.fi/kartta -sivulle */
/* contact: georapo12@gmail.com */

/*
var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://georapo.github.io/gcfidev/kantakartatDefs.js';  
  document.head.appendChild(script);  
	*/
	
var maxOpacity = 1.0;
var minOpacity = 0.0;
var glbCurrentOpacity = maxOpacity;  
var baselayersArray = ['OSM','PERUS','ORTO','ORTOGROUP','TAUSTA','MAPANT','TRAILMAP'];
var currentKunta;   


function kantakarttaZoomLevel() {
  return (map.getView().getZoom() >= 18 ? true : false); 	
}

function kantakarttaActivated() {
  return document.getElementById('kantakartat').checked;
}

function pointinpolygontest(point, vs) {
  // kaytto: var polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];
  // pointinpolygontest([ 1.5, 1.5 ], polygon);

  var x = point[0], y = point[1];
    
  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    var xi = vs[i][0], yi = vs[i][1];
    var xj = vs[j][0], yj = vs[j][1];
    var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
    
  return inside;
} 	


function kantakarttaAvailable() {
  var ret = false;
  currentKunta = '';
  var c = map.getView().getCenter();
  for(var i = 0; i < kantakartatDefs.length; i++) {
	if (c[0] > kantakartatDefs[i][1] && c[0] < kantakartatDefs[i][3] && c[1] > kantakartatDefs[i][2] && c[1] < kantakartatDefs[i][4]) {
	   if ((i>kuntarajat1000k.length-1) || pointinpolygontest([c[0],c[1]], kuntarajat1000k[i][1]) ) {
	       currentKunta += (currentKunta.length > 0 ? ', ' : '') + kantakartatDefs[i][0];
           ret = true;  
	   }
	}
  }
  return ret;
}

function dealingWithKantakartat() {
  return ((kantakarttaActivated() && kantakarttaZoomLevel() && kantakarttaAvailable()) ? true : false);
}

function isBaseLayer(layer) {
  return (baselayersArray.includes(layer.get('id')) ? true : false);
}

function switchKantakartta(obj) {
  if (kantakarttaAvailable()) {
    map.getLayers().forEach(function(layer) {
      if (layer.get('id') == 'KANTAKARTTAGROUP') {
        layer.setVisible(obj.checked);
      } else if (isBaseLayer(layer)) {
        layer.setOpacity((obj.checked ? (kantakarttaZoomLevel() ? 1-glbCurrentOpacity : 1.0) : 1.0));
      }	
    });
  }	  
}

function changeOpacity(byOpacity) {  
  if (dealingWithKantakartat()) {
    var opac = document.getElementById('opacity').value.replace('%','').trim();
    var newOpacity = parseFloat((opac/100) + byOpacity).toFixed(1);
    newOpacity = Math.min(maxOpacity, Math.max(minOpacity, newOpacity));
	document.getElementById('opacity').value = newOpacity * 100 + " %";

    map.getLayers().forEach(function(layer) {
		if (isBaseLayer(layer)) layer.setOpacity(1-newOpacity);
    });

   	glbCurrentOpacity = newOpacity;
  }
}

function swapKantakarttaWidgetColors(color) {
  document.getElementById('opa1').style.color = color;
  document.getElementById('opa2').style.color = color;
  document.getElementById('kantakarttalbl').style.color = color;
  document.getElementById('opacity').style.color = color;
}

function kantakarttaZoomlevelListener() {
	
    var dealWithKantakartat = (kantakarttaZoomLevel() && kantakarttaAvailable());
	
    map.getLayers().forEach(function(layer) {  
      if (isBaseLayer(layer)) layer.setOpacity(((dealWithKantakartat==1 && kantakarttaActivated()==1) ? 1-glbCurrentOpacity : 1.0));
    });	

    var kkCbx = document.getElementById('kantakartat');
    if (dealWithKantakartat) {
      kkCbx.disabled = false;
      kkCbx.setAttribute('title', currentKunta);
      swapKantakarttaWidgetColors('black');
    } else {
      kkCbx.disabled = true;
      kkCbx.setAttribute('title', '');
      swapKantakarttaWidgetColors('grey');
    }
	
	/* jos orto valittuna selectlististä ja ollaan kuntaorto extentissä, niin otetaan ortogroup käyttöön */
    if(document.getElementById("TASOT").value == 'ORTO') {
      map.getLayers().forEach(function(layer) {
        if (layer.get('id') == 'ORTOGROUP') layer.setVisible(dealWithKantakartat ? true : false);
      });
    } 
	
}

function installOrtokartat() {
  var orLayers = []; 
  map.getLayers().forEach(function(layer) {
    if (layer.get('id') == 'ORTOGROUP') {
      for(var i = 0; i < ortokartatDefs.length; i++) {   
        var ll = new ol.layer.Tile({  
            extent: [ortokartatDefs[i][1], ortokartatDefs[i][2], ortokartatDefs[i][3], ortokartatDefs[i][4]],
            source: new ol.source.TileWMS({
              url: ortokartatDefs[i][5],
              projection: (ortokartatDefs[i][7].includes('CRS') ? 'CRS:84' : 'EPSG:'+ortokartatDefs[i][7]),
              params: {
                'LAYERS': ortokartatDefs[i][6],	
                'VERSION': ortokartatDefs[i][8],
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true',
              }
            }),
            maxResolution: 1.0,
	    }); 
	    orLayers = layer.getLayers(); 
	    orLayers.push(ll);  
      }
    }
  });
}

function installKantakartat() {
	
	var tyhjaimg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADHUlEQVR4nO3UMQEAIAzAMMC/5yFjRxMFvXpn5gBNbzsA2GMAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEGYAEPYB58oE/VhFU1IAAAAASUVORK5CYII=";
	
  var kkLayers = []; 
  map.getLayers().forEach(function(layer) {
    if (layer.get('id') == 'KANTAKARTTAGROUP') {
      for(var i = 0; i < kantakartatDefs.length; i++) {   
        var ll = new ol.layer.Tile({  
            extent: [kantakartatDefs[i][1], kantakartatDefs[i][2], kantakartatDefs[i][3], kantakartatDefs[i][4]],
            source: new ol.source.TileWMS({
                url: kantakartatDefs[i][5],
                projection: (kantakartatDefs[i][7].includes('CRS') ? 'CRS:84' : 'EPSG:'+kantakartatDefs[i][7]),
                params: {
                  'LAYERS': kantakartatDefs[i][6],	
                  'VERSION': kantakartatDefs[i][8],
                  'FORMAT': 'image/png',
                  'TRANSPARENT': 'true',
                }
            }),
            maxResolution: 1.0,
        }); 
		
		// yritetään päästä käsiksi, jos wms palauttaa haja-asutusalueilla tmv. vain tyhjän tilen
		ll.getSource().on('tileloadend', function(event) {
             var currTileImg = getBase64Image(event.tile.M.currentSrc);
			 
			 if (currTileImg.toString() === tyhjaimg) {
				   console.log("TYHJÄ TILE HAVAITTU ");
			 } else {
				 console.log(currTileImg);
			 }
			 
         //var b64 = getBase64Image(event.tile.M.currentSrc);

	 
			 
        });
		
	    kkLayers = layer.getLayers(); 
	    kkLayers.push(ll);  
      }
    }
  });
  
  installOrtokartat();
}

// getBase64Image.js: https://gist.github.com/colxi/c9ab898aa063e0943d4fae1840b982d8
// get an image blob from url using fetch
let getImageBlob = function(url){
  return new Promise( async resolve=>{
    let resposne = await fetch( url );
    let blob = resposne.blob();
    resolve( blob );
  });
};

// convert a blob to base64
let blobToBase64 = function(blob) {
  return new Promise( resolve=>{
    let reader = new FileReader();
    reader.onload = function() {
      let dataUrl = reader.result;
      resolve(dataUrl);
    };
    reader.readAsDataURL(blob);
  });
}

// combine the previous two functions to return a base64 encode image from url
let getBase64Image = async function( url ){
  let blob = await getImageBlob( url );
  let base64 = await blobToBase64( blob );
  return base64;
}

/* todo:
 
 ohjeeseen mukana olevien kuntien js-autogenerointi 
 
 */
 


 
 
 


