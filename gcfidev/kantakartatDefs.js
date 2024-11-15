/* kuntien extentit ovat aina samassa kuin Map.View eli EPSG:3857 WGS 84 / Pseudo-Mercator */ 

kantakartatDefs = [
['Helsinki', 2756797, 8379567, 2815220, 8471882, 'https://kartta.hel.fi/ws/geoserver/avoindata/wms?', 'avoindata:Kantakartta', '3857', '1.3.0'],
['Vantaa', 2754528, 8451886, 2804662, 8489725, 'https://gis.vantaa.fi/geoserver/wms?', 'taustakartta:kaupunkikartta', '3857', '1.3.0'],
['Espoo', 2725041, 8411363, 2768861, 8483987, 'https://kartat.espoo.fi/teklaogcweb/wms.ashx?', 'Karttayhdistelma', '3857', '1.1.1'],
//['Tampere', 2616737, 8722086, 2688569, 8818975, 'https://georaster.tampere.fi/geoserver/ows?', 'kantakartta_EPSG_3067', '3067', '1.3.0'],
['Tampere', 2616737, 8722086, 2688569, 8818975, 'https://georaster.tampere.fi/geoserver/ows?', 'virastokartta_vari_EPSG_3067', '3067', '1.3.0'],
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
['Loviisa', 2854231, 2854231, 2976683, 8550440, 'https://kartta.loviisa.fi/TeklaOGCWeb/WMS.ashx?', 'Pohjakartta', '3067', '1.1.1'], //liian iso extent
['Kajaani', 3003114, 9375427, 3108904, 9427680, 'https://kartta.kajaani.fi/teklaOGCweb/wms.ashx?', 'Kantakartta', '3857', '1.1.1'],
['Seinäjoki', 2480078, 8929397, 2612948, 9125655,'https://kartat.seinajoki.fi/teklaogcweb/wms.ashx?', 'Kantakartta', '3857', '1.1.1'], // tausta läpinäkymätön
['Hanko', 2530243, 8340329, 2596257, 8389016, 'https://map.hanko.fi/wms/ows.ashx?', 'pohjakartta_mapset', '3878', '1.3.0'],  // tsekkaa extent- louhi ows. sama kuin porvoo
['Uusikaupunki', 2338555, 8503407, 2407759, 8647388, 'https://kartta.uki.fi/TeklaOGCWeb/WMS.ashx?', 'KantakartanMaastotiedot', '3857', '1.1.1'], 
['Huittinen', 2432262, 8592887, 2633832, 8774682, 'https://paikkatieto.karttatiimi.fi/huittinen/wms?', 'huittinen_kantakkartta', '3877', '1.3.0'],
['Turku', 2458289, 8469305, 2511373, 8569112, 'https://opaskartta.turku.fi/TeklaOGCWeb/WMS.ashx?', 'Maastokartta', '3857', '1.1.1'],
['Salo', 2525105, 8396710, 2650988, 8535915, 'https://kartta.salo.fi/TeklaOGCWeb/wms.ashx?', 'Maastokartta', '3857', '1.1.1']  // tausta läpinäkymätön 
];

ortokartatDefs = [
['Helsinki', 2756797, 8401521, 2815220, 8471882, 'https://kartta.hel.fi/ws/geoserver/avoindata/wms?', 'avoindata:Ortoilmakuva', '3857', '1.3.0'],
['Vantaa', 2752693, 8451669, 2805202, 8490065, 'https://gis.vantaa.fi/geoserver/wms?', 'taustakartta:ortokuva_2019', '3857', '1.3.0'],
['Turku', 2340886, 8332655, 2580867, 8606257, 'https://opaskartta.turku.fi/TeklaOGCWeb/WMS.ashx?', 'Ilmakuva', '3857', '1.1.1'],
['Espoo', 2725057, 8409362, 2772886, 8492083, 'https://kartat.espoo.fi/teklaogcweb/wms.ashx?', 'Ortokartta', '3857', '1.1.1']
];


