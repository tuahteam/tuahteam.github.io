var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_RisikoIklimLevelKabupatenKotaKlaster_1 = new ol.format.GeoJSON();
var features_RisikoIklimLevelKabupatenKotaKlaster_1 = format_RisikoIklimLevelKabupatenKotaKlaster_1.readFeatures(json_RisikoIklimLevelKabupatenKotaKlaster_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoIklimLevelKabupatenKotaKlaster_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoIklimLevelKabupatenKotaKlaster_1.addFeatures(features_RisikoIklimLevelKabupatenKotaKlaster_1);
var lyr_RisikoIklimLevelKabupatenKotaKlaster_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RisikoIklimLevelKabupatenKotaKlaster_1, 
                style: style_RisikoIklimLevelKabupatenKotaKlaster_1,
                popuplayertitle: 'Risiko Iklim Level Kabupaten/Kota (Klaster)',
                interactive: true,
    title: 'Risiko Iklim Level Kabupaten/Kota (Klaster)<br />\
    <img src="styles/legend/RisikoIklimLevelKabupatenKotaKlaster_1_0.png" /> 1 (Risiko Iklim Sedang)<br />\
    <img src="styles/legend/RisikoIklimLevelKabupatenKotaKlaster_1_1.png" /> 2 (Risiko Iklim Tinggi)<br />\
    <img src="styles/legend/RisikoIklimLevelKabupatenKotaKlaster_1_2.png" /> 3 (Risiko Iklim Rendah)<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_RisikoIklimLevelKabupatenKotaKlaster_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_RisikoIklimLevelKabupatenKotaKlaster_1];
lyr_RisikoIklimLevelKabupatenKotaKlaster_1.set('fieldAliases', {'ADM1_EN': 'Provinsi', 'ADM2_EN': 'Kabupaten/Kota', 'NDBI': 'NDBI', 'NDVI': 'NDVI', 'NDWI': 'NDWI', 'Ketinggian': 'Ketinggian', 'Kemiringan': 'Kemiringan', 'SAVI': 'SAVI', 'Jarak_ke_Sungai': 'Jarak ke Polyline Sungai', 'DSI': 'DSI', 'NDDI': 'NDDI', 'NDMI': 'NDMI', 'NPP': 'NPP', 'VHI': 'VHI', 'Banjir': 'Banjir', 'Kekeringan': 'Kekeringan', 'Risiko_Iklim': 'Risiko Iklim', 'Klaster': 'Klaster', 'Tanaman_Pangan': 'Tanaman Pangan', 'Hortikultura': 'Hortikultura', });
lyr_RisikoIklimLevelKabupatenKotaKlaster_1.set('fieldImages', {'ADM1_EN': 'TextEdit', 'ADM2_EN': 'TextEdit', 'NDBI': 'TextEdit', 'NDVI': 'TextEdit', 'NDWI': 'TextEdit', 'Ketinggian': 'TextEdit', 'Kemiringan': 'TextEdit', 'SAVI': 'TextEdit', 'Jarak_ke_Sungai': 'TextEdit', 'DSI': 'TextEdit', 'NDDI': 'TextEdit', 'NDMI': 'TextEdit', 'NPP': 'TextEdit', 'VHI': 'TextEdit', 'Banjir': 'TextEdit', 'Kekeringan': 'TextEdit', 'Risiko_Iklim': 'TextEdit', 'Klaster': 'TextEdit', 'Tanaman_Pangan': 'TextEdit', 'Hortikultura': 'TextEdit', });
lyr_RisikoIklimLevelKabupatenKotaKlaster_1.set('fieldLabels', {'ADM1_EN': 'inline label - visible with data', 'ADM2_EN': 'inline label - visible with data', 'NDBI': 'inline label - visible with data', 'NDVI': 'inline label - visible with data', 'NDWI': 'inline label - visible with data', 'Ketinggian': 'inline label - visible with data', 'Kemiringan': 'inline label - visible with data', 'SAVI': 'inline label - visible with data', 'Jarak_ke_Sungai': 'inline label - visible with data', 'DSI': 'inline label - visible with data', 'NDDI': 'inline label - visible with data', 'NDMI': 'inline label - visible with data', 'NPP': 'inline label - visible with data', 'VHI': 'inline label - visible with data', 'Banjir': 'inline label - visible with data', 'Kekeringan': 'inline label - visible with data', 'Risiko_Iklim': 'inline label - visible with data', 'Klaster': 'inline label - visible with data', 'Tanaman_Pangan': 'inline label - visible with data', 'Hortikultura': 'inline label - visible with data', });
lyr_RisikoIklimLevelKabupatenKotaKlaster_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});