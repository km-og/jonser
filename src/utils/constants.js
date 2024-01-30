//Превью в каталоге на главной странице
import semiAutomaticWeldingMachines from "../images/Semi_automatic_welding_machines/preview.png";
import compressors from "../images/Compressors/preview.png";
import gasolineGenerators from "../images/gasolineGenerators/preview.png";
import angleGrinders from "../images/angleGrinders/preview.png";
import drillsAndScrewdrivers from "../images/drillsAndScrewdrivers/preview.png";
import сhainsaws from "../images/сhainsaws/preview.png";
import trimmers from "../images/trimmers/preview.png";
import toolKits from "../images/toolKits/preview.png";
import additionally from "../images/additionally/preview.png";
import oils from "../images/oils/preview.png";

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
];

export { itemsFromCatalog };
