import mapboxgl from "mapbox-gl";
import { bindPopup } from "./popup";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

// 🎨 Цвета княжеств
const COLORS: Record<string, string> = {
    "болгарские": "grey",
    "валашские": "pink",
    волынские: "red",
    залесские: "green",
    киевские: "gold",
    литовские: "orange",
    подольские: "blue",
    рязанские: "lightblue",
    смоленские: "violet",
    тверские: "lightgreen",
};

// 🔄 ПРЕОБРАЗОВАНИЕ В GEOJSON (ЗДЕСЬ!)
function toGeoJSON(data: any) {
    const features = [];

    data.forEach((entry: any) => {
        entry.modern_cities.forEach((city: any) => {
            if (!city.coords || city.coords.lat == null) return;

            features.push({
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [city.coords.lon, city.coords.lat],
                },
                properties: {
                    name: city.name,
                    image: city.image_640,
                    wiki: city.wiki_url,
                    foundation: city.foundation,
                    origin_type: entry.origin_type,
                    historical_names: entry.historical_names,
                    color: COLORS[entry.origin_type] ?? "black",
                },
            });
        });
    });

    return {
        type: "FeatureCollection",
        features,
    };
}

// 🗺️ Инициализация карты
export function createMap(container: HTMLDivElement) {
    const map = new mapboxgl.Map({
        container,
        style: "mapbox://styles/mapbox/light-v11",
        center: [30, 55],
        zoom: 4,
        projection: "mercator",
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", async () => {
        const res = await fetch("/towns-without-dates.json");
        const raw = await res.json();

        // ✅ ВОТ ЗДЕСЬ ОНО ПРИМЕНЯЕТСЯ
        const geojson = toGeoJSON(raw);
        console.log(geojson);

        map.addSource("cities", {
            type: "geojson",
            data: geojson,
        });

        /* const COLORS: Record<string, string> = {
            "болгарские": "grey",
            "валашские": "pink",
            волынские: "red",
            залесские: "green",
            киевские: "gold",
            литовские: "orange",
            подольские: "blue",
            рязанские: "lightblue",
            смоленские: "violet",
            тверские: "lightgreen",
        };*/
        map.addLayer({
            id: "city-points",
            type: "circle",
            source: "cities",
            paint: {
                "circle-radius": 6,
                "circle-color": [
                    'match',
                    ['get', 'origin_type'],
                    'болгарский',
                    '#e55e5e',
                    'валашские',
                    'pink',
                    'Hispanic',
                    '#e55e5e',
                    'тверские',
                    '#3bb2d0',
                    /* other */ '#444'
                ],
                "circle-stroke-width": 1.5,
                "circle-stroke-color": "#fff",
            },
        });

        map.addLayer({
            id: "city-labels",
            type: "symbol",
            source: "cities",
            layout: {
                "text-field": ["get", "name"],
                "text-offset": [0, 1.2],
                "text-anchor": "top",
                "text-size": 12,
            },
            paint: {
                "text-color": "#111",
            },
        });

        bindPopup(map);
    });

    return map;
}