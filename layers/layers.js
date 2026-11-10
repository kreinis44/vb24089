var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_isp_16102024invazivas_sugas_16102024shp_1 = new ol.format.GeoJSON();
var features_isp_16102024invazivas_sugas_16102024shp_1 = format_isp_16102024invazivas_sugas_16102024shp_1.readFeatures(json_isp_16102024invazivas_sugas_16102024shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isp_16102024invazivas_sugas_16102024shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isp_16102024invazivas_sugas_16102024shp_1.addFeatures(features_isp_16102024invazivas_sugas_16102024shp_1);
var lyr_isp_16102024invazivas_sugas_16102024shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_isp_16102024invazivas_sugas_16102024shp_1, 
                style: style_isp_16102024invazivas_sugas_16102024shp_1,
                popuplayertitle: 'isp_16102024/invazivas_sugas_16102024.shp',
                interactive: true,
                title: '<img src="styles/legend/isp_16102024invazivas_sugas_16102024shp_1.png" /> isp_16102024/invazivas_sugas_16102024.shp'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_isp_16102024invazivas_sugas_16102024shp_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_isp_16102024invazivas_sugas_16102024shp_1];
lyr_isp_16102024invazivas_sugas_16102024shp_1.set('fieldAliases', {'lv_name_in': 'lv_name_in', 'latin_name': 'latin_name', 'obs_date': 'obs_date', 'observ_sta': 'observ_sta', 'descriptio': 'descriptio', 'abund_unit': 'abund_unit', 'abundance_': 'abundance_', 'rec_source': 'rec_source', });
lyr_isp_16102024invazivas_sugas_16102024shp_1.set('fieldImages', {'lv_name_in': '', 'latin_name': '', 'obs_date': '', 'observ_sta': '', 'descriptio': '', 'abund_unit': '', 'abundance_': '', 'rec_source': '', });
lyr_isp_16102024invazivas_sugas_16102024shp_1.set('fieldLabels', {'lv_name_in': 'no label', 'latin_name': 'no label', 'obs_date': 'no label', 'observ_sta': 'no label', 'descriptio': 'no label', 'abund_unit': 'no label', 'abundance_': 'no label', 'rec_source': 'no label', });
lyr_isp_16102024invazivas_sugas_16102024shp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});