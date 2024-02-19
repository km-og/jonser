//Превью в каталоге на главной странице
import semiAutomaticWeldingMachines from "../images/previews/sawm.webp";
import compressors from "../images/previews/compr.webp";
import gasolineGenerators from "../images/previews/gg.webp";
import angleGrinders from "../images/previews/ag.webp";
import drillsAndScrewdrivers from "../images/previews/drills.webp";
import сhainsaws from "../images/previews/chain.webp";
import trimmers from "../images/previews/trim.webp";
import toolKits from "../images/previews/toolkits.webp";
import additionally from "../images/previews/add.webp";
import oils from "../images/previews/oil.webp";
import powerTools from "../images/previews/pt.webp";

const itemsFromCatalog = [
  {
    name: "Сварочные полуавтоматы",
    alt: "Сварочные полуавтоматы",
    img: semiAutomaticWeldingMachines,
    route: "/semiAutomaticWeldingMachines",
    _id: 1,
  },
  {
    name: "Бензопилы",
    alt: "Бензопилы",
    img: сhainsaws,
    route: "/chainsaws",
    _id: 2,
  },
  {
    name: "Дрели–шуруповерты",
    alt: "Дрели–шуруповерты",
    img: drillsAndScrewdrivers,
    route: "/drillsAndScrewdrivers",
    _id: 3,
  },
  {
    name: "Угловые шлифовальные машины (УШМ)",
    alt: "Угловые шлифовальные машины (УШМ)",
    img: angleGrinders,
    route: "/angleGrinders",
    _id: 4,
  },
  {
    name: "Триммеры",
    alt: "Триммеры",
    img: trimmers,
    route: "/trimmers",
    _id: 5,
  },
  {
    name: "Электро - инструменты",
    alt: "Электроинструменты",
    img: powerTools,
    route: "/powerTools",
    _id: 6,
  },
  {
    name: "Компрессоры",
    alt: "Компрессоры",
    img: compressors,
    route: "/compressors",
    _id: 7,
  },
  {
    name: "Бензиновые генераторы",
    alt: "Бензиновые генераторы",
    img: gasolineGenerators,
    route: "/gasolineGenerators",
    _id: 8,
  },
  {
    name: "Наборы инструментов",
    alt: "Наборы инструментов",
    img: toolKits,
    route: "/toolKits",
    _id: 9,
  },
  {
    name: "Масло",
    alt: "Масло",
    img: oils,
    route: "/oils",
    _id: 10,
  },
  {
    name: "Дополнительно",
    alt: "Дополнительно",
    img: additionally,
    route: "/additionally",
    _id: 11,
  },
];

export { itemsFromCatalog };
