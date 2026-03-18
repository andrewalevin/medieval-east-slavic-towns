
const colors = {
    "red": "#ea5545",
    "blue": "#27aeef",
    "green": "#87bc45",
    "purple": "#9d4edd",
    "yellow": "#edbf33",
    "teal": "#00bfa0",
    "magenta": "#f72585",
    "cyan": "#00b4d8",
    "orange": "#fb8500",
    "royalBlue": "#3a86ff",
    "violet": "#b33dc6",
    "gray": "#777"
};


const lines = [
    { id1: "zvenigorod-galich", id2: "zvenigorod-moscow", color: "red", offset: 0.15, direction: -1 },
    { id1: "zvenigorod-galich", id2: "zvenigorod-kiev", color: "red", offset: 0.1 },
    { id1: "zvenigorod-moscow", id2: "zvenigorod-kiev", color: "red", offset: 0.15 },

    { id1: "pereslavl-zalessky", id2: "pereslavl-south", color: "blue", offset: 0.1, direction: -1 },
    { id1: "pereslavl-zalessky", id2: "pereyaslavl-ryazansky", color: "blue", offset: 0.1, direction: -1 },
    { id1: "pereslavl-south", id2: "pereyaslavl-ryazansky", color: "blue", offset: 0.1 },

    { id1: "peremyshl-san", id2: "peremyshl-kaluga", color: "green", offset: 0},
    { id1: "peremyshl-san", id2: "peremyshl-muscovy", color: "green", offset: 0.1, direction: -1 },
    { id1: "peremyshl-kaluga", id2: "peremyshl-muscovy", color: "green", offset: 0},

    { id1: "yaroslavl-volga", id2: "yaroslavl-san", color: "purple", offset: 0.5 },

    { id1: "vladimir-zalessky", id2: "vladimir-volynskyi", color: "yellow", offset: 0.3 },

    { id1: "galich-dniester", id2: "galich-kostroma", color: "teal", offset: 0.6 },

    { id1: "starodub-seversky", id2: "starodub-klyazma", color: "magenta", offset: 0.1 },
    { id1: "starodub-seversky", id2: "starodub-votsky", color: "magenta", offset: 0.2 },
    { id1: "starodub-klyazma", id2: "starodub-votsky", color: "magenta", offset: 0 },

    { id1: "lvov-volynsky", id2: "lvov-old", color: "purple", offset: 0.45 },

    { id1: "shuya", id2: "shumsk", color: "magenta", offset: 0.6 },

    { id1: "dorogobuzh-smolensky", id2: "dorogobuzh-vol1", color: "blue", offset: 0.15, direction: -1 },
    { id1: "dorogobuzh-smolensky", id2: "dorogobuzh-vol2", color: "blue", offset: 0.45 },
    { id1: "dorogobuzh-vol1", id2: "dorogobuzh-vol2", color: "blue", offset: 0.55, direction: -1 },

    { id1: "sknyatin-zalesk", id2: "sknyatin-kiev", color: "teal", offset: 0.2},

    { id1: "izborsk-zalesk-litovsk", id2: "izborsk-volynsk", color: "teal", offset: 0},

];


const linesFeaturesMatchesTowns = lines.map(line => {
    const curvedLine = createCurvedLine(
        towns[line.id1].coords.slice().reverse(),
        towns[line.id2].coords.slice().reverse(),
        line.offset, line.direction
    );
    return {
        type: "Feature",
        geometry: curvedLine.geometry,
        properties: { color: colors[line.color] }
    };
});




