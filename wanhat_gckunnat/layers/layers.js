var wms_layers = [];


 var lyr_wanhatkartat_0 = new ol.layer.Tile({
            'title': 'Wanhat kartat',
            'type': 'base',
            'opacity': 1.000000,
            
            source: new ol.source.XYZ({
                attributions: ' ',
                url: 'https://georapo.github.io/xyz_wanhat/{z}/{x}/{y}.jpg'
            })
 });

var taustakartta_mml = new ol.layer.Tile({
	   source: new ol.source.TileWMS({
            url: 'https://tiles.kartat.kapsi.fi/taustakartta?',
	        crossOrigin: 'anonymous',
            params: {
                'FORMAT': 'image/png'
            },
            serverType: 'mapserver'
       }),
            visible: true,
            id: "TAUSTA"
        });
		
		
var format_BM86ANZwaypoints_3 = new ol.format.GeoJSON();
var features_BM86ANZwaypoints_3 = format_BM86ANZwaypoints_3.readFeatures(json_BM86ANZwaypoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BM86ANZwaypoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM86ANZwaypoints_3.addFeatures(features_BM86ANZwaypoints_3);
var lyr_BM86ANZwaypoints_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM86ANZwaypoints_3, 
                style: style_BM86ANZwaypoints_3,
                interactive: true,
                title: '<img src="styles/legend/BM86ANZwaypoints_3.png" /> BM86ANZ waypoints'
            });
			
var format_BM86ANZ_loydettywaypoints_4 = new ol.format.GeoJSON();
var features_BM86ANZ_loydettywaypoints_4 = format_BM86ANZ_loydettywaypoints_4.readFeatures(json_BM86ANZ_loydettywaypoints_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BM86ANZ_loydettywaypoints_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM86ANZ_loydettywaypoints_4.addFeatures(features_BM86ANZ_loydettywaypoints_4);
var lyr_BM86ANZ_loydettywaypoints_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM86ANZ_loydettywaypoints_4, 
                style: style_BM86ANZ_loydettywaypoints_4,
                interactive: true,
                title: '<img src="styles/legend/BM86ANZ_loydettywaypoints_4.png" /> BM86ANZ_loydetty waypoints'
            });

lyr_BM86ANZwaypoints_3.setVisible(true);
lyr_BM86ANZ_loydettywaypoints_4.setVisible(true);

var layersList = [taustakartta_mml,lyr_wanhatkartat_0,lyr_BM86ANZwaypoints_3,lyr_BM86ANZ_loydettywaypoints_4];

lyr_BM86ANZwaypoints_3.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'url': 'url', 'urlname': 'urlname', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', 'wanhatkartat_field_1': 'wanhatkartat_field_1', });
lyr_BM86ANZ_loydettywaypoints_4.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'url': 'url', 'urlname': 'urlname', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', 'wanhatkartat_field_1': 'wanhatkartat_field_1', });
lyr_BM86ANZwaypoints_3.set('fieldImages', {'ele': 'Hidden', 'time': 'Hidden', 'magvar': 'Hidden', 'geoidheight': 'Hidden', 'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'url': 'Hidden', 'urlname': 'Hidden', 'sym': 'Hidden', 'type': 'Hidden', 'fix': 'Hidden', 'sat': 'Hidden', 'hdop': 'Hidden', 'vdop': 'Hidden', 'pdop': 'Hidden', 'ageofdgpsdata': 'Hidden', 'dgpsid': 'Hidden', 'wanhatkartat_field_1': 'TextEdit', });
lyr_BM86ANZ_loydettywaypoints_4.set('fieldImages', {'ele': 'Hidden', 'time': 'Hidden', 'magvar': 'Hidden', 'geoidheight': 'Hidden', 'name': 'TextEdit', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'url': 'Hidden', 'urlname': 'TextEdit', 'sym': 'Hidden', 'type': 'Hidden', 'fix': 'Hidden', 'sat': 'Hidden', 'hdop': 'Hidden', 'vdop': 'Hidden', 'pdop': 'Hidden', 'ageofdgpsdata': 'Hidden', 'dgpsid': 'Hidden', 'wanhatkartat_field_1': 'TextEdit', });
lyr_BM86ANZwaypoints_3.set('fieldLabels', {'wanhatkartat_field_1': 'no label', });
lyr_BM86ANZ_loydettywaypoints_4.set('fieldLabels', {'name': 'no label', 'urlname': 'no label', 'wanhatkartat_field_1': 'no label', });
lyr_BM86ANZ_loydettywaypoints_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

var loydetyt_kpl = features_BM86ANZ_loydettywaypoints_4.length;
var loytamatta_kpl = features_BM86ANZwaypoints_3.length;
var yhteensa = loydetyt_kpl + loytamatta_kpl;

document.getElementById('tilanne_meter').innerHTML = "<label for='tilanne'>Löydettyjen entisten kuntien tilanne (georapo):<label>  <meter id='tilanne' value='" + loydetyt_kpl + "' min='0' max='" + yhteensa + "'></meter><font color='green'>  " + loydetyt_kpl.toString() + "</font><font color='grey'> / " + yhteensa.toString() + "</font>";

