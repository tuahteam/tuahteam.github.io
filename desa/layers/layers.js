var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_RisikoIklimLevelDesaKlaster_1 = new ol.format.GeoJSON();
var features_RisikoIklimLevelDesaKlaster_1 = format_RisikoIklimLevelDesaKlaster_1.readFeatures(json_RisikoIklimLevelDesaKlaster_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoIklimLevelDesaKlaster_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoIklimLevelDesaKlaster_1.addFeatures(features_RisikoIklimLevelDesaKlaster_1);
var lyr_RisikoIklimLevelDesaKlaster_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RisikoIklimLevelDesaKlaster_1, 
                style: style_RisikoIklimLevelDesaKlaster_1,
                popuplayertitle: 'Risiko Iklim Level Desa (Klaster)',
                interactive: true,
    title: 'Risiko Iklim Level Desa (Klaster)<br />\
    <img src="styles/legend/RisikoIklimLevelDesaKlaster_1_0.png" /> 1 (Risiko Iklim Sedang)<br />\
    <img src="styles/legend/RisikoIklimLevelDesaKlaster_1_1.png" /> 2 (Risiko Iklim Tinggi)<br />\
    <img src="styles/legend/RisikoIklimLevelDesaKlaster_1_2.png" /> 3 (Risiko Iklim Rendah)<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_RisikoIklimLevelDesaKlaster_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_RisikoIklimLevelDesaKlaster_1];
lyr_RisikoIklimLevelDesaKlaster_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM4_EN': 'Desa', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'ADM4ALT1EN': 'ADM4ALT1EN', 'ADM4ALT2EN': 'ADM4ALT2EN', 'ADM3_EN': 'Kecamatan', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'Kabupaten/Kota', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'Provinsi', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'NDBI': 'NDBI', 'NDVI': 'NDVI', 'NDWI': 'NDWI', 'Ketinggian': 'Ketinggian', 'Kemiringan': 'Kemiringan', 'SAVI': 'SAVI', 'Jarak_ke_Sungai': 'Jarak ke Sungai', 'DSI': 'DSI', 'NDDI': 'NDDI', 'NDMI': 'NDMI', 'NPP': 'NPP', 'VHI': 'VHI', 'Banjir': 'Banjir', 'Kekeringan': 'Kekeringan', 'Risiko_Iklim': 'Risiko_Iklim', 'Klaster': 'Klaster', 'Tanaman_Pangan': 'Tanaman_Pangan', 'Hortikultura': 'Hortikultura', });
lyr_RisikoIklimLevelDesaKlaster_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM4_EN': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM4_REF': 'TextEdit', 'ADM4ALT1EN': 'TextEdit', 'ADM4ALT2EN': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'TextEdit', 'NDBI': 'TextEdit', 'NDVI': 'TextEdit', 'NDWI': 'TextEdit', 'Ketinggian': 'TextEdit', 'Kemiringan': 'TextEdit', 'SAVI': 'TextEdit', 'Jarak_ke_Sungai': 'TextEdit', 'DSI': 'TextEdit', 'NDDI': 'TextEdit', 'NDMI': 'TextEdit', 'NPP': 'TextEdit', 'VHI': 'TextEdit', 'Banjir': 'TextEdit', 'Kekeringan': 'TextEdit', 'Risiko_Iklim': 'TextEdit', 'Klaster': 'TextEdit', 'Tanaman_Pangan': 'TextEdit', 'Hortikultura': 'TextEdit', });
lyr_RisikoIklimLevelDesaKlaster_1.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ADM4_EN': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'ADM4_REF': 'hidden field', 'ADM4ALT1EN': 'hidden field', 'ADM4ALT2EN': 'hidden field', 'ADM3_EN': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'ADM2_EN': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM1_EN': 'inline label - visible with data', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', 'NDBI': 'inline label - visible with data', 'NDVI': 'inline label - visible with data', 'NDWI': 'inline label - visible with data', 'Ketinggian': 'inline label - visible with data', 'Kemiringan': 'inline label - visible with data', 'SAVI': 'inline label - visible with data', 'Jarak_ke_Sungai': 'inline label - visible with data', 'DSI': 'inline label - visible with data', 'NDDI': 'inline label - visible with data', 'NDMI': 'inline label - visible with data', 'NPP': 'inline label - visible with data', 'VHI': 'inline label - visible with data', 'Banjir': 'inline label - visible with data', 'Kekeringan': 'inline label - visible with data', 'Risiko_Iklim': 'inline label - visible with data', 'Klaster': 'inline label - visible with data', 'Tanaman_Pangan': 'inline label - visible with data', 'Hortikultura': 'inline label - visible with data', });
lyr_RisikoIklimLevelDesaKlaster_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});