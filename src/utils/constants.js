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
    title: "Сварочные полуавтоматы",
    preview: semiAutomaticWeldingMachines,
    route: "/semiAutomaticWeldingMachines",
    description:
      "Надежные высокопроизводительные сварочные аппараты, которые идеальноподходят для проведения сварочных работ на производстве, стройке, автомастерской, дома или даче. Уникальность конструкций, металлические корпуса, надежные фиксаторы катушки увеличивают срок службы аппаратов.",
    videoReview: "",
    order: 1,
    _id: 1,
  },
  {
    title: "Бензопилы",
    preview: сhainsaws,
    route: "/chainsaws",
    description:
      "Цепная пила предназначена для различных задач, таких как спиливание леса, распиловка древесины, валка, пиление деревьев, обрезка веток на высоте, последующий распил, подстригание и резка кустов, а также продольная и поперечная распилка бревен, резка досок вдоль и поперек, а также заготовка дров. Этот вид техники также может использоваться как садовый сучкорез. Продукция этого производителя отличается высокой номинальной мощностью, что позволяет распиливать даже строительные материалы из дерева, такие как ДСП и ДВП.",
    videoReview: "https://www.youtube.com/watch?v=mH_B5xpiQNk",
    order: 2,
    _id: 2,
  },
  {
    title: "Дрели–шуруповерты",
    preview: drillsAndScrewdrivers,
    route: "/drillsAndScrewdrivers",
    description:
      "Аккумуляторные дрели-шуруповёрты предназначены для работ с различными материалами: цветные и черные металлы, дерево, пластмасса, ДСП, а также для откручивания и закручивания различного крепежа.",
    videoReview: "",
    order: 3,
    _id: 3,
  },
  {
    title: "Угловые шлифовальные машины (УШМ)",
    preview: angleGrinders,
    route: "/angleGrinders",
    description:
      "Угловая шлифовальная машина, также известная как электроболгарка или шлифмашинка, применяется для разнообразных работ по обработке металла, дерева, бетона, камня, кирпича, гранита и даже для резки керамической плитки. С использованием этого инструмента можно осуществлять полировку, шлифовку и резку, что делает его универсальным инструментом для различных строительных задач.",
    videoReview: "https://www.youtube.com/watch?v=IsTEvcpUAbc",
    order: 4,
    _id: 4,
  },
  {
    title: "Триммеры",
    preview: trimmers,
    route: "/trimmers",
    description:
      "Садовый триммер предназначен для ухода за травой, порослью и мелкими кустарниками. Этот инструмент идеально подходит для стрижки газона на даче, в саду или огороде. Легкий и подвижный, садовый триммер обеспечивает аккуратную и ровную обработку даже в труднодоступных местах.",
    videoReview: "https://www.youtube.com/watch?v=nCcuIbZfEgM",
    order: 5,
    _id: 5,
  },
  {
    title: "Электроинструменты",
    preview: powerTools,
    route: "/powerTools",
    description:
      "Отбойные молотки и перфораторы отлично подойдут для работ на стройке, производстве, для работ по бетону, кирпичу, камню, асфальту.",
    videoReview: "",
    order: 6,
    _id: 6,
  },
  {
    title: "Компрессоры",
    preview: compressors,
    route: "/compressors",
    description:
      "Главная функция поршневого компрессора заключается в обеспечении сжатым воздухом пневматических устройств как в промышленных сферах, так и в повседневной жизни. Поршневой воздушный компрессор может быть использован для накачивания шин автомобилей и велосипедов, мячей, камер, матрасов, горок или других надувных изделий, а также для окраски различных поверхностей.",
    videoReview: "",
    order: 7,
    _id: 7,
  },
  {
    title: "Бензиновые генераторы",
    preview: gasolineGenerators,
    route: "/gasolineGenerators",
    description:
      "Портативные бензогенераторы обеспечивают защиту от перегрузок и коротких замыканий. Они представляют собой надежные резервные источники энергии, необходимые для дач, коттеджей и загородных домов. В случае возможного отключения электроснабжения из-за нестабильности сети, они призваны обеспечить электроэнергией необходимые устройства, инструменты и оборудование на какое-то время. Также они полезны при уличных работах, где требуется подключение сетевых электроинструментов, но нет доступа к основному источнику питания.",
    videoReview: "",
    order: 8,
    _id: 8,
  },
  {
    title: "Наборы инструментов",
    preview: toolKits,
    route: "/toolKits",
    description: "",
    videoReview: "https://www.youtube.com/watch?v=eiwdTyiDx8k",
    order: 9,
    _id: 9,
  },
  {
    title: "Масло",
    preview: oils,
    route: "/oils",
    description: "",
    videoReview: "",
    order: 10,
    _id: 10,
  },
  {
    title: "Дополнительно",
    preview: additionally,
    route: "/additionally",
    description: "",
    videoReview: "",
    order: 11,
    _id: 11,
  },
];

export { itemsFromCatalog };
