var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2021630_132859_1 = new ol.format.GeoJSON();
var features_2021630_132859_1 = format_2021630_132859_1.readFeatures(json_2021630_132859_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021630_132859_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021630_132859_1.addFeatures(features_2021630_132859_1);
var lyr_2021630_132859_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021630_132859_1, 
                style: style_2021630_132859_1,
                interactive: false,
                title: '<img src="styles/legend/2021630_132859_1.png" /> 2021630_132859'
            });
var format_images_2 = new ol.format.GeoJSON();
var features_images_2 = format_images_2.readFeatures(json_images_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_images_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_images_2.addFeatures(features_images_2);
var lyr_images_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_images_2, 
                style: style_images_2,
                interactive: true,
                title: '<img src="styles/legend/images_2.png" /> images'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_2021630_132859_1.setVisible(true);lyr_images_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2021630_132859_1,lyr_images_2];
lyr_2021630_132859_1.set('fieldAliases', {'stroke': 'stroke', 'stroke-width': 'stroke-width', 'stroke-opacity': 'stroke-opacity', });
lyr_images_2.set('fieldAliases', {'frame': 'frame', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Photos': 'Photos', });
lyr_2021630_132859_1.set('fieldImages', {'stroke': 'TextEdit', 'stroke-width': 'Range', 'stroke-opacity': 'Range', });
lyr_images_2.set('fieldImages', {'frame': 'Range', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Photos': 'TextEdit', });
lyr_2021630_132859_1.set('fieldLabels', {'stroke': 'no label', 'stroke-width': 'no label', 'stroke-opacity': 'no label', });
lyr_images_2.set('fieldLabels', {'frame': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Photos': 'no label', });
lyr_images_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});