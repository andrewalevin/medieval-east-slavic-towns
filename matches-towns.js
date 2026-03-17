

const towns = {
    "zvenigorod-galich": {
        short: "Звенигород",
        title: "Звенигород Львовский",
        coords: [49.732778, 24.246944],
        url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D0%B5%D0%BD%D0%B8%D0%B3%D0%BE%D1%80%D0%BE%D0%B4_(%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Zvenihorod_001.jpg/960px-Zvenihorod_001.jpg",
        year: 1086
    },
    "zvenigorod-moscow": {
        short: "Звенигород",
        title: "Звенигород Московский",
        coords: [55.733333, 36.85],
        url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D0%B5%D0%BD%D0%B8%D0%B3%D0%BE%D1%80%D0%BE%D0%B4",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Gorodok.jpg",
        year: 1152
    },
    "zvenigorod-kiev": {
        short: "Звенигород",
        title: "Звенигород Киевский",
        coords: [50.320833, 30.386111],
        url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D0%B5%D0%BD%D0%B8%D0%B3%D0%BE%D1%80%D0%BE%D0%B4_%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%89%D0%B5_%D0%92%D1%96%D1%82%D0%B0-%D0%9F%D0%BE%D1%88%D1%82%D0%BE%D0%B2%D0%B0%2C_%D1%81%D1%85%D0%B8%D0%BB_%D0%B2%D0%B0%D0%BB%D1%83_%D0%B7%D0%BD%D0%B8%D0%B7%D1%83_2.jpg/960px-%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%89%D0%B5_%D0%92%D1%96%D1%82%D0%B0-%D0%9F%D0%BE%D1%88%D1%82%D0%BE%D0%B2%D0%B0%2C_%D1%81%D1%85%D0%B8%D0%BB_%D0%B2%D0%B0%D0%BB%D1%83_%D0%B7%D0%BD%D0%B8%D0%B7%D1%83_2.jpg",
        year: 1097
    },
    "galich-dniester": {
        short: "Галич",
        title: "Галич на Днестре",
        coords: [49.112778, 24.721667],
        url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%BB%D0%B8%D1%87_(%D0%98%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Galych-1.jpg/960px-Galych-1.jpg",
        year: 1140
    },
    "galich-kostroma": {
        short: "Галич",
        title: "Галич на Костроме",
        coords: [58.383333, 42.35],
        url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%BB%D0%B8%D1%87_(%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F)",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Square_in_Galich_2.jpg/960px-Square_in_Galich_2.jpg",
        year: 1159
    },
    "vladimir-zalessky": {
        short: "Владимир",
        title: "Владимир-Залесский",
        coords: [56.133333, 40.416667],
        url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F)",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%2C_%D0%B2%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%A3%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80.JPG/960px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%2C_%D0%B2%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%A3%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80.JPG",
        year: 990
    },
    "vladimir-volynskyi": {
        short: "Владимир",
        title: "Владимир Волынский",
        coords: [50.848056, 24.322222],
        url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_(%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0)",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Volodymyr-Volyns%27kiy_Knyazay_Vasyl%27ka_2_Kostel_Ioakima_ta_Anny_01_%28YDS_6418%29.jpg/960px-Volodymyr-Volyns%27kiy_Knyazay_Vasyl%27ka_2_Kostel_Ioakima_ta_Anny_01_%28YDS_6418%29.jpg",
        year: 988
    },
    "yaroslavl-volga": {
        short: "Ярославль",
        title: "Ярославль на Волге",
        coords: [57.616667, 39.85],
        url: "https://ru.wikipedia.org/wiki/%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Yaroslavl_Russia_Montage.jpg/500px-Yaroslavl_Russia_Montage.jpg",
        year: 1010
    },
    "yaroslavl-san": {
        short: "Ярослав",
        title: "Ярослав на Сане",
        coords: [50.018611, 22.679722],
        url: "https://ru.wikipedia.org/wiki/%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Jaroslaw_rynek_ratusz_2.jpg/960px-Jaroslaw_rynek_ratusz_2.jpg",
        year: 1031
    },
    "pereslavl-zalessky": {
        short: "Переславль",
        title: "Переславль-Залесский",
        coords: [56.738133, 38.856153],
        url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C-%D0%97%D0%B0%D0%BB%D0%B5%D1%81%D1%81%D0%BA%D0%B8%D0%B9",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pereslavl_SpasoPreobrazhenskyCathedral_2024.jpg/960px-Pereslavl_SpasoPreobrazhenskyCathedral_2024.jpg",
        year: 1152
    },
    "pereslavl-south": {
        short: "Переяслав",
        title: "Переяславль Южный",
        coords: [50.066111, 31.442222],
        url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D1%8F%D1%81%D0%BB%D0%B0%D0%B2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/%D0%9F%D0%B5%D1%80%D0%B5%D1%8F%D1%81%D0%BB%D0%B0%D0%B2_%D0%90%D0%BD%D1%82%D0%BE%D0%BD_%D0%9F%D0%B5%D1%82%D1%80%D1%83%D1%81%D1%8C.jpg/960px-%D0%9F%D0%B5%D1%80%D0%B5%D1%8F%D1%81%D0%BB%D0%B0%D0%B2_%D0%90%D0%BD%D1%82%D0%BE%D0%BD_%D0%9F%D0%B5%D1%82%D1%80%D1%83%D1%81%D1%8C.jpg",
        year: 993
    },
    "pereyaslavl-ryazansky": {
        short: "Переяслаавль",
        title: "Переяслаавль-Рязанский",
        coords: [54.616667, 39.716667],
        url: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/%D0%A4%D0%B5%D1%81%D1%82%D0%B8%D0%B2%D0%B0%D0%BB%D1%8C_%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%BE%D0%BF%D0%BB%D0%B0%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_%D0%B2_%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D0%B8.jpg/960px-%D0%A4%D0%B5%D1%81%D1%82%D0%B8%D0%B2%D0%B0%D0%BB%D1%8C_%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%BE%D0%BF%D0%BB%D0%B0%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_%D0%B2_%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D0%B8.jpg",
        year: 1095
    },
    "peremyshl-san": {
        short: "Перемышль",
        title: "Перемышль на Сане",
        coords: [49.783333, 22.766667],
        url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%88%D0%B5%D0%BC%D1%8B%D1%81%D0%BB%D1%8C",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bazylika_archikatedralna_Wniebowzi%C4%99cia_Naj%C5%9Bwi%C4%99tszej_Maryi_Panny2.jpg/960px-Bazylika_archikatedralna_Wniebowzi%C4%99cia_Naj%C5%9Bwi%C4%99tszej_Maryi_Panny2.jpg",
        year: 981
    },
    "peremyshl-kaluga": {
        short: "Перемышль",
        title: "Перемышль Калужский",
        coords: [54.263611, 36.163056],
        url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D1%8B%D1%88%D0%BB%D1%8C_(%D0%9A%D0%B0%D0%BB%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/%D0%A5%D1%80%D0%B0%D0%BC_%D0%B2_%D1%87%D0%B5%D1%81%D1%82%D1%8C_%D0%A0%D0%BE%D0%B6%D0%B4%D0%B5%D1%81%D1%82%D0%B2%D0%B0_%D0%9F%D1%80%D0%B5%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D0%B9_%D0%91%D0%BE%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%86%D1%8B%2C_%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D1%8B%D1%88%D0%BB%D1%8C.png/960px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%B2_%D1%87%D0%B5%D1%81%D1%82%D1%8C_%D0%A0%D0%BE%D0%B6%D0%B4%D0%B5%D1%81%D1%82%D0%B2%D0%B0_%D0%9F%D1%80%D0%B5%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D0%B9_%D0%91%D0%BE%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%86%D1%8B%2C_%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D1%8B%D1%88%D0%BB%D1%8C.png",
        year: 1328
    },
    "peremyshl-muscovy": {
        short: "Перемышль",
        title: "Перемышль Московский",
        coords: [55.361111, 37.405556],
        url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D1%8B%D1%88%D0%BB%D1%8C_%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D1%8B%D1%88%D0%BB%D1%8C_%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%B2%D0%B0%D0%BB.jpg/960px-%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D1%8B%D1%88%D0%BB%D1%8C_%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%B2%D0%B0%D0%BB.jpg",
        year: 1152
    },
    "starodub-seversky": {
        short: "Стародуб",
        title: "Стародуб Северский",
        coords: [52.583333, 32.766667],
        url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%80%D0%BE%D0%B4%D1%83%D0%B1",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Starodub_Cathedral.jpg",
        year: 1080
    },
    "starodub-klyazma": {
        short: "Сатордуб",
        title: "Стародуб на Клязьме",
        coords: [56.448611, 41.501667],
        url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%80%D0%BE%D0%B4%D1%83%D0%B1_%D0%BD%D0%B0_%D0%9A%D0%BB%D1%8F%D0%B7%D1%8C%D0%BC%D0%B5",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Starodub.jpg/960px-Starodub.jpg?uselang=ru",
        year: 1152
    },
    "starodub-votsky": {
        short: "Сатордуб",
        title: "Стародуб Воцкий",
        coords: [55.793917, 42.7185],
        url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%80%D0%BE%D0%B4%D1%83%D0%B1_%D0%92%D0%BE%D1%86%D0%BA%D0%B8%D0%B9",
        img: "",
        year: 0
    },
    "lvov-volynsky": {
        short: "Львов",
        title: "Львов Волынский (Львов Великий)",
        coords: [49.833333, 24],
        url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/LvivOldTown1.jpg/960px-LvivOldTown1.jpg",
        year: 1256
    },
    "lvov-old": {
        short: "Львов",
        title: "Лльгово (Старый Лвовъ)",
        coords: [54.589875, 39.951293],
        url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%8C%D0%B3%D0%BE%D0%B2%D0%BE_(%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
        img: "",
        year: 1207
    },
    "shuya": {
        short: "Шумск",
        title: "Шуя (Шумьскый)",
        coords: [56.85, 41.366667],
        url: "https://ru.wikipedia.org/wiki/%D0%A8%D1%83%D1%8F",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Shuya_resurrection_cathedral.JPG/960px-Shuya_resurrection_cathedral.JPG",
        year: 1393
    },
    "shumsk": {
        short: "Шумск",
        title: "Шумск",
        coords: [50.119444, 26.116667],
        url: "https://ru.wikipedia.org/wiki/%D0%A8%D1%83%D0%BC%D1%81%D0%BA",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/%D0%A8%D1%83%D0%BC%D1%81%D0%BA.jpg/960px-%D0%A8%D1%83%D0%BC%D1%81%D0%BA.jpg?uselang=ru",
        year: 1149
    },
    "dorogobuzh-smolensky": {
        short: "Дорогобуж",
        title: "Дорогобуж смоленский",
        coords: [54.92, 33.307778],
        url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D1%80%D0%BE%D0%B3%D0%BE%D0%B1%D1%83%D0%B6",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Dorogobuzh.jpg",
        year: 1147
    },
    "dorogobuzh-vol1": {
        short: "Дорогобуж",
        title: "Дорогобуж волынский",
        coords: [50.618889, 26.566389],
        url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D1%80%D0%BE%D0%B3%D0%BE%D0%B1%D1%83%D0%B6_(%D0%A0%D0%BE%D0%B2%D0%BD%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/%D0%A3%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0%2C_%D1%81.%D0%94%D0%BE%D1%80%D0%BE%D0%B3%D0%BE%D0%B1%D1%83%D0%B6_%281%29.jpg/960px-%D0%A3%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0%2C_%D1%81.%D0%94%D0%BE%D1%80%D0%BE%D0%B3%D0%BE%D0%B1%D1%83%D0%B6_%281%29.jpg?uselang=ru",
        year: 1084
    },
    "dorogobuzh-vol2": {
        short: "Дрогобыч",
        title: "Дорогобуж волынский",
        coords: [49.35, 23.5],
        url: "https://ru.wikipedia.org/wiki/%D0%94%D1%80%D0%BE%D0%B3%D0%BE%D0%B1%D1%8B%D1%87",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Casco_hist%C3%B3rico_de_Drogobych.jpg/960px-Casco_hist%C3%B3rico_de_Drogobych.jpg",
        year: 1091
    },
    "sknyatin-zalesk": {
        short: "Скнятин",
        title: "Скнятин залесский, Скнятинъ (Скнятино)",
        coords: [57.1, 37.683333],
        url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D0%BD%D1%8F%D1%82%D0%B8%D0%BD%D0%BE",
        img: "",
        year: 1134
    },
    "sknyatin-kiev": {
        short: "Скнятин",
        title: "Скнятин, киевский, Съкнятин (Снитин)",
        coords: [50.109022, 33.250542],
        url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BD%D0%B8%D1%82%D0%B8%D0%BD",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/%D0%92%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D1%81%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%28%D0%BC%D1%83%D1%80.%29_1.jpg/960px-%D0%92%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D1%81%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%28%D0%BC%D1%83%D1%80.%29_1.jpg?uselang=ru",
        year: 1107
    },

    "izborsk-zalesk-litovsk": {
        short: "Изборск",
        title: "Избореск, залесский, литовский, Изборескъ",
        coords: [57.709375, 27.860513],
        url: "https://ru.wikipedia.org/wiki/%D0%98%D0%B7%D0%B1%D0%BE%D1%80%D1%81%D0%BA",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%D0%98%D0%B7%D0%B1%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D1%8C._%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D1%8B%D0%B9_%D0%B0%D0%BD%D1%81%D0%B0%D0%BC%D0%B1%D0%BB%D1%8C.jpg/960px-%D0%98%D0%B7%D0%B1%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D1%8C._%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D1%8B%D0%B9_%D0%B0%D0%BD%D1%81%D0%B0%D0%BC%D0%B1%D0%BB%D1%8C.jpg?uselang=ru",
        year: 858
    },
    "izborsk-volynsk": {
        short: "Изборск",
        title: "Изборско на реке Солоной, волынский (Зборов)",
        coords: [49.661605, 25.146931],
        url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B1%D0%BE%D1%80%D0%BE%D0%B2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Zborivratusha.jpg/960px-Zborivratusha.jpg?uselang=ru",
        year: 1166
    },


};



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


function createCurvedLine(start, end, offset, direction, sharpness) {
    offset = offset ?? 0; // 0 = прямая
    sharpness = sharpness ?? 1.0;     // 0.1–0.9, плавность изгиба
    direction = direction ?? 1;       // 1 = вправо от линии, -1 = влево

    if (offset === 0) {
        return turf.lineString([start, end]);
    }

    // Средняя точка
    const mid = [(start[0] + end[0]) / 2, (start[1] + end[1]) / 2];

    // Азимут основной линии
    const bearing = turf.bearing(turf.point(start), turf.point(end));

    // Расстояние между точками
    const distance = turf.distance(turf.point(start), turf.point(end));

    // Смещение перпендикулярно линии (в километрах)
    const offsetObj = (distance / 2) * offset;

    // Перпендикулярный азимут (90° или -90°)
    const perpBearing = bearing + (90 * direction);

    // Контрольная точка
    const control = turf.destination(turf.point(mid), offsetObj, perpBearing, { units: 'kilometers' });

    // Линия через контрольную точку
    const line = turf.lineString([start, control.geometry.coordinates, end]);

    // Сглаживаем Bezier
    return turf.bezierSpline(line, { sharpness });
}


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


const circlesPointsFeaturesMatchesTowns = [];
lines.forEach(line => {
    const start = towns[line.id1].coords.slice().reverse();
    const end = towns[line.id2].coords.slice().reverse();
    endpoints.push({
        type: "Feature",
        geometry: { type: "Point", coordinates: start },
        properties: { color: colors[line.color] }
    });
    endpoints.push({
        type: "Feature",
        geometry: { type: "Point", coordinates: end },
        properties: { color: colors[line.color] }
    });
});


const titlesFeaturesMatchesTowns = Object.values(towns).map(t => ({
    type: "Feature",
    geometry: { type: "Point", coordinates: t.coords.slice().reverse() },
    properties: {
        id: t.title,
        name: t.short,
        year: t.year,
        url: t.url,
        img: t.img
    }
}));



