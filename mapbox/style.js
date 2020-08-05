
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "ESRISatellite_0": {
            "type": "raster",
            "tiles": ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
            "tileSize": 256
        },
        "Vas_1": {
            "type": "geojson",
            "data": json_Vas_1
        }
                    ,
        "PrediosUrbano_2": {
            "type": "geojson",
            "data": json_PrediosUrbano_2
        }
                    ,
        "Orografia_3": {
            "type": "geojson",
            "data": json_Orografia_3
        }
                    ,
        "LimteSesquil_4": {
            "type": "geojson",
            "data": json_LimteSesquil_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_ESRISatellite_0_0",
            "type": "raster",
            "source": "ESRISatellite_0"
        },
        {
            "id": "lyr_Vas_1_0",
            "type": "line",
            "source": "Vas_1",
            "layout": {},
            "paint": {'line-width': 1.4285714285714286, 'line-opacity': 1.0, 'line-color': '#db1e2a'}
        }
,
        {
            "id": "lyr_PrediosUrbano_2_0",
            "type": "fill",
            "source": "PrediosUrbano_2",
            "layout": {},
            "paint": {'fill-opacity': 0.476, 'fill-color': '#cccccc'}
        }
,
        {
            "id": "lyr_Orografia_3_0",
            "type": "circle",
            "source": "Orografia_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#54b04a', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#3d8035'}
        }
,
        {
            "id": "lyr_LimteSesquil_4_0",
            "type": "line",
            "source": "LimteSesquil_4",
            "layout": {},
            "paint": {'line-width': 3.4285714285714284, 'line-opacity': 1.0, 'line-color': '#f0ed2b'}
        }
],
}