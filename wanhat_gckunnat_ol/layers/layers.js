var wms_layers = [];


        var lyr_OSMStamenWatercolor_0 = new ol.layer.Tile({
            'title': 'OSM Stamen Watercolor',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'
            })
        });
var format_SuomenKuntajako_2021_4500k_1 = new ol.format.GeoJSON();
var features_SuomenKuntajako_2021_4500k_1 = format_SuomenKuntajako_2021_4500k_1.readFeatures(json_SuomenKuntajako_2021_4500k_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuomenKuntajako_2021_4500k_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuomenKuntajako_2021_4500k_1.addFeatures(features_SuomenKuntajako_2021_4500k_1);
var lyr_SuomenKuntajako_2021_4500k_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuomenKuntajako_2021_4500k_1,
maxResolution:341.58027522229247,
 
                style: style_SuomenKuntajako_2021_4500k_1,
                interactive: false,
                title: '<img src="styles/legend/SuomenKuntajako_2021_4500k_1.png" /> SuomenKuntajako_2021_4500k'
            });
var format_SuomenMaakuntajako_2021_4500k_2 = new ol.format.GeoJSON();
var features_SuomenMaakuntajako_2021_4500k_2 = format_SuomenMaakuntajako_2021_4500k_2.readFeatures(json_SuomenMaakuntajako_2021_4500k_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuomenMaakuntajako_2021_4500k_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuomenMaakuntajako_2021_4500k_2.addFeatures(features_SuomenMaakuntajako_2021_4500k_2);
var lyr_SuomenMaakuntajako_2021_4500k_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuomenMaakuntajako_2021_4500k_2, 
                style: style_SuomenMaakuntajako_2021_4500k_2,
                interactive: false,
                title: '<img src="styles/legend/SuomenMaakuntajako_2021_4500k_2.png" /> SuomenMaakuntajako_2021_4500k'
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

lyr_OSMStamenWatercolor_0.setVisible(true);lyr_SuomenKuntajako_2021_4500k_1.setVisible(true);lyr_SuomenMaakuntajako_2021_4500k_2.setVisible(true);lyr_BM86ANZwaypoints_3.setVisible(true);lyr_BM86ANZ_loydettywaypoints_4.setVisible(true);
var layersList = [lyr_OSMStamenWatercolor_0,lyr_SuomenKuntajako_2021_4500k_1,lyr_SuomenMaakuntajako_2021_4500k_2,lyr_BM86ANZwaypoints_3,lyr_BM86ANZ_loydettywaypoints_4];
lyr_SuomenKuntajako_2021_4500k_1.set('fieldAliases', {'GML_ID': 'GML_ID', 'NAMEFIN': 'NAMEFIN', });
lyr_SuomenMaakuntajako_2021_4500k_2.set('fieldAliases', {'GML_ID': 'GML_ID', 'NATCODE': 'NATCODE', 'NAMEFIN': 'NAMEFIN', 'NAMESWE': 'NAMESWE', });
lyr_BM86ANZwaypoints_3.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'url': 'url', 'urlname': 'urlname', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', 'wanhatkunnat_field_1': 'wanhatkunnat_field_1', });
lyr_BM86ANZ_loydettywaypoints_4.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'url': 'url', 'urlname': 'urlname', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', 'wanhatkunnat_field_1': 'wanhatkunnat_field_1', });
lyr_SuomenKuntajako_2021_4500k_1.set('fieldImages', {'GML_ID': 'Hidden', 'NAMEFIN': 'TextEdit', });
lyr_SuomenMaakuntajako_2021_4500k_2.set('fieldImages', {'GML_ID': 'Hidden', 'NATCODE': 'Hidden', 'NAMEFIN': 'Hidden', 'NAMESWE': 'Hidden', });
lyr_BM86ANZwaypoints_3.set('fieldImages', {'ele': 'Hidden', 'time': 'Hidden', 'magvar': 'Hidden', 'geoidheight': 'Hidden', 'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'url': 'Hidden', 'urlname': 'Hidden', 'sym': 'Hidden', 'type': 'Hidden', 'fix': 'Hidden', 'sat': 'Hidden', 'hdop': 'Hidden', 'vdop': 'Hidden', 'pdop': 'Hidden', 'ageofdgpsdata': 'Hidden', 'dgpsid': 'Hidden', 'wanhatkunnat_field_1': 'TextEdit', });
lyr_BM86ANZ_loydettywaypoints_4.set('fieldImages', {'ele': 'Hidden', 'time': 'Hidden', 'magvar': 'Hidden', 'geoidheight': 'Hidden', 'name': 'TextEdit', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'url': 'Hidden', 'urlname': 'TextEdit', 'sym': 'Hidden', 'type': 'Hidden', 'fix': 'Hidden', 'sat': 'Hidden', 'hdop': 'Hidden', 'vdop': 'Hidden', 'pdop': 'Hidden', 'ageofdgpsdata': 'Hidden', 'dgpsid': 'Hidden', 'wanhatkunnat_field_1': 'TextEdit', });
lyr_SuomenKuntajako_2021_4500k_1.set('fieldLabels', {'NAMEFIN': 'no label', });
lyr_SuomenMaakuntajako_2021_4500k_2.set('fieldLabels', {});
lyr_BM86ANZwaypoints_3.set('fieldLabels', {'wanhatkunnat_field_1': 'no label', });
lyr_BM86ANZ_loydettywaypoints_4.set('fieldLabels', {'name': 'no label', 'urlname': 'no label', 'wanhatkunnat_field_1': 'no label', });
lyr_BM86ANZ_loydettywaypoints_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});