kuntarajat1000k = [
   ['Helsinki',
                [
					[ 2811139, 8466264 ],
					[ 2811318, 8465762 ],
					[ 2811250, 8464505 ],
					[ 2810134, 8463439 ],
					[ 2810163, 8461970 ],
					[ 2811072, 8461388 ],
					[ 2810918, 8460887 ],
					[ 2809130, 8460538 ],
					[ 2808295, 8458101 ],
					[ 2809420, 8457016 ],
					[ 2809806, 8454783 ],
					[ 2808174, 8453306 ],
					[ 2805740, 8451100 ],
					[ 2805410, 8448480 ],
					[ 2807523, 8444342 ],
					[ 2804607, 8432462 ],
					[ 2802667, 8420583 ],
					[ 2800638, 8386937 ],
					[ 2776564, 8382501 ],
					[ 2758809, 8422027 ],
					[ 2764694, 8428830 ],
					[ 2765667, 8436696 ],
					[ 2765487, 8443451 ],
					[ 2765868, 8446769 ],
					[ 2766074, 8448568 ],
					[ 2765389, 8449151 ],
					[ 2764219, 8456519 ],
					[ 2765025, 8457650 ],
					[ 2767159, 8456419 ],
					[ 2768785, 8456539 ],
					[ 2771057, 8459768 ],
					[ 2773965, 8460864 ],
					[ 2774950, 8461235 ],
					[ 2776937, 8461984 ],
					[ 2778118, 8461521 ],
					[ 2779189, 8459269 ],
					[ 2780274, 8458969 ],
					[ 2780465, 8459774 ],
					[ 2781016, 8462099 ],
					[ 2783004, 8463761 ],
					[ 2785315, 8464435 ],
					[ 2788931, 8461448 ],
					[ 2791519, 8461343 ],
					[ 2792784, 8460377 ],
					[ 2792164, 8455542 ],
					[ 2793159, 8454529 ],
					[ 2798109, 8452745 ],
					[ 2800785, 8455344 ],
					[ 2800444, 8456622 ],
					[ 2799087, 8457682 ],
					[ 2798854, 8460048 ],
					[ 2803877, 8462316 ],
					[ 2804166, 8463618 ],
					[ 2804837, 8462783 ],
					[ 2806738, 8464616 ],
					[ 2808537, 8466349 ],
					[ 2811139, 8466264 ]
				]			
   ],
   ['Vantaa',
                [
					[ 2768370, 8489347 ],
					[ 2768250, 8488184 ],
					[ 2769264, 8485896 ],
					[ 2772519, 8481481 ],
					[ 2772623, 8481340 ],
					[ 2777932, 8474129 ],
					[ 2781207, 8474236 ],
					[ 2783420, 8474308 ],
					[ 2787178, 8476345 ],
					[ 2788356, 8477689 ],
					[ 2788467, 8477816 ],
					[ 2785345, 8482099 ],
					[ 2786472, 8482936 ],
					[ 2788462, 8482694 ],
					[ 2790157, 8482487 ],
					[ 2790390, 8482619 ],
					[ 2790640, 8482761 ],
					[ 2791474, 8483233 ],
					[ 2792405, 8483077 ],
					[ 2793048, 8481746 ],
					[ 2795829, 8480455 ],
					[ 2799878, 8480166 ],
					[ 2797953, 8477738 ],
					[ 2799953, 8477206 ],
					[ 2799910, 8475887 ],
					[ 2798932, 8474781 ],
					[ 2797280, 8474682 ],
					[ 2796062, 8474840 ],
					[ 2794363, 8474758 ],
					[ 2798088, 8471438 ],
					[ 2801869, 8469416 ],
					[ 2804480, 8465093 ],
					[ 2804166, 8463618 ],
					[ 2803877, 8462316 ],
					[ 2798854, 8460048 ],
					[ 2799087, 8457682 ],
					[ 2800444, 8456622 ],
					[ 2800785, 8455344 ],
					[ 2798109, 8452745 ],
					[ 2793159, 8454529 ],
					[ 2792164, 8455542 ],
					[ 2792784, 8460377 ],
					[ 2791519, 8461343 ],
					[ 2788931, 8461448 ],
					[ 2785315, 8464435 ],
					[ 2783004, 8463761 ],
					[ 2781016, 8462099 ],
					[ 2780465, 8459774 ],
					[ 2780274, 8458969 ],
					[ 2779189, 8459269 ],
					[ 2778118, 8461521 ],
					[ 2776937, 8461984 ],
					[ 2774950, 8461235 ],
					[ 2773965, 8460864 ],
					[ 2771057, 8459768 ],
					[ 2768785, 8456539 ],
					[ 2767159, 8456419 ],
					[ 2765025, 8457650 ],
					[ 2764219, 8456519 ],
					[ 2759026, 8453704 ],
					[ 2756821, 8460375 ],
					[ 2757584, 8466662 ],
					[ 2756374, 8472538 ],
					[ 2754738, 8471841 ],
					[ 2755078, 8476228 ],
					[ 2764114, 8488088 ],
					[ 2768398, 8489620 ],
					[ 2768370, 8489347 ]
				]
   ]
]
				
				