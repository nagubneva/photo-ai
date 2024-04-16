import {Models} from "./server";

export const filters = [
    {
        image: require("./assets/filters/1.png"),
        name: "Удалить фон",
        model: Models.rmbg,
        prompt: ""
    },
    {
        image: require("./assets/filters/2.png"),
        name: "Ретушь",
        model: Models.sd_xl_refiner,
        prompt: ""
    },
    {
        image: require("./assets/filters/3.png"),
        name: "Ретушь 2",
        model: Models.sd_xl_refiner,
        prompt: "bright makeup, red lips"
    },
    {
        image: require("./assets/filters/4.jpg"),
        name: "Кен",
        model: Models.sd_xl_refiner,
        prompt: "Ken doll boy.short hair. hair color blonde"
    },
    {
        image: require("./assets/filters/5.jpg"),
        name: "Барби",
        model: Models.sd_xl_refiner,
        prompt: "The girl is a barbie doll. In a pink dress. Make her hair color white"
    },
    {
        image: require("./assets/filters/6.png"),
        name: "Мило",
        model: Models.sd_xl_refiner,
        prompt: "Make a barbie doll out of a human"
    },
    {
        image: require("./assets/filters/7.jpg"),
        name: "Аниме",
        model: Models.sd_xl_refiner,
        prompt: "add a heart tattoo to your face. the hair color needs to be changed. you need to make pink hair. Anime character with cute hearts on his face and pink hair"
    },
    {
        image: require("./assets/filters/8.jpg"),
        name: "Русалка",
        model: Models.sd_xl_refiner,
        prompt: "sensual mermaid emerging from turquoise waters, long flowing hair cascading down her back, adorned in emerald scales and gemstones. The rearview reflects a vibrant rainbow, while she sits on a coral throne in a sea of vivid aqua and yellow hues"
    },
    {
        image: require("./assets/filters/9.jpg"),
        name: "Пейзаж",
        model: Models.sd_xl_refiner,
        prompt: "landscape"
    },
];
