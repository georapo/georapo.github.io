/* kantakartat.js  */
/* kantakartat -laajennos geocache.fi/kartta -sivulle */



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

function kantakarttaAvailable() {
    var ret = false;
	currentKunta = '';
    var c = map.getView().getCenter();
    for(var i = 0; i < kantakartatDefs.length; i++) {
		if (c[0] > kantakartatDefs[i][1] && c[0] < kantakartatDefs[i][3] && c[1] > kantakartatDefs[i][2] && c[1] < kantakartatDefs[i][4]) {
		   currentKunta += (currentKunta.length > 0 ? ', ' : '') + kantakartatDefs[i][0];
           ret = true;  
		}
	}
	return ret;
}

function dealingWithKantakartat() {
   	return ((kantakarttaActivated() && kantakarttaAvailable() && kantakarttaZoomLevel()) ? true : false);
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
    map.getLayers().forEach(function(layer) {
		if (isBaseLayer(layer)) {
		    layer.setOpacity((dealingWithKantakartat() ? 1-glbCurrentOpacity : 1.0));
		}
    });	

	var kkCbx = document.getElementById('kantakartat');
    if (kantakarttaAvailable() && kantakarttaZoomLevel()) {
	  kkCbx.disabled = false;
	  kkCbx.setAttribute('title', currentKunta);
      swapKantakarttaWidgetColors('black');
 	} else {
 	  kkCbx.disabled = true;
	  kkCbx.setAttribute('title', '');
      swapKantakarttaWidgetColors('grey');
	}
	
	/* jos orto valittuna selectlististä ja ollaan kuntaorto extentissä, niin otetaan ortogroup käyttöön */
	var l = document.getElementById("TASOT").value;
	if(l == 'ORTO') {

/*	if (kantakarttaAvailable() && kantakarttaZoomLevel()) {
			map.getLayers().forEach(function(layer) {
               if (layer.get('id') == 'ORTOGROUP') {
			        layer.setVisible(true);
			   }		
            });
        } 
	} */

	
			map.getLayers().forEach(function(layer) {
               if (layer.get('id') == 'ORTOGROUP') {
			        if (kantakarttaAvailable() && kantakarttaZoomLevel()) { 
					   layer.setVisible(true);
					} else {
                       layer.setVisible(false);
                    }					
			   }		
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
		      maxResolution: 2.0,
	    }); 
	    orLayers = layer.getLayers(); 
	    orLayers.push(ll);  
      }
    }
  });
}

function installKantakartat() {
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
	    kkLayers = layer.getLayers(); 
	    kkLayers.push(ll);  
      }
    }
  });
  
  installOrtokartat();
}

/* todo:

 ortokuvan autoswitchaus parempaan. https://gis.vantaa.fi/geoserver/wms?request=GetCapabilities
 taustakartta:ortokuva_2019
 
 ylöjärvi löytyy
 
 piirto: metreinä kantakarttalevelillä  DONE
 
 ohjeeseen mukan olevien kuntien autogenerointi 
 
 attributions -> ohjesivulle dynaaminen frameElement
 
 ohjeeseen:
 liikennemerkkien sijotukset eivät kartalla näy, mutta katuvalotolpat ja ... 
 */
 


 
 
 


