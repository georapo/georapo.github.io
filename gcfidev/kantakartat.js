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
    var kkCbx = document.getElementById('kantakartat');
	
    let opacityLevels = [1.0, 0.6, 0.4, 0.2];
    let dimLevel = parseInt(document.getElementById("dim").value);
    let opacity = opacityLevels[dimLevel];
	
    if (dealWithKantakartat) {
      kkCbx.disabled = false;
      kkCbx.setAttribute('title', currentKunta);
      swapKantakarttaWidgetColors('black');

      map.getLayers().forEach(function(layer) {  
        if (isBaseLayer(layer)) layer.setOpacity(((dealWithKantakartat==1 && kantakarttaActivated()==1) ? 1-glbCurrentOpacity : opacity));
      });

    } else {
      kkCbx.disabled = true;
      kkCbx.setAttribute('title', '');
      swapKantakarttaWidgetColors('grey');
	  
      map.getLayers().forEach(function(layer) {  
        if (isBaseLayer(layer)) layer.setOpacity(opacity);
      });
    }
	
	/* jos orto valittuna selectlististä ja ollaan kuntaorto extentissä, niin otetaan ortogroup käyttöön */
    if(document.getElementById("TASOT").value == 'ORTO') {
      map.getLayers().forEach(function(layer) {
        if (layer.get('id') == 'ORTOGROUP') layer.setVisible(dealWithKantakartat ? true : false);
      });
    } 	
}


// Läpinäkyvä 1x1 GIF, näytetään "tyhjän" tilen sijaan
const TRANSPARENT_PIXEL =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBTAA7';

function isBlankTile(img, threshold = 250) {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  let data;
  try {
    data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  } catch (e) {
    // Canvas "tainted" -> CORS-ongelma, ei voida analysoida
    console.warn('Ei voitu lukea tilen pikseleitä (CORS?)', e);
    return false;
  }

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
    // jos löytyy edes yksi ei-valkoinen / ei-läpinäkyvä pikseli, tile ei ole tyhjä
    if (a !== 0 && (r < threshold || g < threshold || b < threshold)) {
      return false;
    }
  }
  return true;
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
                },
			    tileLoadFunction: function (tile, src) {
                  const img = tile.getImage();
                  const loader = new Image();
                  loader.crossOrigin = 'anonymous';

                  loader.onload = function () {
                    img.src = isBlankTile(loader) ? TRANSPARENT_PIXEL : src;
                  };
                  loader.onerror = function () {
                    tile.setState(3); // ol.TileState.ERROR
                  };
                  loader.src = src;
                },
            }),
			maxResolution: 1.0,
        });
            		
	    kkLayers = layer.getLayers(); 
	    kkLayers.push(ll);  
      }
    }
  };
  installOrtokartat();
}


/* todo: 
 ohjeeseen mukana olevien kuntien js-autogenerointi 
 */
 


 
 
 


