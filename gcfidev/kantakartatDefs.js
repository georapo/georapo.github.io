/* kuntien extentit ovat aina samassa kuin Map.View eli EPSG:3857 WGS 84 / Pseudo-Mercator */ 

kantakartatDefs = [
['Vantaa', 2754528, 8451886, 2804662, 8489725, 'https://gis.vantaa.fi/geoserver/wms?', 'gis:kantakartta', '3857', '1.3.0'],
['Helsinki', 2756797, 8379567, 2815220, 8471882, 'https://kartta.hel.fi/ws/geoserver/avoindata/wms?', 'avoindata:Kantakartta', '3857', '1.3.0'],
['Espoo', 2725041, 8411363, 2768861, 8483987, 'https://kartat.espoo.fi/teklaogcweb/wms.ashx?', 'Karttayhdistelma', '3857', '1.1.1'],
['Tampere', 2616737, 8722086, 2688569, 8818975, 'https://georaster.tampere.fi/geoserver/ows?', 'kantakartta_EPSG_3067', '3067', '1.3.0'],
['Jyväskylä', 2748894, 8695819, 3004531, 9124998, 'https://kartta.jkl.fi/TeklaOgcWeb/WMS.ashx?', 'Maastokartta', '3857', '1.1.1'], // extent taitaa olla liian iso. cto
['Riihimäki', 2729518, 8542240, 2772192, 8583880, 'https://kartta.riihimaki.fi/teklaogcweb/wms.ashx?', 'Kantakartta', '3857', '1.1.1'],
['Joensuu', 3288203, 8914638, 3449809, 9124998, 'https://kartta.jns.fi/teklaogcweb/WMS.ashx?', 'Kantakartta', '3137', '1.1.1'],
['Kirkkonummi', 2705744, 8389025, 2744039, 8467686, 'https://paikkatieto.kirkkonummi.fi/server/services/kartat/Kirkkonummi_kantakartta/MapServer/WmsServer', '1,2,4,6,8,10,12,13,15,16,18,19,21,23,25,26,28,30,31,39,52,53,55,57,58,60,61,64,66,70,72', 'CRS:84', '1.3.0'],
['Nurmijärvi', 2730176, 8475729, 2780548, 8534705, 'https://kartta.nurmijarvi.fi/TeklaOGCWeb/WMS.ashx?', 'Kantakartta', '3137', '1.1.1'],
['Kuopio', 2984475, 8952216, 3229378, 9233902, 'https://ws.kuopio.fi/wms?', 'kantakartta', '3873', '1.1.1'],
['Lahti', 2782343, 8548108, 2921185, 8661937, 'https://kartta.lahti.fi/teklaogcweb/WMS.ashx?', 'Kantakartta', '3857', '1.1.1'],
['Kokkola', 2508794, 9129065, 2793684, 9380544, 'https://kartta.kokkola.fi/TeklaOgcWeb/WMS.ashx?', 'Kantakartta', '3857', '1.1.1'],
['Lappeenranta', 3084376, 8547874, 3206227, 8692566, 'https://kartta.lappeenranta.fi/TeklaOGCWeb/WMS.ashx?', 'maastokartta', '3857', '1.1.1'],
['Nokia', 2575235, 8701092, 2628807, 8758557, 'http://192.89.47.210/arcgis/services/nokia/Nokia_kantakartta/MapServer/WmsServer?', '1,2,10,11,13,15,17,19,20,22,25,26,28,29,31,32,50,51,60,64,66', '3878', '1.3.0'],
['Hämeenlinna', 2643837, 8568644, 2814156, 8701992, 'https://kartta.hameenlinna.fi/teklaogcweb/wms.ashx?', 'Kantakartta', '3879', '1.1.1'],
['Kauniainen',2739683, 8441122, 2761440, 8454215, 'https://kartat.kauniainen.fi/TeklaOGCweb/WMS.ashx?', 'Kantakartta_ilman_kiinteistoja', '3857', '1.1.1'],
['Kangasala', 2650514, 8697654, 2752740, 8779465, 'https://paikkatietopalvelu.pirnet.fi/arcgis/services/kangasala/kantakartta/MapServer/WmsServer?', 'Maanpinnan_korkeus_pisteet,Korkeuskayrat_pisteet,kkt,Maanpinta_viivat,Maanpinta_pisteet,Vesistot_alueet,Vesistot_viivat,Vesistot_pisteet,Kasvillisuus_viivat,Kasvillisuus_pisteet,Rautatieliikenneverkot_viivat,Rautatieliikenneverkot_pisteet,Nimisto_pisteet,Katu_tie,Kadun_tien_nimi_pieni_teksti,Rakennuksen_nimi,Jarven_lammen_nimi,Tieliikenneverkot_viivat,Tieliikenneverkot_pisteet,Rakenteet_viivat,Rakenteet_pisteet,Pintamerkit_viivat,Pintamerkit_pisteet,Korkeuskayrat,Rakennukset_alueet,Rakennukset_viivat,Rakennukset_tekstit_pisteet', '3878', '1.3.0'],
['Hyvinkää', 2701283, 8511904, 2803414, 8573448, 'https://kartta.hyvinkaa.fi/ows/ows.ashx?', 'Kantakartta_php', '3857', '1.3.0'],
['Rovaniemi', 2735119, 9893286, 3049040, 10219022, 'https://kartta.rovaniemi.fi/teklaogcweb/WMS.ashx?', 'Pohjakartta', '3067', '1.1.1'],  // tausta läpinäkymätön
['Loviisa', 2854231, 2854231, 2976683, 8550440, 'https://kartta.loviisa.fi/TeklaOGCWeb/WMS.ashx?', 'Pohjakartta', '3067', '1.1.1'],
['Kajaani', 3003114, 9375427, 3108904, 9427680, 'https://kartta.kajaani.fi/teklaOGCweb/wms.ashx?', 'Kantakartta', '3857', '1.1.1'],
['Seinäjoki', 2480078, 8929397, 2612948, 9125655,'https://kartat.seinajoki.fi/teklaogcweb/wms.ashx?', 'Kantakartta', '3857', '1.1.1'], // tausta läpinäkymätön
['Hanko', 2530243, 8340329, 2596257, 8389016, 'https://map.hanko.fi/wms/ows.ashx?', 'pohjakartta_mapset', '3878', '1.3.0'],  // tsekkaa extent- louhi ows. sama kuin porvoo
['Uusikaupunki', 2338555, 8503407, 2407759, 8647388, 'https://kartta.uki.fi/TeklaOGCWeb/WMS.ashx?', 'KantakartanMaastotiedot', '3857', '1.1.1'], 
['Huittinen', 2432262, 8592887, 2633832, 8774682, 'https://paikkatieto.karttatiimi.fi/huittinen/wms?', 'huittinen_kantakkartta', '3877', '1.3.0'],
['Turku', 2458289, 8469305, 2511373, 8569112, 'https://opaskartta.turku.fi/TeklaOGCWeb/WMS.ashx?', 'Maastokartta', '3857', '1.1.1'],
['Salo', 2525105, 8396710, 2650988, 8535915, 'https://kartta.salo.fi/TeklaOGCWeb/wms.ashx?', 'Maastokartta', '3857', '1.1.1']  // tausta läpinäkymätön 

];
