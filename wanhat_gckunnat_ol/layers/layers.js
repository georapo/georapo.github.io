var wms_layers = [];


        var lyr_OSMStamenWatercolor_0 = new ol.layer.Tile({
            'title': 'OSM Stamen Watercolor',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
            })
        });
var format_SuomenMaakuntajako_2021_4500k_1 = new ol.format.GeoJSON();
var features_SuomenMaakuntajako_2021_4500k_1 = format_SuomenMaakuntajako_2021_4500k_1.readFeatures(json_SuomenMaakuntajako_2021_4500k_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuomenMaakuntajako_2021_4500k_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuomenMaakuntajako_2021_4500k_1.addFeatures(features_SuomenMaakuntajako_2021_4500k_1);
var lyr_SuomenMaakuntajako_2021_4500k_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuomenMaakuntajako_2021_4500k_1, 
                style: style_SuomenMaakuntajako_2021_4500k_1,
                interactive: false,
                title: '<img src="styles/legend/SuomenMaakuntajako_2021_4500k_1.png" /> SuomenMaakuntajako_2021_4500k'
            });
var format_SuomenKuntajako_2021_4500k_2 = new ol.format.GeoJSON();
var features_SuomenKuntajako_2021_4500k_2 = format_SuomenKuntajako_2021_4500k_2.readFeatures(json_SuomenKuntajako_2021_4500k_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuomenKuntajako_2021_4500k_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuomenKuntajako_2021_4500k_2.addFeatures(features_SuomenKuntajako_2021_4500k_2);
var lyr_SuomenKuntajako_2021_4500k_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuomenKuntajako_2021_4500k_2,
maxResolution:224.03572921809567,
 
                style: style_SuomenKuntajako_2021_4500k_2,
                interactive: false,
                title: '<img src="styles/legend/SuomenKuntajako_2021_4500k_2.png" /> SuomenKuntajako_2021_4500k'
            });

lyr_OSMStamenWatercolor_0.setVisible(true);lyr_SuomenMaakuntajako_2021_4500k_1.setVisible(true);lyr_SuomenKuntajako_2021_4500k_2.setVisible(true);
var layersList = [lyr_OSMStamenWatercolor_0,lyr_SuomenMaakuntajako_2021_4500k_1,lyr_SuomenKuntajako_2021_4500k_2];
lyr_SuomenMaakuntajako_2021_4500k_1.set('fieldAliases', {'GML_ID': 'GML_ID', 'NATCODE': 'NATCODE', 'NAMEFIN': 'NAMEFIN', 'NAMESWE': 'NAMESWE', });
lyr_SuomenKuntajako_2021_4500k_2.set('fieldAliases', {'GML_ID': 'GML_ID', 'NAMEFIN': 'NAMEFIN', });
lyr_SuomenMaakuntajako_2021_4500k_1.set('fieldImages', {'GML_ID': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEFIN': 'TextEdit', 'NAMESWE': 'TextEdit', });
lyr_SuomenKuntajako_2021_4500k_2.set('fieldImages', {'GML_ID': 'TextEdit', 'NAMEFIN': 'TextEdit', });
lyr_SuomenMaakuntajako_2021_4500k_1.set('fieldLabels', {'GML_ID': 'no label', 'NATCODE': 'no label', 'NAMEFIN': 'no label', 'NAMESWE': 'no label', });
lyr_SuomenKuntajako_2021_4500k_2.set('fieldLabels', {'GML_ID': 'no label', 'NAMEFIN': 'no label', });
lyr_SuomenKuntajako_2021_4500k_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'color-burn';
});