var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_RisikoIklimLevelGridKlaster_1 = new ol.format.GeoJSON();
var features_RisikoIklimLevelGridKlaster_1 = format_RisikoIklimLevelGridKlaster_1.readFeatures(json_RisikoIklimLevelGridKlaster_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoIklimLevelGridKlaster_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoIklimLevelGridKlaster_1.addFeatures(features_RisikoIklimLevelGridKlaster_1);
var lyr_RisikoIklimLevelGridKlaster_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RisikoIklimLevelGridKlaster_1, 
                style: style_RisikoIklimLevelGridKlaster_1,
                popuplayertitle: 'Risiko Iklim Level Grid (Klaster)',
                interactive: true,
    title: 'Risiko Iklim Level Grid (Klaster)<br />\
    <img src="styles/legend/RisikoIklimLevelGridKlaster_1_0.png" /> 1 (Risiko Iklim Sedang)<br />\
    <img src="styles/legend/RisikoIklimLevelGridKlaster_1_1.png" /> 2 (Risiko Iklim Tinggi)<br />\
    <img src="styles/legend/RisikoIklimLevelGridKlaster_1_2.png" /> 3 (Risiko Iklim Rendah)<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_RisikoIklimLevelGridKlaster_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_RisikoIklimLevelGridKlaster_1];
lyr_RisikoIklimLevelGridKlaster_1.set('fieldAliases', {'id': 'id', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'Provinsi', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM2_EN': 'Kabupaten/Kota', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM3_EN': 'Kecamatan', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM4ALT1EN': 'ADM4ALT1EN', 'ADM4ALT2EN': 'ADM4ALT2EN', 'ADM4_EN': 'Desa', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'Shape_Area': 'Shape_Area', 'Shape_Leng': 'Shape_Leng', 'bottom': 'bottom', 'col_index': 'col_index', 'date': 'date', 'left': 'left', 'luas_area': 'luas_area', 'right': 'right', 'row_index': 'row_index', 'top': 'top', 'validOn': 'validOn', 'NDBI': 'NDBI', 'NDVI': 'NDVI', 'NDWI': 'NDWI', 'Elevation': 'Ketinggian', 'Slope': 'Kemiringan', 'SAVI': 'SAVI', 'River_Distance': 'Jarak ke Polyline Sungai', 'DSI': 'DSI', 'NDDI': 'NDDI', 'NDMI': 'NDMI', 'NPP': 'NPP', 'VHI': 'VHI', 'Flood': 'Banjir', 'Drought': 'Kekeringan', 'index': 'Risiko Iklim', 'cluster': 'Klaster', 'Tanaman_Pangan': 'Tanaman Pangan', 'Hortikultura': 'Hortikultura', });
lyr_RisikoIklimLevelGridKlaster_1.set('fieldImages', {'id': 'Range', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM4ALT1EN': 'TextEdit', 'ADM4ALT2EN': 'TextEdit', 'ADM4_EN': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM4_REF': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape_Leng': 'TextEdit', 'bottom': 'TextEdit', 'col_index': 'Range', 'date': 'TextEdit', 'left': 'TextEdit', 'luas_area': 'TextEdit', 'right': 'TextEdit', 'row_index': 'Range', 'top': 'TextEdit', 'validOn': 'TextEdit', 'NDBI': 'TextEdit', 'NDVI': 'TextEdit', 'NDWI': 'TextEdit', 'Elevation': 'TextEdit', 'Slope': 'TextEdit', 'SAVI': 'TextEdit', 'River_Distance': 'TextEdit', 'DSI': 'TextEdit', 'NDDI': 'TextEdit', 'NDMI': 'TextEdit', 'NPP': 'TextEdit', 'VHI': 'TextEdit', 'Flood': 'TextEdit', 'Drought': 'TextEdit', 'index': 'TextEdit', 'cluster': 'TextEdit', 'Tanaman_Pangan': 'TextEdit', 'Hortikultura': 'TextEdit', });
lyr_RisikoIklimLevelGridKlaster_1.set('fieldLabels', {'id': 'inline label - visible with data', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'ADM1_EN': 'inline label - visible with data', 'ADM1_PCODE': 'hidden field', 'ADM2_EN': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM3_EN': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'ADM4ALT1EN': 'hidden field', 'ADM4ALT2EN': 'hidden field', 'ADM4_EN': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'ADM4_REF': 'hidden field', 'Shape_Area': 'hidden field', 'Shape_Leng': 'hidden field', 'bottom': 'hidden field', 'col_index': 'hidden field', 'date': 'hidden field', 'left': 'hidden field', 'luas_area': 'hidden field', 'right': 'hidden field', 'row_index': 'hidden field', 'top': 'hidden field', 'validOn': 'hidden field', 'NDBI': 'inline label - visible with data', 'NDVI': 'inline label - visible with data', 'NDWI': 'inline label - visible with data', 'Elevation': 'inline label - visible with data', 'Slope': 'inline label - visible with data', 'SAVI': 'inline label - visible with data', 'River_Distance': 'inline label - visible with data', 'DSI': 'inline label - visible with data', 'NDDI': 'inline label - visible with data', 'NDMI': 'inline label - visible with data', 'NPP': 'inline label - visible with data', 'VHI': 'inline label - visible with data', 'Flood': 'inline label - visible with data', 'Drought': 'inline label - visible with data', 'index': 'inline label - visible with data', 'cluster': 'inline label - visible with data', 'Tanaman_Pangan': 'inline label - visible with data', 'Hortikultura': 'inline label - visible with data', });
lyr_RisikoIklimLevelGridKlaster_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});