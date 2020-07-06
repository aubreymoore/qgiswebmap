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
var format_20200706_120855_1 = new ol.format.GeoJSON();
var features_20200706_120855_1 = format_20200706_120855_1.readFeatures(json_20200706_120855_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20200706_120855_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20200706_120855_1.addFeatures(features_20200706_120855_1);
var lyr_20200706_120855_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20200706_120855_1, 
                style: style_20200706_120855_1,
                interactive: true,
                title: '<img src="styles/legend/20200706_120855_1.png" /> 20200706_120855'
            });
var format_20200706_122002_2 = new ol.format.GeoJSON();
var features_20200706_122002_2 = format_20200706_122002_2.readFeatures(json_20200706_122002_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20200706_122002_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20200706_122002_2.addFeatures(features_20200706_122002_2);
var lyr_20200706_122002_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20200706_122002_2, 
                style: style_20200706_122002_2,
                interactive: true,
                title: '<img src="styles/legend/20200706_122002_2.png" /> 20200706_122002'
            });
var format_20200706_123047_3 = new ol.format.GeoJSON();
var features_20200706_123047_3 = format_20200706_123047_3.readFeatures(json_20200706_123047_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20200706_123047_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20200706_123047_3.addFeatures(features_20200706_123047_3);
var lyr_20200706_123047_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20200706_123047_3, 
                style: style_20200706_123047_3,
                interactive: true,
                title: '<img src="styles/legend/20200706_123047_3.png" /> 20200706_123047'
            });
var format_20200706_124645_4 = new ol.format.GeoJSON();
var features_20200706_124645_4 = format_20200706_124645_4.readFeatures(json_20200706_124645_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20200706_124645_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20200706_124645_4.addFeatures(features_20200706_124645_4);
var lyr_20200706_124645_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20200706_124645_4, 
                style: style_20200706_124645_4,
                interactive: true,
                title: '<img src="styles/legend/20200706_124645_4.png" /> 20200706_124645'
            });
var format_20200706_125730_5 = new ol.format.GeoJSON();
var features_20200706_125730_5 = format_20200706_125730_5.readFeatures(json_20200706_125730_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20200706_125730_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20200706_125730_5.addFeatures(features_20200706_125730_5);
var lyr_20200706_125730_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20200706_125730_5, 
                style: style_20200706_125730_5,
                interactive: true,
                title: '<img src="styles/legend/20200706_125730_5.png" /> 20200706_125730'
            });
var format_20200706_130926_6 = new ol.format.GeoJSON();
var features_20200706_130926_6 = format_20200706_130926_6.readFeatures(json_20200706_130926_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20200706_130926_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20200706_130926_6.addFeatures(features_20200706_130926_6);
var lyr_20200706_130926_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20200706_130926_6, 
                style: style_20200706_130926_6,
                interactive: true,
                title: '<img src="styles/legend/20200706_130926_6.png" /> 20200706_130926'
            });
var format_20200706_132122_7 = new ol.format.GeoJSON();
var features_20200706_132122_7 = format_20200706_132122_7.readFeatures(json_20200706_132122_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20200706_132122_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20200706_132122_7.addFeatures(features_20200706_132122_7);
var lyr_20200706_132122_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20200706_132122_7, 
                style: style_20200706_132122_7,
                interactive: true,
                title: '<img src="styles/legend/20200706_132122_7.png" /> 20200706_132122'
            });
var format_20200706_133318_8 = new ol.format.GeoJSON();
var features_20200706_133318_8 = format_20200706_133318_8.readFeatures(json_20200706_133318_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20200706_133318_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20200706_133318_8.addFeatures(features_20200706_133318_8);
var lyr_20200706_133318_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20200706_133318_8, 
                style: style_20200706_133318_8,
                interactive: true,
                title: '<img src="styles/legend/20200706_133318_8.png" /> 20200706_133318'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_20200706_120855_1.setVisible(true);lyr_20200706_122002_2.setVisible(true);lyr_20200706_123047_3.setVisible(true);lyr_20200706_124645_4.setVisible(true);lyr_20200706_125730_5.setVisible(true);lyr_20200706_130926_6.setVisible(true);lyr_20200706_132122_7.setVisible(true);lyr_20200706_133318_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_20200706_120855_1,lyr_20200706_122002_2,lyr_20200706_123047_3,lyr_20200706_124645_4,lyr_20200706_125730_5,lyr_20200706_130926_6,lyr_20200706_132122_7,lyr_20200706_133318_8];
lyr_20200706_120855_1.set('fieldAliases', {'name': 'name', });
lyr_20200706_122002_2.set('fieldAliases', {'name': 'name', });
lyr_20200706_123047_3.set('fieldAliases', {'name': 'name', });
lyr_20200706_124645_4.set('fieldAliases', {'name': 'name', });
lyr_20200706_125730_5.set('fieldAliases', {'name': 'name', });
lyr_20200706_130926_6.set('fieldAliases', {'name': 'name', });
lyr_20200706_132122_7.set('fieldAliases', {'name': 'name', });
lyr_20200706_133318_8.set('fieldAliases', {'name': 'name', });
lyr_20200706_120855_1.set('fieldImages', {'name': '', });
lyr_20200706_122002_2.set('fieldImages', {'name': '', });
lyr_20200706_123047_3.set('fieldImages', {'name': '', });
lyr_20200706_124645_4.set('fieldImages', {'name': '', });
lyr_20200706_125730_5.set('fieldImages', {'name': '', });
lyr_20200706_130926_6.set('fieldImages', {'name': '', });
lyr_20200706_132122_7.set('fieldImages', {'name': '', });
lyr_20200706_133318_8.set('fieldImages', {'name': '', });
lyr_20200706_120855_1.set('fieldLabels', {'name': 'no label', });
lyr_20200706_122002_2.set('fieldLabels', {'name': 'no label', });
lyr_20200706_123047_3.set('fieldLabels', {'name': 'no label', });
lyr_20200706_124645_4.set('fieldLabels', {'name': 'no label', });
lyr_20200706_125730_5.set('fieldLabels', {'name': 'no label', });
lyr_20200706_130926_6.set('fieldLabels', {'name': 'no label', });
lyr_20200706_132122_7.set('fieldLabels', {'name': 'no label', });
lyr_20200706_133318_8.set('fieldLabels', {'name': 'no label', });
lyr_20200706_133318_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});