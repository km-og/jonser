//Превью в каталоге на главной странице
import semiAutomaticWeldingMachines from "../images/sawm/preview.webp";
import compressors from "../images/Compressors/preview.webp";
import gasolineGenerators from "../images/gasolineGenerators/preview.webp";
import angleGrinders from "../images/angleGrinders/preview.webp";
import drillsAndScrewdrivers from "../images/drillsAndScrewdrivers/preview.webp";
import сhainsaws from "../images/сhainsaws/preview.webp";
import trimmers from "../images/trimmers/preview.webp";
import toolKits from "../images/toolKits/preview.webp";
import additionally from "../images/additionally/preview.webp";
import oils from "../images/oils/preview.webp";
import powerTools from "../images/powerTools/preview.webp";

const itemsFromCatalog = [
  {
    name: "Сварочные полуавтоматы",
    alt: "Сварочные полуавтоматы",
    img: semiAutomaticWeldingMachines,
    route: "/semiAutomaticWeldingMachines",
    _id: 1,
  },
  {
    name: "Компрессоры",
    alt: "Компрессоры",
    img: compressors,
    route: "/compressors",
    _id: 2,
  },
  {
    name: "Наборы инструментов",
    alt: "Наборы инструментов",
    img: toolKits,
    route: "/toolKits",
    _id: 3,
  },
  {
    name: "Масло",
    alt: "Наборы инструментов",
    img: oils,
    route: "/oils",
    _id: 4,
  },
  {
    name: "Дрели–шуруповерты",
    alt: "Дрели–шуруповерты",
    img: drillsAndScrewdrivers,
    route: "/drillsAndScrewdrivers",
    _id: 5,
  },
  {
    name: "Бензиновые генераторы",
    alt: "Бензиновые генераторы",
    img: gasolineGenerators,
    route: "/gasolineGenerators",
    _id: 6,
  },
  {
    name: "Бензопилы",
    alt: "Бензопилы",
    img: сhainsaws,
    route: "/chainsaws",
    _id: 7,
  },
  {
    name: "Триммеры",
    alt: "Триммеры",
    img: trimmers,
    route: "/trimmers",
    _id: 8,
  },
  {
    name: "Угловые шлифовальные машины (УШМ)",
    alt: "Угловые шлифовальные машины (УШМ)",
    img: angleGrinders,
    route: "/angleGrinders",
    _id: 9,
  },
  {
    name: "Дополнительно",
    alt: "Дополнительно",
    img: additionally,
    route: "/additionally",
    _id: 10,
  },
  {
    name: "Электро-инструменты",
    alt: "Электроинструменты",
    img: powerTools,
    route: "/powerTools",
    _id: 11,
  },
];

export { itemsFromCatalog };
