const appData = {
    data: {
        pendingMove: {
            title: "Planerad flytt",
            subtitle: "",
            descriptionLines: [
                "Planerad adress: Östra järnvägsgatan 13, Moheda",
                "Status: Tillbaka till tidigare adress"
            ],
            image: "images/moves/ostra-jarnvagsgatan-13.jpg",
            alt: "Planerad flytt till Östra järnvägsgatan 13, Moheda",
            side: "left",
            timeLabel: "Pending"
        },
        predictedMove: {
            title: "Framtida förutspådd flytt",
            predicted_move_date: "2026-12",
            predicted_move_label_sv: "december 2026",
            predicted_latitude: 56.867993254013086,
            predicted_longitude: 14.823492950859844,
            prediction_method: "average_move_gap_and_coordinate_regression",
            side: "right"
        },
        previousMoves: [
            {
                title: "Wieselgrensgatan",
                subtitle: "Växjö - Oktober 2025",
                location: "Växjö",
                month: "Oktober",
                year: 2025,
                addressQuery: "Wieselgrensgatan 20 Vaxjo",
                lat: 56.880207,
                lon: 14.7913378,
                details: [
                    "Bostadstyp: Villa",
                    "Områdets byggperiod: 1930- och 1940-tal",
                    "Boarea: 172 m²",
                    "Uppskattat värde: 2,300,000 - 3,600,000 SEK"
                ],
                image: "images/moves/wieselgrensgatan.jpg",
                alt: "Hus på Wieselgrensgatan, Växjö",
                currentLocation: true,
                side: "right"
            },
            {
                title: "Långa gatan",
                subtitle: "Växjö - September 2025",
                location: "Växjö",
                month: "September",
                year: 2025,
                addressQuery: "Langa gatan 2 Vaxjo",
                lat: 56.8648229,
                lon: 14.7973714,
                details: [
                    "Bostadstyp: Flerbostadshus",
                    "Områdets byggperiod: 2000-tal",
                    "Boarea: Ej tillgängligt",
                    "Uppskattat värde: Ej tillgängligt"
                ],
                image: "images/moves/langa-gatan.jpg",
                alt: "Hus på Långa gatan, Växjö",
                side: "left"
            },
            {
                title: "Falkgatan",
                subtitle: "Växjö - Oktober 2024",
                location: "Växjö",
                month: "Oktober",
                year: 2024,
                addressQuery: "Falkgatan 8 Vaxjo",
                lat: 56.8837641,
                lon: 14.7946495,
                details: [
                    "Bostadstyp: Villa (byggd 1946)",
                    "Områdets byggperiod: 1930- och 1940-tal",
                    "Boarea: 225 m²",
                    "Uppskattat värde: 5,100,000 - 7,800,000 SEK"
                ],
                image: "images/moves/falkgatan.jpg",
                alt: "Hus på Falkgatan, Växjö",
                side: "right"
            },
            {
                title: "Östra järnvägsgatan 13",
                subtitle: "Moheda - november 2022",
                location: "Moheda",
                month: "november",
                year: 2022,
                addressQuery: "Ostra jarnvagsgatan 13 Moheda",
                lat: 57.005817,
                lon: 14.5773502,
                details: [
                    "Bostadstyp: Villa (byggd 1910)",
                    "Områdets byggperiod: 1960- och 1970-tal",
                    "Boarea: 83 m²",
                    "Uppskattat värde: Ej tillgängligt"
                ],
                image: "images/moves/ostra-jarnvagsgatan-13.jpg",
                alt: "Hus på Östra järnvägsgatan 13, Moheda",
                side: "left"
            },
            {
                title: "Ör 1",
                subtitle: "Ör - december 2021",
                location: "Ör",
                month: "december",
                year: 2021,
                addressQuery: "Or 1 Or",
                lat: 56.989973,
                lon: 14.6615856,
                details: [
                    "Bostadstyp: Villa",
                    "Områdets byggperiod: 1950- och 1960-tal",
                    "Boarea: 87 m²",
                    "Uppskattat värde: Ej tillgängligt"
                ],
                image: "images/moves/or-1.jpg",
                alt: "Hus på Ör 1, Ör",
                side: "right"
            },
            {
                title: "Östra järnvägsgatan 17",
                subtitle: "Moheda - september 2020",
                location: "Moheda",
                month: "september",
                year: 2020,
                addressQuery: "Ostra jarnvagsgatan 17 Moheda",
                lat: 57.0068318,
                lon: 14.5772772,
                details: [
                    "Bostadstyp: Villa (byggd 1947)",
                    "Områdets byggperiod: 1950- och 1960-tal",
                    "Boarea: 120 m²",
                    "Uppskattat värde: Ej tillgängligt"
                ],
                image: "images/moves/ostra-jarnvagsgatan-17.jpg",
                alt: "Hus på Östra järnvägsgatan 17, Moheda",
                side: "left"
            },
            {
                title: "Humlevägen",
                subtitle: "Torpsbruk - Oktober 2018",
                location: "Torpsbruk",
                month: "Oktober",
                year: 2018,
                addressQuery: "Humlevagen 28 Torpsbruk",
                lat: 57.0285612,
                lon: 14.569238,
                details: [
                    "Bostadstyp: Villa (byggd 1981)",
                    "Områdets byggperiod: 1970- och 1980-tal",
                    "Boarea: 158 m²",
                    "Uppskattat värde: Ej tillgängligt"
                ],
                image: "images/moves/humlevagen.jpg",
                alt: "Hus på Humlevägen, Torpsbruk",
                side: "right"
            },
            {
                title: "Härlöv 2",
                subtitle: "Härlöv - ? 2017",
                location: "Härlöv",
                month: "?",
                year: 2017,
                addressQuery: "Harlov 2 Harlov",
                lat: 56.9647916,
                lon: 14.6393731,
                details: [
                    "Bostadstyp: Ej tillgängligt",
                    "Områdets byggperiod: 1930- och 1940-tal",
                    "Boarea: Ej tillgängligt",
                    "Uppskattat värde: Ej tillgängligt"
                ],
                image: "images/moves/harlov-2.jpg",
                alt: "Hus på Härlöv 2, Härlöv",
                side: "left"
            },
            {
                title: "Östra Järnvägsgatan 15",
                subtitle: "Torpsbruk - ? 2016",
                location: "Torpsbruk",
                month: "?",
                year: 2016,
                addressQuery: "Ostra Jarnvagsgatan 15 Torpsbruk",
                lat: 57.0342151,
                lon: 14.5767141,
                details: [
                    "Bostadstyp: Villa (byggd 1933)",
                    "Områdets byggperiod: 1930- och 1950-tal",
                    "Boarea: 105 m²",
                    "Uppskattat värde: Ej tillgängligt"
                ],
                image: "images/moves/ostra-jarnvagsgatan-15.jpg",
                alt: "Hus på Östra Järnvägsgatan 15, Torpsbruk",
                side: "right"
            },
            {
                title: "Kungsvägen 61",
                subtitle: "Växjö - ? 2015",
                location: "Växjö",
                month: "?",
                year: 2015,
                addressQuery: "Kungsvagen 61 Vaxjo",
                lat: 56.8886597,
                lon: 14.8051711,
                details: [
                    "Bostadstyp: Flerbostadshus",
                    "Områdets byggperiod: 1960- och 1990-tal",
                    "Boarea: Ej tillgängligt",
                    "Uppskattat värde: Ej tillgängligt"
                ],
                image: "images/moves/kungsvagen-61.jpg",
                alt: "Hus på Kungsvägen 61, Växjö",
                side: "left"
            },
            {
                title: "Östra Järnvägsgatan 15",
                subtitle: "Torpsbruk - ? 2014",
                location: "Torpsbruk",
                month: "?",
                year: 2014,
                addressQuery: "Ostra Jarnvagsgatan 15 Torpsbruk",
                lat: 57.0342151,
                lon: 14.5767141,
                details: [
                    "Bostadstyp: Villa (byggd 1933)",
                    "Områdets byggperiod: 1930- och 1950-tal",
                    "Boarea: 105 m²",
                    "Uppskattat värde: Ej tillgängligt"
                ],
                image: "images/moves/ostra-jarnvagsgatan-15.jpg",
                alt: "Hus på Östra Järnvägsgatan 15, Torpsbruk",
                side: "right"
            },
            {
                title: "Bergsgatan",
                subtitle: "Moheda - ? 2013",
                location: "Moheda",
                month: "?",
                year: 2013,
                addressQuery: "Bergsgatan 7 Moheda",
                lat: 57.0050563,
                lon: 14.5803166,
                details: [
                    "Bostadstyp: Villa (byggd 1957)",
                    "Områdets byggperiod: 1960- och 1970-tal",
                    "Boarea: 105 m²",
                    "Uppskattat värde: 1,300,000 - 2,200,000 SEK"
                ],
                image: "images/moves/bergsgatan.jpg",
                alt: "Hus på Bergsgatan, Moheda",
                side: "left"
            }
        ]
    },
    dataSources: {
        hitta: [
            { "address_query": "Wieselgrensgatan 20 Vaxjo", "display_address": "Wieselgrensgatan 20, Vaxjo", "property_type": "Villa", "area_build_era": "1930s and 1940s", "living_area_m2": 172, "estimated_value_low_kr": 2300000, "estimated_value_high_kr": 3600000, "source_url": "https://www.hitta.se/omr%C3%A5de/56.8805:14.790417" },
            { "address_query": "Langa gatan 2 Vaxjo", "display_address": "Langa Gatan 2G, Vaxjo", "property_type": "Apartment building (multi-family)", "area_build_era": "2000s", "living_area_m2": null, "estimated_value_low_kr": null, "estimated_value_high_kr": null, "source_url": "https://www.hitta.se/omr%C3%A5de/56.864655:14.7977" },
            { "address_query": "Falkgatan 8 Vaxjo", "display_address": "Falkgatan 8, Vaxjo", "property_type": "Villa (built 1946)", "area_build_era": "1930s and 1940s", "living_area_m2": 225, "estimated_value_low_kr": 5100000, "estimated_value_high_kr": 7800000, "source_url": "https://www.hitta.se/omr%C3%A5de/56.883724:14.794808" },
            { "address_query": "Ostra jarnvagsgatan 13 Moheda", "display_address": "Ostra Jarnvagsgatan 13, Moheda", "property_type": "Villa (built 1910)", "area_build_era": "1960s and 1970s", "living_area_m2": 83, "estimated_value_low_kr": null, "estimated_value_high_kr": null, "source_url": "https://www.hitta.se/omr%C3%A5de/57.00584:14.57704" },
            { "address_query": "Or 1 Or", "display_address": "Or Stromsborg 1, Or", "property_type": "Villa", "area_build_era": "1950s and 1960s", "living_area_m2": 87, "estimated_value_low_kr": null, "estimated_value_high_kr": null, "source_url": "https://www.hitta.se/omr%C3%A5de/56.971306:14.712307" },
            { "address_query": "Ostra jarnvagsgatan 17 Moheda", "display_address": "Ostra Jarnvagsgatan 17, Moheda", "property_type": "Villa (built 1947)", "area_build_era": "1950s and 1960s", "living_area_m2": 120, "estimated_value_low_kr": null, "estimated_value_high_kr": null, "source_url": "https://www.hitta.se/omr%C3%A5de/57.006874:14.577088" },
            { "address_query": "Humlevagen 28 Torpsbruk", "display_address": "Humblevagen 28, Torpsbruk", "property_type": "Villa (built 1981)", "area_build_era": "1970s and 1980s", "living_area_m2": 158, "estimated_value_low_kr": null, "estimated_value_high_kr": null, "source_url": "https://www.hitta.se/omr%C3%A5de/57.0285:14.569046" },
            { "address_query": "Harlov 2 Harlov", "display_address": "Harlov 2", "property_type": null, "area_build_era": "1930s and 1940s", "living_area_m2": null, "estimated_value_low_kr": null, "estimated_value_high_kr": null, "source_url": "https://www.hitta.se/omr%C3%A5de/56.95712:14.636159" },
            { "address_query": "Ostra Jarnvagsgatan 15 Torpsbruk", "display_address": "Ostra Jarnvagsgatan 15, Torpsbruk", "property_type": "Villa (built 1933)", "area_build_era": "1930s and 1950s", "living_area_m2": 105, "estimated_value_low_kr": null, "estimated_value_high_kr": null, "source_url": "https://www.hitta.se/omr%C3%A5de/57.034237:14.576926" },
            { "address_query": "Kungsvagen 61 Vaxjo", "display_address": "Kungsvagen 61A, Vaxjo", "property_type": "Apartment building (multi-family)", "area_build_era": "1960s and 1990s", "living_area_m2": null, "estimated_value_low_kr": null, "estimated_value_high_kr": null, "source_url": "https://www.hitta.se/omr%C3%A5de/56.888546:14.805063" },
            { "address_query": "Bergsgatan 7 Moheda", "display_address": "Bergsgatan 7, Moheda", "property_type": "Villa (built 1957)", "area_build_era": "1960s and 1970s", "living_area_m2": 105, "estimated_value_low_kr": 1300000, "estimated_value_high_kr": 2200000, "source_url": "https://www.hitta.se/omr%C3%A5de/57.005165:14.580551" }
        ],
        nominatim: [
            { "address_query": "Wieselgrensgatan 20 Vaxjo", "display_address": "Wieselgrensgatan 20, Vaxjo", "lat": 56.8805, "lon": 14.790417, "osm_type": "node", "osm_id": 13001704533, "category": "amenity", "type": "parcel_locker", "road": "Wieselgrensgatan", "house_number": "5C", "suburb": "Väster", "city": "Växjö", "municipality": "Växjö kommun", "county": "Kronobergs län", "postcode": "352 36", "country": "Sverige", "display_name": "PAKETBOX WIESELGRENSGATAN, 5C, Wieselgrensgatan, Väster, Växjö, Växjö kommun, Kronobergs län, 352 36, Sverige" },
            { "address_query": "Langa gatan 2 Vaxjo", "display_address": "Langa Gatan 2G, Vaxjo", "lat": 56.864655, "lon": 14.7977, "osm_type": "way", "osm_id": 15572607, "category": "highway", "type": "residential", "road": "Långa Gatan", "house_number": null, "suburb": "Söder", "city": "Växjö", "municipality": "Växjö kommun", "county": "Kronobergs län", "postcode": "352 35", "country": "Sverige", "display_name": "Långa Gatan, Biskopshagen, Söder, Växjö, Växjö kommun, Kronobergs län, 352 35, Sverige" },
            { "address_query": "Falkgatan 8 Vaxjo", "display_address": "Falkgatan 8, Vaxjo", "lat": 56.883724, "lon": 14.794808, "osm_type": "way", "osm_id": 15807606, "category": "highway", "type": "residential", "road": "Falkgatan", "house_number": null, "suburb": "Väster", "city": "Växjö", "municipality": "Växjö kommun", "county": "Kronobergs län", "postcode": "352 26", "country": "Sverige", "display_name": "Falkgatan, Väster, Växjö, Växjö kommun, Kronobergs län, 352 26, Sverige" },
            { "address_query": "Ostra jarnvagsgatan 13 Moheda", "display_address": "Ostra Jarnvagsgatan 13, Moheda", "lat": 57.00584, "lon": 14.57704, "osm_type": "way", "osm_id": 169426318, "category": "highway", "type": "tertiary", "road": "Östra Järnvägsgatan", "house_number": null, "suburb": null, "city": "Moheda", "municipality": "Alvesta kommun", "county": "Kronobergs län", "postcode": "342 62", "country": "Sverige", "display_name": "Östra Järnvägsgatan, Moheda, Alvesta kommun, Kronobergs län, 342 62, Sverige" },
            { "address_query": "Or 1 Or", "display_address": "Or Stromsborg 1, Or", "lat": 56.971306, "lon": 14.712307, "osm_type": "way", "osm_id": 171544758, "category": "highway", "type": "primary", "road": "Växjövägen", "house_number": null, "suburb": null, "city": "Växjö", "municipality": "Växjö kommun", "county": "Kronobergs län", "postcode": null, "country": "Sverige", "display_name": "Växjövägen, Svanelund, Växjö, Växjö kommun, Kronobergs län, Sverige" },
            { "address_query": "Ostra jarnvagsgatan 17 Moheda", "display_address": "Ostra Jarnvagsgatan 17, Moheda", "lat": 57.006874, "lon": 14.577088, "osm_type": "way", "osm_id": 120136037, "category": "highway", "type": "residential", "road": "Östra Järnvägsgatan", "house_number": null, "suburb": null, "city": "Moheda", "municipality": "Alvesta kommun", "county": "Kronobergs län", "postcode": "342 62", "country": "Sverige", "display_name": "Östra Järnvägsgatan, Nyekvarn, Moheda, Alvesta kommun, Kronobergs län, 342 62, Sverige" },
            { "address_query": "Humlevagen 28 Torpsbruk", "display_address": "Humblevagen 28, Torpsbruk", "lat": 57.0285, "lon": 14.569046, "osm_type": "way", "osm_id": 120137123, "category": "highway", "type": "residential", "road": "Humblevägen", "house_number": null, "suburb": null, "city": "Torpsbruk", "municipality": "Alvesta kommun", "county": "Kronobergs län", "postcode": "342 62", "country": "Sverige", "display_name": "Humblevägen, Östanåkra, Torpsbruk, Alvesta kommun, Kronobergs län, 342 62, Sverige" },
            { "address_query": "Harlov 2 Harlov", "display_address": "Harlov 2", "lat": 56.95712, "lon": 14.636159, "osm_type": "way", "osm_id": 169426306, "category": "highway", "type": "tertiary", "road": "G 736", "house_number": null, "suburb": null, "city": null, "municipality": "Alvesta kommun", "county": "Kronobergs län", "postcode": "342 92", "country": "Sverige", "display_name": "G 736, Nederåsen, Alvesta kommun, Kronobergs län, 342 92, Sverige" },
            { "address_query": "Ostra Jarnvagsgatan 15 Torpsbruk", "display_address": "Ostra Jarnvagsgatan 15, Torpsbruk", "lat": 57.034237, "lon": 14.576926, "osm_type": "way", "osm_id": 120137125, "category": "highway", "type": "residential", "road": "Östra Järnvägsgatan", "house_number": null, "suburb": "Notteryd", "city": "Torpsbruk", "municipality": "Alvesta kommun", "county": "Kronobergs län", "postcode": "342 62", "country": "Sverige", "display_name": "Östra Järnvägsgatan, Notteryd, Torpsbruk, Alvesta kommun, Kronobergs län, 342 62, Sverige" },
            { "address_query": "Kungsvagen 61 Vaxjo", "display_address": "Kungsvagen 61A, Vaxjo", "lat": 56.888546, "lon": 14.805063, "osm_type": "way", "osm_id": 151731923, "category": "highway", "type": "residential", "road": "Kungsvägen", "house_number": null, "suburb": "Hov", "city": "Växjö", "municipality": "Växjö kommun", "county": "Kronobergs län", "postcode": "352 38", "country": "Sverige", "display_name": "Kungsvägen, Hovskulle, Hov, Växjö, Växjö kommun, Kronobergs län, 352 38, Sverige" },
            { "address_query": "Bergsgatan 7 Moheda", "display_address": "Bergsgatan 7, Moheda", "lat": 57.005165, "lon": 14.580551, "osm_type": "way", "osm_id": 120136044, "category": "highway", "type": "residential", "road": "Skogsgatan", "house_number": null, "suburb": null, "city": "Moheda", "municipality": "Alvesta kommun", "county": "Kronobergs län", "postcode": "342 62", "country": "Sverige", "display_name": "Skogsgatan, Moheda, Alvesta kommun, Kronobergs län, 342 62, Sverige" }
        ],
        overpass: [
            { "address_query": "Wieselgrensgatan 20 Vaxjo", "display_address": "Wieselgrensgatan 20, Vaxjo", "query_lat": 56.8805, "query_lon": 14.790417, "nearby_building_count_120m": 8, "nearest_building_distance_m": 3.2, "nearest_osm_element_type": "way", "nearest_osm_element_id": 220560442, "nearest_building_tag": "yes", "nearest_building_levels": null, "nearest_start_date": null, "nearest_building_use": null, "nearest_roof_shape": null, "nearest_addr_street": null, "nearest_addr_housenumber": null },
            { "address_query": "Langa gatan 2 Vaxjo", "display_address": "Langa Gatan 2G, Vaxjo", "query_lat": 56.864655, "query_lon": 14.7977, "nearby_building_count_120m": 10, "nearest_building_distance_m": 6.5, "nearest_osm_element_type": "way", "nearest_osm_element_id": 218780793, "nearest_building_tag": "yes", "nearest_building_levels": null, "nearest_start_date": null, "nearest_building_use": null, "nearest_roof_shape": null, "nearest_addr_street": null, "nearest_addr_housenumber": null },
            { "address_query": "Falkgatan 8 Vaxjo", "display_address": "Falkgatan 8, Vaxjo", "query_lat": 56.883724, "query_lon": 14.794808, "nearby_building_count_120m": 6, "nearest_building_distance_m": 4.8, "nearest_osm_element_type": "way", "nearest_osm_element_id": 220467219, "nearest_building_tag": "yes", "nearest_building_levels": null, "nearest_start_date": null, "nearest_building_use": null, "nearest_roof_shape": null, "nearest_addr_street": null, "nearest_addr_housenumber": null },
            { "address_query": "Ostra jarnvagsgatan 13 Moheda", "display_address": "Ostra Jarnvagsgatan 13, Moheda", "query_lat": 57.00584, "query_lon": 14.57704, "nearby_building_count_120m": 5, "nearest_building_distance_m": 20.3, "nearest_osm_element_type": "way", "nearest_osm_element_id": 1173007983, "nearest_building_tag": "yes", "nearest_building_levels": null, "nearest_start_date": null, "nearest_building_use": null, "nearest_roof_shape": null, "nearest_addr_street": null, "nearest_addr_housenumber": null },
            { "address_query": "Or 1 Or", "display_address": "Or Stromsborg 1, Or", "query_lat": 56.971306, "query_lon": 14.712307, "nearby_building_count_120m": 0, "nearest_building_distance_m": null, "nearest_osm_element_type": null, "nearest_osm_element_id": null, "nearest_building_tag": null, "nearest_building_levels": null, "nearest_start_date": null, "nearest_building_use": null, "nearest_roof_shape": null, "nearest_addr_street": null, "nearest_addr_housenumber": null },
            { "address_query": "Ostra jarnvagsgatan 17 Moheda", "display_address": "Ostra Jarnvagsgatan 17, Moheda", "query_lat": 57.006874, "query_lon": 14.577088, "nearby_building_count_120m": 4, "nearest_building_distance_m": 18.7, "nearest_osm_element_type": "way", "nearest_osm_element_id": 1173007988, "nearest_building_tag": "yes", "nearest_building_levels": null, "nearest_start_date": null, "nearest_building_use": null, "nearest_roof_shape": null, "nearest_addr_street": null, "nearest_addr_housenumber": null },
            { "address_query": "Humlevagen 28 Torpsbruk", "display_address": "Humblevagen 28, Torpsbruk", "query_lat": 57.0285, "query_lon": 14.569046, "nearby_building_count_120m": 3, "nearest_building_distance_m": 19.1, "nearest_osm_element_type": "way", "nearest_osm_element_id": 1173612349, "nearest_building_tag": "yes", "nearest_building_levels": null, "nearest_start_date": null, "nearest_building_use": null, "nearest_roof_shape": null, "nearest_addr_street": null, "nearest_addr_housenumber": null },
            { "address_query": "Harlov 2 Harlov", "display_address": "Harlov 2", "query_lat": 56.95712, "query_lon": 14.636159, "nearby_building_count_120m": 2, "nearest_building_distance_m": 2.4, "nearest_osm_element_type": "way", "nearest_osm_element_id": 882307278, "nearest_building_tag": "yes", "nearest_building_levels": null, "nearest_start_date": null, "nearest_building_use": null, "nearest_roof_shape": null, "nearest_addr_street": null, "nearest_addr_housenumber": null },
            { "address_query": "Ostra Jarnvagsgatan 15 Torpsbruk", "display_address": "Ostra Jarnvagsgatan 15, Torpsbruk", "query_lat": 57.034237, "query_lon": 14.576926, "nearby_building_count_120m": 2, "nearest_building_distance_m": 7.3, "nearest_osm_element_type": "way", "nearest_osm_element_id": 1173681209, "nearest_building_tag": "yes", "nearest_building_levels": null, "nearest_start_date": null, "nearest_building_use": null, "nearest_roof_shape": null, "nearest_addr_street": null, "nearest_addr_housenumber": null },
            { "address_query": "Kungsvagen 61 Vaxjo", "display_address": "Kungsvagen 61A, Vaxjo", "query_lat": 56.888546, "query_lon": 14.805063, "nearby_building_count_120m": 3, "nearest_building_distance_m": 19.7, "nearest_osm_element_type": "way", "nearest_osm_element_id": 104963147, "nearest_building_tag": "yes", "nearest_building_levels": null, "nearest_start_date": null, "nearest_building_use": null, "nearest_roof_shape": null, "nearest_addr_street": null, "nearest_addr_housenumber": null },
            { "address_query": "Bergsgatan 7 Moheda", "display_address": "Bergsgatan 7, Moheda", "query_lat": 57.005165, "query_lon": 14.580551, "nearby_building_count_120m": 2, "nearest_building_distance_m": 6.6, "nearest_osm_element_type": "way", "nearest_osm_element_id": 1173000279, "nearest_building_tag": "yes", "nearest_building_levels": null, "nearest_start_date": null, "nearest_building_use": null, "nearest_roof_shape": null, "nearest_addr_street": null, "nearest_addr_housenumber": null }
        ],
        scb: [
            { "address_query": "Wieselgrensgatan 20 Vaxjo", "display_address": "Wieselgrensgatan 20, Vaxjo", "municipality": "Växjö kommun", "scb_region_code": "0780", "population_2025": 98940, "average_age_2025": 40.6, "mean_income_2024_ksek": 371.7, "median_income_2024_ksek": 349.9, "dwellings_one_two_family_total_2024": 19884, "dwellings_one_two_family_dominant_period_2024": "1971-1980", "dwellings_multi_family_total_2024": 24188, "dwellings_multi_family_dominant_period_2024": "1961-1970" },
            { "address_query": "Langa gatan 2 Vaxjo", "display_address": "Langa Gatan 2G, Vaxjo", "municipality": "Växjö kommun", "scb_region_code": "0780", "population_2025": 98940, "average_age_2025": 40.6, "mean_income_2024_ksek": 371.7, "median_income_2024_ksek": 349.9, "dwellings_one_two_family_total_2024": 19884, "dwellings_one_two_family_dominant_period_2024": "1971-1980", "dwellings_multi_family_total_2024": 24188, "dwellings_multi_family_dominant_period_2024": "1961-1970" },
            { "address_query": "Falkgatan 8 Vaxjo", "display_address": "Falkgatan 8, Vaxjo", "municipality": "Växjö kommun", "scb_region_code": "0780", "population_2025": 98940, "average_age_2025": 40.6, "mean_income_2024_ksek": 371.7, "median_income_2024_ksek": 349.9, "dwellings_one_two_family_total_2024": 19884, "dwellings_one_two_family_dominant_period_2024": "1971-1980", "dwellings_multi_family_total_2024": 24188, "dwellings_multi_family_dominant_period_2024": "1961-1970" },
            { "address_query": "Ostra jarnvagsgatan 13 Moheda", "display_address": "Ostra Jarnvagsgatan 13, Moheda", "municipality": "Alvesta kommun", "scb_region_code": "0764", "population_2025": 19687, "average_age_2025": 43.5, "mean_income_2024_ksek": 346.2, "median_income_2024_ksek": 331.8, "dwellings_one_two_family_total_2024": 6277, "dwellings_one_two_family_dominant_period_2024": "-1930", "dwellings_multi_family_total_2024": 2511, "dwellings_multi_family_dominant_period_2024": "1961-1970" },
            { "address_query": "Or 1 Or", "display_address": "Or Stromsborg 1, Or", "municipality": "Växjö kommun", "scb_region_code": "0780", "population_2025": 98940, "average_age_2025": 40.6, "mean_income_2024_ksek": 371.7, "median_income_2024_ksek": 349.9, "dwellings_one_two_family_total_2024": 19884, "dwellings_one_two_family_dominant_period_2024": "1971-1980", "dwellings_multi_family_total_2024": 24188, "dwellings_multi_family_dominant_period_2024": "1961-1970" },
            { "address_query": "Ostra jarnvagsgatan 17 Moheda", "display_address": "Ostra Jarnvagsgatan 17, Moheda", "municipality": "Alvesta kommun", "scb_region_code": "0764", "population_2025": 19687, "average_age_2025": 43.5, "mean_income_2024_ksek": 346.2, "median_income_2024_ksek": 331.8, "dwellings_one_two_family_total_2024": 6277, "dwellings_one_two_family_dominant_period_2024": "-1930", "dwellings_multi_family_total_2024": 2511, "dwellings_multi_family_dominant_period_2024": "1961-1970" },
            { "address_query": "Humlevagen 28 Torpsbruk", "display_address": "Humblevagen 28, Torpsbruk", "municipality": "Alvesta kommun", "scb_region_code": "0764", "population_2025": 19687, "average_age_2025": 43.5, "mean_income_2024_ksek": 346.2, "median_income_2024_ksek": 331.8, "dwellings_one_two_family_total_2024": 6277, "dwellings_one_two_family_dominant_period_2024": "-1930", "dwellings_multi_family_total_2024": 2511, "dwellings_multi_family_dominant_period_2024": "1961-1970" },
            { "address_query": "Harlov 2 Harlov", "display_address": "Harlov 2", "municipality": "Alvesta kommun", "scb_region_code": "0764", "population_2025": 19687, "average_age_2025": 43.5, "mean_income_2024_ksek": 346.2, "median_income_2024_ksek": 331.8, "dwellings_one_two_family_total_2024": 6277, "dwellings_one_two_family_dominant_period_2024": "-1930", "dwellings_multi_family_total_2024": 2511, "dwellings_multi_family_dominant_period_2024": "1961-1970" },
            { "address_query": "Ostra Jarnvagsgatan 15 Torpsbruk", "display_address": "Ostra Jarnvagsgatan 15, Torpsbruk", "municipality": "Alvesta kommun", "scb_region_code": "0764", "population_2025": 19687, "average_age_2025": 43.5, "mean_income_2024_ksek": 346.2, "median_income_2024_ksek": 331.8, "dwellings_one_two_family_total_2024": 6277, "dwellings_one_two_family_dominant_period_2024": "-1930", "dwellings_multi_family_total_2024": 2511, "dwellings_multi_family_dominant_period_2024": "1961-1970" },
            { "address_query": "Kungsvagen 61 Vaxjo", "display_address": "Kungsvagen 61A, Vaxjo", "municipality": "Växjö kommun", "scb_region_code": "0780", "population_2025": 98940, "average_age_2025": 40.6, "mean_income_2024_ksek": 371.7, "median_income_2024_ksek": 349.9, "dwellings_one_two_family_total_2024": 19884, "dwellings_one_two_family_dominant_period_2024": "1971-1980", "dwellings_multi_family_total_2024": 24188, "dwellings_multi_family_dominant_period_2024": "1961-1970" },
            { "address_query": "Bergsgatan 7 Moheda", "display_address": "Bergsgatan 7, Moheda", "municipality": "Alvesta kommun", "scb_region_code": "0764", "population_2025": 19687, "average_age_2025": 43.5, "mean_income_2024_ksek": 346.2, "median_income_2024_ksek": 331.8, "dwellings_one_two_family_total_2024": 6277, "dwellings_one_two_family_dominant_period_2024": "-1930", "dwellings_multi_family_total_2024": 2511, "dwellings_multi_family_dominant_period_2024": "1961-1970" }
        ]
    }
};

const byAddressQuery = (rows) => rows.reduce((acc, row) => {
    acc[row.address_query] = row;
    return acc;
}, {});

const hittaByQuery = byAddressQuery(appData.dataSources.hitta);
const nominatimByQuery = byAddressQuery(appData.dataSources.nominatim);
const overpassByQuery = byAddressQuery(appData.dataSources.overpass);
const scbByQuery = byAddressQuery(appData.dataSources.scb);

appData.data.previousMoves = appData.data.previousMoves.map((move) => ({
    ...move,
    sources: {
        hitta: hittaByQuery[move.addressQuery] || null,
        nominatim: nominatimByQuery[move.addressQuery] || null,
        overpass: overpassByQuery[move.addressQuery] || null,
        scb: scbByQuery[move.addressQuery] || null
    }
}));
