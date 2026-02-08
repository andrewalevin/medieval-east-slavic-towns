import mapboxgl from "mapbox-gl";

function getThumbnail(url?: string, width = 500) {
    if (!url || !url.includes("upload.wikimedia.org")) return url;
    const parts = url.split("/");
    const file = parts.at(-1);
    parts.splice(parts.length - 3, 0, "thumb");
    return `${parts.join("/")}/${width}px-${file}`;
}

export function bindPopup(map: mapboxgl.Map) {
    const layers = ["city-points", "city-labels"];

    map.on("click", layers, (e) => {
        const f = e.features?.[0];
        if (!f) return;

        const p: any = f.properties;
        const coords = (f.geometry as any).coordinates;
        const historical =
            typeof p.historical_names === "string"
                ? JSON.parse(p.historical_names)
                : p.historical_names;

        let html = `<div class="popup"><h3>${p.name}</h3>`;

        if (p.image)
            html += `<img src="${getThumbnail(p.image)}" />`;

        if (p.foundation)
            html += `<div class="section"><b>Основание</b><div>${p.foundation.text}</div></div>`;

        html += `<div class="section"><b>Происхождение</b><div>${p.origin_type}</div></div>`;

        html += `<div class="section"><b>Названия в летописях</b>`;
        historical?.forEach((h: any) => {
            html += `<div>${h.name}${h.chronicle ? `<div class='chronicle'>${h.chronicle}</div>` : ""}</div>`;
        });
        html += `</div>`;

        if (p.wiki)
            html += `<a href="${p.wiki}" target="_blank">Википедия →</a>`;

        html += `</div>`;

        new mapboxgl.Popup({ maxWidth: "400px" })
            .setLngLat(coords)
            .setHTML(html)
            .addTo(map);
    });

    map.on("mouseenter", layers, () => (map.getCanvas().style.cursor = "pointer"));
    map.on("mouseleave", layers, () => (map.getCanvas().style.cursor = ""));
}