var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_RisikoIklimLevelKecamatan_1 = new ol.format.GeoJSON();
var features_RisikoIklimLevelKecamatan_1 = format_RisikoIklimLevelKecamatan_1.readFeatures(json_RisikoIklimLevelKecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoIklimLevelKecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoIklimLevelKecamatan_1.addFeatures(features_RisikoIklimLevelKecamatan_1);
var lyr_RisikoIklimLevelKecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RisikoIklimLevelKecamatan_1, 
                style: style_RisikoIklimLevelKecamatan_1,
                popuplayertitle: 'Risiko Iklim Level Kecamatan',
                interactive: true,
    title: 'Risiko Iklim Level Kecamatan<br />\
    <img src="styles/legend/RisikoIklimLevelKecamatan_1_0.png" /> 1 (Risiko Iklim Sedang)<br />\
    <img src="styles/legend/RisikoIklimLevelKecamatan_1_1.png" /> 2 (Risiko Iklim Tinggi)<br />\
    <img src="styles/legend/RisikoIklimLevelKecamatan_1_2.png" /> 3 (Risiko Iklim Rendah)<br />' });
var format_BatasKabupatenKota_2 = new ol.format.GeoJSON();
var features_BatasKabupatenKota_2 = format_BatasKabupatenKota_2.readFeatures(json_BatasKabupatenKota_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupatenKota_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupatenKota_2.addFeatures(features_BatasKabupatenKota_2);
var lyr_BatasKabupatenKota_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupatenKota_2, 
                style: style_BatasKabupatenKota_2,
                popuplayertitle: 'Batas Kabupaten/Kota',
                interactive: false,
                title: '<img src="styles/legend/BatasKabupatenKota_2.png" /> Batas Kabupaten/Kota'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_RisikoIklimLevelKecamatan_1.setVisible(true);lyr_BatasKabupatenKota_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_RisikoIklimLevelKecamatan_1,lyr_BatasKabupatenKota_2];
lyr_RisikoIklimLevelKecamatan_1.set('fieldAliases', {'ADM3_EN': 'Kecamatan', 'ADM2_EN': 'Kabupaten/Kota', 'ADM1_EN': 'Provinsi', 'NDBI': 'NDBI', 'NDVI': 'NDVI', 'NDWI': 'NDWI', 'Ketinggian': 'Ketinggian', 'Kemiringan': 'Kemiringan', 'SAVI': 'SAVI', 'Jarak_ke_Sungai': 'Jarak ke Polyline Sungai', 'DSI': 'DSI', 'NDDI': 'NDDI', 'NDMI': 'NDMI', 'NPP': 'NPP', 'VHI': 'VHI', 'Banjir': 'Banjir', 'Kekeringan': 'Kekeringan', 'Risiko_Iklim': 'Risiko Iklim', 'Klaster': 'Klaster', 'Tanaman_Pangan': 'Tanaman Pangan', 'Hortikultura': 'Hortikultura', });
lyr_BatasKabupatenKota_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_RisikoIklimLevelKecamatan_1.set('fieldImages', {'ADM3_EN': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'NDBI': 'TextEdit', 'NDVI': 'TextEdit', 'NDWI': 'TextEdit', 'Ketinggian': 'TextEdit', 'Kemiringan': 'TextEdit', 'SAVI': 'TextEdit', 'Jarak_ke_Sungai': 'TextEdit', 'DSI': 'TextEdit', 'NDDI': 'TextEdit', 'NDMI': 'TextEdit', 'NPP': 'TextEdit', 'VHI': 'TextEdit', 'Banjir': 'TextEdit', 'Kekeringan': 'TextEdit', 'Risiko_Iklim': 'TextEdit', 'Klaster': 'TextEdit', 'Tanaman_Pangan': 'TextEdit', 'Hortikultura': 'TextEdit', });
lyr_BatasKabupatenKota_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'TextEdit', });
lyr_RisikoIklimLevelKecamatan_1.set('fieldLabels', {'ADM3_EN': 'inline label - visible with data', 'ADM2_EN': 'inline label - visible with data', 'ADM1_EN': 'inline label - visible with data', 'NDBI': 'inline label - visible with data', 'NDVI': 'inline label - visible with data', 'NDWI': 'inline label - visible with data', 'Ketinggian': 'inline label - visible with data', 'Kemiringan': 'inline label - visible with data', 'SAVI': 'inline label - visible with data', 'Jarak_ke_Sungai': 'inline label - visible with data', 'DSI': 'inline label - visible with data', 'NDDI': 'inline label - visible with data', 'NDMI': 'inline label - visible with data', 'NPP': 'inline label - visible with data', 'VHI': 'inline label - visible with data', 'Banjir': 'inline label - visible with data', 'Kekeringan': 'inline label - visible with data', 'Risiko_Iklim': 'inline label - visible with data', 'Klaster': 'inline label - visible with data', 'Tanaman_Pangan': 'inline label - visible with data', 'Hortikultura': 'inline label - visible with data', });
lyr_BatasKabupatenKota_2.set('fieldLabels', {'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'ADM2_EN': 'inline label - visible with data', 'ADM2_PCODE': 'inline label - visible with data', 'ADM2_REF': 'inline label - visible with data', 'ADM2ALT1EN': 'inline label - visible with data', 'ADM2ALT2EN': 'inline label - visible with data', 'ADM1_EN': 'inline label - visible with data', 'ADM1_PCODE': 'inline label - visible with data', 'ADM0_EN': 'inline label - visible with data', 'ADM0_PCODE': 'inline label - visible with data', 'date': 'inline label - visible with data', 'validOn': 'inline label - visible with data', 'validTo': 'inline label - visible with data', });
lyr_BatasKabupatenKota_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});