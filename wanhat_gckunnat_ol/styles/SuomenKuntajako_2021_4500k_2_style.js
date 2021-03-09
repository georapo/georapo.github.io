var size = 0;
var placement = 'point';

var style_SuomenKuntajako_2021_4500k_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Goudy Old Style\', sans-serif";
    var labelFill = "#331800";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NAMEFIN") !== null) {
        labelText = String(feature.get("NAMEFIN"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(139,67,0,0.7294117647058823)', lineDash: [10,5,1,5], lineCap: 'round', lineJoin: 'round', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
