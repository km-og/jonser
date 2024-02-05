//Бензиновые пилы
// es4100
import es4100 from "../images/сhainsaws/es4100/0.webp";
import es4100_1 from "../images/сhainsaws/es4100/1.webp";
import es4100_2 from "../images/сhainsaws/es4100/2.webp";
import es4100_3 from "../images/сhainsaws/es4100/3.webp";
import es4100_4 from "../images/сhainsaws/es4100/4.webp";
import es4100_5 from "../images/сhainsaws/es4100/5.webp";
// es4200
import es4200 from "../images/сhainsaws/es4200/0.webp";
import es4200_1 from "../images/сhainsaws/es4200/1.webp";
import es4200_2 from "../images/сhainsaws/es4200/2.webp";
import es4200_3 from "../images/сhainsaws/es4200/3.webp";
import es4200_4 from "../images/сhainsaws/es4200/4.webp";
import es4200_5 from "../images/сhainsaws/es4200/5.webp";
// es43300
import es43300 from "../images/сhainsaws/es43300/0.webp";
import es43300_1 from "../images/сhainsaws/es43300/1.webp";
import es43300_2 from "../images/сhainsaws/es43300/2.webp";
import es43300_3 from "../images/сhainsaws/es43300/3.webp";
import es43300_4 from "../images/сhainsaws/es43300/4.webp";
import es43300_5 from "../images/сhainsaws/es43300/5.webp";
// es4300s
import es4300s from "../images/сhainsaws/es4300s/0.webp";
import es4300s_1 from "../images/сhainsaws/es4300s/1.webp";
import es4300s_2 from "../images/сhainsaws/es4300s/2.webp";
import es4300s_3 from "../images/сhainsaws/es4300s/3.webp";
import es4300s_4 from "../images/сhainsaws/es4300s/4.webp";
import es4300s_5 from "../images/сhainsaws/es4300s/5.webp";
// jac186s
import jac186s from "../images/сhainsaws/battery/jac186s/0.webp";
import jac186s_1 from "../images/сhainsaws/battery/jac186s/1.webp";
import jac186s_2 from "../images/сhainsaws/battery/jac186s/2.webp";
import jac186s_3 from "../images/сhainsaws/battery/jac186s/3.webp";
import jac186s_4 from "../images/сhainsaws/battery/jac186s/4.webp";
import jac186s_5 from "../images/сhainsaws/battery/jac186s/5.webp";

// import bs4500 from "../images/сhainsaws/bs4500.png";
// import bs4500Big from "../images/сhainsaws/bs4500@2x.png";
// import bs5500 from "../images/сhainsaws/battery";
// import bs5500Big from "../images/сhainsaws/battery";
// import es2300 from "../images/сhainsaws/battery";
// import es2300Big from "../images/сhainsaws/battery";

const сhainsawsInfo = {
  title: "Цепные пилы",
  videoReview: "https://www.youtube.com/watch?v=mH_B5xpiQNk",
  description: [
    {
      _id: "1",
      text: "Цепная пила предназначена для различных задач, таких как спиливание леса, распиловка древесины, валка, пиление деревьев, обрезка веток на высоте, последующий распил, подстригание и резка кустов, а также продольная и поперечная распилка бревен, резка досок вдоль и поперек, а также заготовка дров. Этот вид техники также может использоваться как садовый сучкорез. Продукция этого производителя отличается высокой номинальной мощностью, что позволяет распиливать даже строительные материалы из дерева, такие как ДСП и ДВП.",
    },
  ],
  collections: [
    {
      _id: "gs",
      subtitle: "Бензиновые пилы",
      premium: false,
      isHorizontal: true,
      models: [
        // {
        //   _id: "gs_bs4500",
        //   nameModel: "BS-4500",
        //   img: bs4500,
        //   titleParams: [
        //     {
        //       param: "ампераж:",
        //       value: "180А",
        //       _id: "gs_bs4500_tp1",
        //     },
        //     {
        //       param: "вместимость катушки:",
        //       value: "до 1 кг",
        //       _id: "gs_bs4500_tp2",
        //     },
        //   ],
        //   detailed: {
        //     images: [
        //   {
        //     link: j190qx_1,
        //     _id: "j190qx_1",
        //   },
        //   {
        //     link: j190qx_2,
        //     _id: "j190qx_2",
        //   },
        //   {
        //     link: j190qx_3,
        //     _id: "j190qx_3",
        //   },
        //   {
        //     link: j190qx_4,
        //     _id: "j190qx_4",
        //   },
        //   {
        //     link: j190qx_5,
        //     _id: "j190qx_5",
        //   },
        // ],
        //     fullNameModel: "Бензопила цепная Jonser BS-4500",
        //     specifications: [
        //       {
        //         parameter: "Мощность:",
        //         value: "4500 Вт, 4.7 л.с",
        //         _id: "gs_bs4500_param1",
        //       },
        //       {
        //         parameter: "Длина шины:",
        //         value: "45 см",
        //         _id: "gs_bs4500_param2",
        //       },
        //       {
        //         parameter: "Количество звеньев:",
        //         value: "72 шт",
        //         _id: "gs_bs4500_param3",
        //       },
        //       {
        //         parameter: "Шаг:",
        //         value: "0.325",
        //         _id: "gs_bs4500_param4",
        //       },
        //       {
        //         parameter: "Объем поршневой группы:",
        //         value: "52 см3",
        //         _id: "gs_bs4500_param5",
        //       },
        //       {
        //         parameter: "Объем топливного бака:",
        //         value: "550 мл",
        //         _id: "gs_bs4500_param6",
        //       },
        //       {
        //         parameter: "Объем масляного бака:",
        //         value: "260мл",
        //         _id: "gs_bs4500_param7",
        //       },
        //       {
        //         parameter: "Соотношение масла и бензина:",
        //         value: "1:25",
        //         _id: "gs_bs4500_param8",
        //       },
        //       {
        //         parameter: "Ручной стартер",
        //         value: "Да",
        //         _id: "gs_bs4500_param9",
        //       },
        //       {
        //         parameter: "Обороты холостого хода",
        //         value: "3300 об/мин",
        //         _id: "gs_bs4500_param10",
        //       },
        //       {
        //         parameter: "Масимальные обороты без нагрузки",
        //         value: "13500 об/мин",
        //         _id: "gs_bs4500_param11",
        //       },
        //       {
        //         parameter: "Воздушное охлаждение",
        //         value: "Да",
        //         _id: "gs_bs4500_param12",
        //       },
        //       {
        //         parameter: "Вес без шины и без цепи / брутто:",
        //         value: "5,2 кг / 8,75 кг",
        //         _id: "gs_bs4500_param13",
        //       },
        //       {
        //         parameter: "Габариты упаковки:",
        //         value: "52 / 25 / 30 см",
        //         _id: "gs_bs4500_param14",
        //       },
        //       {
        //         parameter: "Гарантия:",
        //         value: "2 года",
        //         _id: "gs_bs4500_param15",
        //       },
        //     ],
        //     equipment: [
        //       {
        //         parameter: "Бензопила:",
        //         value: "1 шт",
        //         _id: "gs_bs4500_eq1",
        //       },
        //       {
        //         parameter: "Шина 18 дюймов (450мм):",
        //         value: "1 шт",
        //         _id: "gs_bs4500_eq2",
        //       },
        //       {
        //         parameter: "Цепи 18 дюймов – 45 см (72зв):",
        //         value: "2 шт",
        //         _id: "gs_bs4500_eq3",
        //       },
        //       {
        //         parameter: "Защитный кожух:",
        //         value: "1 шт",
        //         _id: "gs_bs4500_eq4",
        //       },
        //       {
        //         parameter: "Свеча зажигания:",
        //         value: "1 шт",
        //         _id: "gs_bs4500_eq5",
        //       },
        //       {
        //         parameter: "Набор инструментов:",
        //         value: "1 шт",
        //         _id: "gs_bs4500_eq6",
        //       },
        //       {
        //         parameter: "Заливная воронка:",
        //         value: "1 шт",
        //         _id: "gs_bs4500_eq7",
        //       },
        //       {
        //         parameter: "Напильник заточный для цепи:",
        //         value: "1 шт",
        //         _id: "gs_bs4500_eq8",
        //       },
        //       {
        //         parameter: "Инструкция:",
        //         value: "1 шт",
        //         _id: "gs_bs4500_eq9",
        //       },
        //     ],
        //     advantages: [
        //       {
        //         parameter: "Антивибрационная рукоятка",
        //         _id: "gs_bs4500_ad1",
        //       },
        //       {
        //         parameter: "Антивибрационная система",
        //         _id: "gs_bs4500_ad2",
        //       },
        //       {
        //         parameter: "Защитный кожух",
        //         _id: "gs_bs4500_ad3",
        //       },
        //       {
        //         parameter: "Тормоз цепи",
        //         _id: "gs_bs4500_ad4",
        //       },
        //       {
        //         parameter: "Регулируемый маслянный насос",
        //         _id: "gs_bs4500_ad5",
        //       },
        //       {
        //         parameter: "Легкий старт",
        //         _id: "gs_bs4500_ad6",
        //       },
        //       {
        //         parameter: "Многоразовый воздушный фильтр",
        //         _id: "gs_bs4500_ad7",
        //       },
        //     ],
        //     sale: "-14%",
        //     newPrice: "11 990 ₽",
        //     oldPrice: "13 990 ₽",
        //   },
        // },
        // {
        //   _id: "gs_bs5500",
        //   nameModel: "BS-5500",
        //   // img: bs5500,
        //   detailed: {
        //     // images: [
        //   {
        //     link: j190qx_1,
        //     _id: "j190qx_1",
        //   },
        //   {
        //     link: j190qx_2,
        //     _id: "j190qx_2",
        //   },
        //   {
        //     link: j190qx_3,
        //     _id: "j190qx_3",
        //   },
        //   {
        //     link: j190qx_4,
        //     _id: "j190qx_4",
        //   },
        //   {
        //     link: j190qx_5,
        //     _id: "j190qx_5",
        //   },
        // ],
        //     fullNameModel: "Бензопила цепная Jonser BS-5500",
        //     specifications: [
        //       {
        //         parameter: "Мощность:",
        //         value: "5500 Вт, 5.0 л.с",
        //         _id: "gs_bs5500_param1",
        //       },
        //       {
        //         parameter: "Длина шины:",
        //         value: "45 см",
        //         _id: "gs_bs5500_param2",
        //       },
        //       {
        //         parameter: "Количество звеньев:",
        //         value: "72 шт",
        //         _id: "gs_bs5500_param3",
        //       },
        //       {
        //         parameter: "Шаг:",
        //         value: "0.325",
        //         _id: "gs_bs5500_param4",
        //       },
        //       {
        //         parameter: "Объем поршневой группы:",
        //         value: "52 см3",
        //         _id: "gs_bs5500_param5",
        //       },
        //       {
        //         parameter: "Объем топливного бака:",
        //         value: "550 мл",
        //         _id: "gs_bs5500_param6",
        //       },
        //       {
        //         parameter: "Объем масляного бака:",
        //         value: "260мл",
        //         _id: "gs_bs5500_param7",
        //       },
        //       {
        //         parameter: "Соотношение масла и бензина:",
        //         value: "1:25",
        //         _id: "gs_bs5500_param8",
        //       },
        //       {
        //         parameter: "Ручной стартер",
        //         value: "Да",
        //         _id: "gs_bs5500_param9",
        //       },
        //       {
        //         parameter: "Обороты холостого хода",
        //         value: "2800-3200 об/мин",
        //         _id: "gs_bs5500_param10",
        //       },
        //       {
        //         parameter: "Масимальные обороты без нагрузки",
        //         value: "13500 об/мин",
        //         _id: "gs_bs5500_param11",
        //       },
        //       {
        //         parameter: "Воздушное охлаждение",
        //         value: "Да",
        //         _id: "gs_bs5500_param12",
        //       },
        //       {
        //         parameter: "Вес без шины и без цепи / брутто:",
        //         value: "5,5 кг / 7,95 кг",
        //         _id: "gs_bs5500_param13",
        //       },
        //       {
        //         parameter: "Габариты упаковки:",
        //         value: "52 / 25 / 30 см",
        //         _id: "gs_bs5500_param14",
        //       },
        //       {
        //         parameter: "Гарантия:",
        //         value: "2 года",
        //         _id: "gs_bs5500_param15",
        //       },
        //     ],
        //     equipment: [
        //       {
        //         parameter: "Бензопила:",
        //         value: "1 шт",
        //         _id: "gs_bs5500_eq1",
        //       },
        //       {
        //         parameter: "Шина 18 дюймов (450мм):",
        //         value: "1 шт",
        //         _id: "gs_bs5500_eq2",
        //       },
        //       {
        //         parameter: "Цепи 18 дюймов – 45 см (72зв):",
        //         value: "2 шт",
        //         _id: "gs_bs5500_eq3",
        //       },
        //       {
        //         parameter: "Защитный кожух:",
        //         value: "1 шт",
        //         _id: "gs_bs5500_eq4",
        //       },
        //       {
        //         parameter: "Свеча зажигания:",
        //         value: "1 шт",
        //         _id: "gs_bs5500_eq5",
        //       },
        //       {
        //         parameter: "Набор инструментов:",
        //         value: "1 шт",
        //         _id: "gs_bs5500_eq6",
        //       },
        //       {
        //         parameter: "Заливная воронка:",
        //         value: "1 шт",
        //         _id: "gs_bs5500_eq7",
        //       },
        //       {
        //         parameter: "Напильник заточный для цепи:",
        //         value: "1 шт",
        //         _id: "gs_bs5500_eq8",
        //       },
        //       {
        //         parameter: "Инструкция:",
        //         value: "1 шт",
        //         _id: "gs_bs5500_eq9",
        //       },
        //     ],
        //     advantages: [
        //       {
        //         parameter: "Антивибрационная рукоятка",
        //         _id: "gs_bs5500_ad1",
        //       },
        //       {
        //         parameter: "Антивибрационная система",
        //         _id: "gs_bs5500_ad2",
        //       },
        //       {
        //         parameter: "Защитный кожух",
        //         _id: "gs_bs5500_ad3",
        //       },
        //       {
        //         parameter: "Тормоз цепи",
        //         _id: "gs_bs5500_ad4",
        //       },
        //       {
        //         parameter: "Регулируемый маслянный насос",
        //         _id: "gs_bs5500_ad5",
        //       },
        //       {
        //         parameter: "Легкий старт",
        //         _id: "gs_bs5500_ad6",
        //       },
        //       {
        //         parameter: "Многоразовый воздушный фильтр",
        //         _id: "gs_bs5500_ad7",
        //       },
        //     ],
        //     sale: "-13%",
        //     newPrice: "12 990 ₽",
        //     oldPrice: "14 990 ₽",
        //   },
        // },
        {
          _id: "gs_es4100",
          nameModel: "es-4100",
          img: es4100,
          nameProduct: "Бензиновая пила",
          titleParams: [
            {
              param: "мощность:",
              value: "1900 Вт, 2.0 л.с",
              _id: "gs_es4100_tp1",
            },
            {
              param: "длина шины:",
              value: "30см",
              _id: "gs_es4100_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: es4100_1,
                _id: "es4100_1",
              },
              {
                link: es4100_2,
                _id: "es4100_2",
              },
              {
                link: es4100_3,
                _id: "es4100_3",
              },
              {
                link: es4100_4,
                _id: "es4100_4",
              },
              {
                link: es4100_5,
                _id: "es4100_5",
              },
            ],
            fullNameModel: "Бензопила цепная Jonser ES-4100",
            specifications: [
              {
                parameter: "Мощность:",
                value: "1900 Вт, 2.0 л.с",
                _id: "gs_es4100_param1",
              },
              {
                parameter: "1 шина / 1 цепь:",
                value: "30см",
                _id: "gs_es4100_param2",
              },
              {
                parameter: "Количество звеньев:",
                value: "45 шт",
                _id: "gs_es4100_param3",
              },
              {
                parameter: "Объем поршневой группы:",
                value: "25.4 см3",
                _id: "gs_es4100_param5",
              },
              {
                parameter: "Объем топливного бака:",
                value: "230 мл",
                _id: "gs_es4100_param6",
              },
              {
                parameter: "Объем масляного бака:",
                value: "160 мл",
                _id: "gs_es4100_param7",
              },
              {
                parameter: "Соотношение масла и бензина:",
                value: "1:25",
                _id: "gs_es4100_param8",
              },
              {
                parameter: "Ручной стартер",
                value: "Да",
                _id: "gs_es4100_param9",
              },
              {
                parameter: "Обороты холостого хода",
                value: "3000 об/мин",
                _id: "gs_es4100_param10",
              },
              {
                parameter: "Масимальные обороты без нагрузки",
                value: "11500 об/мин",
                _id: "gs_es4100_param11",
              },
              {
                parameter: "Воздушное охлаждение",
                value: "Да",
                _id: "gs_es4100_param12",
              },
              {
                parameter: "Вес без шины и без цепи / брутто:",
                value: "3,7 кг / 5,2 кг",
                _id: "gs_es4100_param13",
              },
              {
                parameter: "Габариты упаковки:",
                value: "30 / 24 / 26 см",
                _id: "gs_es4100_param14",
              },
              {
                parameter: "Гарантия:",
                value: "2 года",
                _id: "gs_es4100_param15",
              },
            ],
            equipment: [
              {
                parameter: "Бензопила:",
                value: "1 шт",
                _id: "gs_es4100_eq1",
              },
              {
                parameter: "Шина 12 дюймов (300мм):",
                value: "1 шт",
                _id: "gs_es4100_eq2",
              },
              {
                parameter: "Цепи 12 дюймов – 30 см (45зв):",
                value: "1 шт",
                _id: "gs_es4100_eq3",
              },
              {
                parameter: "Защитный кожух для цепи:",
                value: "1 шт",
                _id: "gs_es4100_eq4",
              },
              {
                parameter: "Свеча зажигания:",
                value: "1 шт",
                _id: "gs_es4100_eq5",
              },
              {
                parameter: "Набор инструментов:",
                value: "1 шт",
                _id: "gs_es4100_eq6",
              },
              {
                parameter: "Заливная воронка:",
                value: "1 шт",
                _id: "gs_es4100_eq7",
              },
              {
                parameter: "Фильтр воздушный:",
                value: "1 шт",
                _id: "gs_es4100_eq8",
              },
              {
                parameter: "Защитные перчатки:",
                value: "1 шт",
                _id: "gs_es4100_eq9",
              },
              {
                parameter: "Защитные очки:",
                value: "1 шт",
                _id: "gs_es4100_eq10",
              },
              {
                parameter: "Напильник заточный для цепи:",
                value: "1 шт",
                _id: "gs_es4100_eq11",
              },
              {
                parameter: "Инструкция:",
                value: "1 шт",
                _id: "gs_es4100_eq12",
              },
            ],
            advantages: [
              {
                parameter: "Антивибрационная рукоятка",
                _id: "gs_es4100_ad1",
              },
              {
                parameter: "Антивибрационная система",
                _id: "gs_es4100_ad2",
              },
              {
                parameter: "Защитный кожух",
                _id: "gs_es4100_ad3",
              },
              {
                parameter: "Тормоз цепи",
                _id: "gs_es4100_ad4",
              },
              {
                parameter: "Регулируемый маслянный насос",
                _id: "gs_es4100_ad5",
              },
              {
                parameter: "Легкий старт",
                _id: "gs_es4100_ad6",
              },
              {
                parameter: "Многоразовый воздушный фильтр",
                _id: "gs_es4100_ad7",
              },
            ],
            sale: "-5%",
            newPrice: "15 990 ₽",
            oldPrice: "16 990 ₽",
          },
        },
        {
          _id: "gs_es4200",
          nameModel: "es-4200",
          img: es4200,
          nameProduct: "Бензиновая пила",
          titleParams: [
            {
              param: "мощность:",
              value: "3900 Вт, 4.0 л.с",
              _id: "gs_es4200_tp1",
            },
            {
              param: "длина шины (2шт.):",
              value: "35см / 40см",
              _id: "gs_es4200_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: es4200_1,
                _id: "es4200_1",
              },
              {
                link: es4200_2,
                _id: "es4200_2",
              },
              {
                link: es4200_3,
                _id: "es4200_3",
              },
              {
                link: es4200_4,
                _id: "es4200_4",
              },
              {
                link: es4200_5,
                _id: "es4200_5",
              },
            ],
            fullNameModel: "Бензопила цепная Jonser ES-4200",
            specifications: [
              {
                parameter: "Мощность:",
                value: "3900 Вт, 4.0 л.с",
                _id: "gs_es4200_param1",
              },
              {
                parameter: "2 шины / 2 цепи:",
                value: "40см",
                _id: "gs_es4200_param2",
              },
              {
                parameter: "Количество звеньев (2 цепи):",
                value: "50шт / 57шт",
                _id: "gs_es4200_param3",
              },
              {
                parameter: "Шаг:",
                value: "3/8",
                _id: "gs_bs5500_param4",
              },
              {
                parameter: "Объем поршневой группы:",
                value: "40 см3",
                _id: "gs_es4200_param5",
              },
              {
                parameter: "Объем топливного бака:",
                value: "550  мл",
                _id: "gs_es4200_param6",
              },
              {
                parameter: "Объем масляного бака:",
                value: "260 мл",
                _id: "gs_es4200_param7",
              },
              {
                parameter: "Соотношение масла и бензина:",
                value: "1:25",
                _id: "gs_es4200_param8",
              },
              {
                parameter: "Ручной стартер",
                value: "Да",
                _id: "gs_es4200_param9",
              },
              {
                parameter: "Обороты холостого хода",
                value: "3200 об/мин",
                _id: "gs_es4200_param10",
              },
              {
                parameter: "Масимальные обороты без нагрузки",
                value: "11500 об/мин",
                _id: "gs_es4200_param11",
              },
              {
                parameter: "Воздушное охлаждение",
                value: "Да",
                _id: "gs_es4200_param12",
              },
              {
                parameter: "Вес без шины и без цепи / брутто:",
                value: "5,2 кг / 9,3 кг",
                _id: "gs_es4200_param13",
              },
              {
                parameter: "Габариты упаковки:",
                value: "53 / 29 / 30 см",
                _id: "gs_es4200_param14",
              },
              {
                parameter: "Гарантия:",
                value: "2 года",
                _id: "gs_es4200_param15",
              },
            ],
            equipment: [
              {
                parameter: "Бензопила:",
                value: "1 шт",
                _id: "gs_es4200_eq1",
              },
              {
                parameter: "Шина 16 дюймов (400мм):",
                value: "1 шт",
                _id: "gs_es4200_eq2",
              },
              {
                parameter: "Шина 14 дюймов (350мм):",
                value: "1 шт",
                _id: "gs_es4200_eq2_1",
              },
              {
                parameter: "Цепь 16 дюймов – 40 см (57зв):",
                value: "1 шт",
                _id: "gs_es4200_eq3",
              },
              {
                parameter: "Цепь 14 дюймов – 35 см (52зв):",
                value: "1 шт",
                _id: "gs_es4200_eq3_1",
              },
              {
                parameter: "Защитный кожух для цепи:",
                value: "1 шт",
                _id: "gs_es4200_eq4",
              },
              {
                parameter: "Свеча зажигания:",
                value: "1 шт",
                _id: "gs_es4200_eq5",
              },
              {
                parameter: "Набор инструментов:",
                value: "1 шт",
                _id: "gs_es4200_eq6",
              },
              {
                parameter: "Заливная воронка:",
                value: "1 шт",
                _id: "gs_es4200_eq7",
              },
              {
                parameter: "Фильтр воздушный:",
                value: "1 шт",
                _id: "gs_es4200_eq8",
              },
              {
                parameter: "Защитные перчатки:",
                value: "1 шт",
                _id: "gs_es4200_eq9",
              },
              {
                parameter: "Защитные очки:",
                value: "1 шт",
                _id: "gs_es4200_eq10",
              },
              {
                parameter: "Напильник заточный для цепи:",
                value: "1 шт",
                _id: "gs_es4200_eq11",
              },
              {
                parameter: "Инструкция:",
                value: "1 шт",
                _id: "gs_es4200_eq12",
              },
            ],
            advantages: [
              {
                parameter: "Антивибрационная рукоятка",
                _id: "gs_es4200_ad1",
              },
              {
                parameter: "Антивибрационная система",
                _id: "gs_es4200_ad2",
              },
              {
                parameter: "Защитный кожух",
                _id: "gs_es4200_ad3",
              },
              {
                parameter: "Тормоз цепи",
                _id: "gs_es4200_ad4",
              },
              {
                parameter: "Регулируемый маслянный насос",
                _id: "gs_es4200_ad5",
              },
              {
                parameter: "Легкий старт",
                _id: "gs_es4200_ad6",
              },
              {
                parameter: "Многоразовый воздушный фильтр",
                _id: "gs_es4200_ad7",
              },
              {
                parameter: "Металлический стартер",
                _id: "gs_es4200_ad8",
              },
              {
                parameter: "Металлический тормоз",
                _id: "gs_es4200_ad9",
              },
            ],
            sale: "-11%",
            newPrice: "15 990 ₽",
            oldPrice: "17 990 ₽",
          },
        },
        {
          _id: "gs_es43300",
          nameModel: "es-43300",
          img: es43300,
          nameProduct: "Бензиновая пила",
          titleParams: [
            {
              param: "мощность:",
              value: "4800 Вт, 4.9 л.с",
              _id: "gs_es43300_tp1",
            },
            {
              param: "длина шины:",
              value: "45см",
              _id: "gs_es43300_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: es43300_1,
                _id: "es43300_1",
              },
              {
                link: es43300_2,
                _id: "es43300_2",
              },
              {
                link: es43300_3,
                _id: "es43300_3",
              },
              {
                link: es43300_4,
                _id: "es43300_4",
              },
              {
                link: es43300_5,
                _id: "es43300_5",
              },
            ],
            fullNameModel: "Бензопила цепная Jonser ES-43300",
            specifications: [
              {
                parameter: "Мощность:",
                value: "4800 Вт, 4.9 л.с",
                _id: "gs_es43300_param1",
              },
              {
                parameter: "1 шина / 1 цепь:",
                value: "45см",
                _id: "gs_es43300_param2",
              },
              {
                parameter: "Количество звеньев:",
                value: "72 шт",
                _id: "gs_es43300_param3",
              },
              {
                parameter: "Шаг:",
                value: "0.325",
                _id: "gs_es43300_param4",
              },
              {
                parameter: "Объем поршневой группы:",
                value: "58 см3",
                _id: "gs_es43300_param5",
              },
              {
                parameter: "Объем топливного бака:",
                value: "550  мл",
                _id: "gs_es43300_param6",
              },
              {
                parameter: "Объем масляного бака:",
                value: "260 мл",
                _id: "gs_es43300_param7",
              },
              {
                parameter: "Соотношение масла и бензина:",
                value: "1:25",
                _id: "gs_es43300_param8",
              },
              {
                parameter: "Ручной стартер",
                value: "Да",
                _id: "gs_es43300_param9",
              },
              {
                parameter: "Обороты холостого хода",
                value: "3200 об/мин",
                _id: "gs_es43300_param10",
              },
              {
                parameter: "Масимальные обороты без нагрузки",
                value: "13500 об/мин",
                _id: "gs_es43300_param11",
              },
              {
                parameter: "Воздушное охлаждение",
                value: "Да",
                _id: "gs_es43300_param12",
              },
              {
                parameter: "Вес без шины и без цепи / брутто:",
                value: "5,5 кг / 8,65 кг",
                _id: "gs_es43300_param13",
              },
              {
                parameter: "Габариты упаковки:",
                value: "54 / 28 / 30 см",
                _id: "gs_es43300_param14",
              },
              {
                parameter: "Гарантия:",
                value: "2 года",
                _id: "gs_es43300_param15",
              },
            ],
            equipment: [
              {
                parameter: "Бензопила:",
                value: "1 шт",
                _id: "gs_es43300_eq1",
              },
              {
                parameter: "Шина 18 дюймов (450мм):",
                value: "1 шт",
                _id: "gs_es43300_eq2",
              },
              {
                parameter: "Цепь 18 дюймов – 45 см (72зв):",
                value: "1 шт",
                _id: "gs_es43300_eq3",
              },
              {
                parameter: "Защитный кожух для цепи:",
                value: "1 шт",
                _id: "gs_es43300_eq4",
              },
              {
                parameter: "Свеча зажигания:",
                value: "1 шт",
                _id: "gs_es43300_eq5",
              },
              {
                parameter: "Набор инструментов:",
                value: "1 шт",
                _id: "gs_es43300_eq6",
              },
              {
                parameter: "Заливная воронка:",
                value: "1 шт",
                _id: "gs_es43300_eq7",
              },
              {
                parameter: "Фильтр воздушный:",
                value: "1 шт",
                _id: "gs_es43300_eq8",
              },
              {
                parameter: "Защитные перчатки:",
                value: "1 шт",
                _id: "gs_es43300_eq9",
              },
              {
                parameter: "Защитные очки:",
                value: "1 шт",
                _id: "gs_es43300_eq10",
              },
              {
                parameter: "Напильник заточный для цепи:",
                value: "1 шт",
                _id: "gs_es43300_eq11",
              },
              {
                parameter: "Инструкция:",
                value: "1 шт",
                _id: "gs_es43300_eq12",
              },
            ],
            advantages: [
              {
                parameter: "Антивибрационная рукоятка",
                _id: "gs_es43300_ad1",
              },
              {
                parameter: "Антивибрационная система",
                _id: "gs_es43300_ad2",
              },
              {
                parameter: "Защитный кожух",
                _id: "gs_es43300_ad3",
              },
              {
                parameter: "Тормоз цепи",
                _id: "gs_es43300_ad4",
              },
              {
                parameter: "Регулируемый маслянный насос",
                _id: "gs_es43300_ad5",
              },
              {
                parameter: "Легкий старт",
                _id: "gs_es43300_ad6",
              },
              {
                parameter: "Многоразовый воздушный фильтр",
                _id: "gs_es43300_ad7",
              },
            ],
            sale: "-15%",
            newPrice: "15 990 ₽",
            oldPrice: "18 990 ₽",
          },
        },
        {
          _id: "gs_es4300s",
          nameModel: "es-4300s",
          img: es4300s,
          nameProduct: "Бензиновая пила",
          titleParams: [
            {
              param: "мощность:",
              value: "5800  Вт, 5.1 л.с",
              _id: "gs_es4300s_tp1",
            },
            {
              param: "длина шины:",
              value: "45см",
              _id: "gs_es4300s_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: es4300s_1,
                _id: "es4300s_1",
              },
              {
                link: es4300s_2,
                _id: "es4300s_2",
              },
              {
                link: es4300s_3,
                _id: "es4300s_3",
              },
              {
                link: es4300s_4,
                _id: "es4300s_4",
              },
              {
                link: es4300s_5,
                _id: "es4300s_5",
              },
            ],
            fullNameModel: "Бензопила цепная Jonser ES-4300S",
            specifications: [
              {
                parameter: "Мощность:",
                value: "5800  Вт, 5.1 л.с",
                _id: "gs_es4300s_param1",
              },
              {
                parameter: "1 шина / 1 цепь:",
                value: "45см",
                _id: "gs_es4300s_param2",
              },
              {
                parameter: "Количество звеньев:",
                value: "72 шт",
                _id: "gs_es4300s_param3",
              },
              {
                parameter: "Шаг:",
                value: "0.325",
                _id: "gs_es4300s_param4",
              },
              {
                parameter: "Объем поршневой группы:",
                value: "52 см3",
                _id: "gs_es4300s_param5",
              },
              {
                parameter: "Объем топливного бака:",
                value: "550  мл",
                _id: "gs_es4300s_param6",
              },
              {
                parameter: "Объем масляного бака:",
                value: "260 мл",
                _id: "gs_es4300s_param7",
              },
              {
                parameter: "Соотношение масла и бензина:",
                value: "1:25",
                _id: "gs_es4300s_param8",
              },
              {
                parameter: "Ручной стартер",
                value: "Да",
                _id: "gs_es4300s_param9",
              },
              {
                parameter: "Обороты холостого хода",
                value: "3200 об/мин",
                _id: "gs_es4300s_param10",
              },
              {
                parameter: "Масимальные обороты без нагрузки",
                value: "8500 об/мин",
                _id: "gs_es4300s_param11",
              },
              {
                parameter: "Воздушное охлаждение",
                value: "Да",
                _id: "gs_es4300s_param12",
              },
              {
                parameter: "Вес без шины и без цепи / брутто:",
                value: "5,5 кг / 8,7 кг",
                _id: "gs_es4300s_param13",
              },
              {
                parameter: "Габариты упаковки:",
                value: "52 / 28 / 30 см",
                _id: "gs_es4300s_param14",
              },
              {
                parameter: "Гарантия:",
                value: "2 года",
                _id: "gs_es4300s_param15",
              },
            ],
            equipment: [
              {
                parameter: "Бензопила:",
                value: "1 шт",
                _id: "gs_es4300s_eq1",
              },
              {
                parameter: "Шина 18 дюймов (450мм):",
                value: "1 шт",
                _id: "gs_es4300s_eq2",
              },
              {
                parameter: "Цепь 18 дюймов – 45 см (72зв):",
                value: "1 шт",
                _id: "gs_es4300s_eq3",
              },
              {
                parameter: "Защитный кожух для цепи:",
                value: "1 шт",
                _id: "gs_es4300s_eq4",
              },
              {
                parameter: "Свеча зажигания:",
                value: "1 шт",
                _id: "gs_es4300s_eq5",
              },
              {
                parameter: "Набор инструментов:",
                value: "1 шт",
                _id: "gs_es4300s_eq6",
              },
              {
                parameter: "Фильтр воздушный:",
                value: "1 шт",
                _id: "gs_es4300s_eq8",
              },
              {
                parameter: "Защитные перчатки:",
                value: "1 шт",
                _id: "gs_es4300s_eq9",
              },
              {
                parameter: "Защитные очки:",
                value: "1 шт",
                _id: "gs_es4300s_eq10",
              },
              {
                parameter: "Напильник заточный для цепи:",
                value: "1 шт",
                _id: "gs_es4300s_eq11",
              },
              {
                parameter: "Инструкция:",
                value: "1 шт",
                _id: "gs_es4300s_eq12",
              },
            ],
            advantages: [
              {
                parameter: "Антивибрационная рукоятка",
                _id: "gs_es4300s_ad1",
              },
              {
                parameter: "Антивибрационная система",
                _id: "gs_es4300s_ad2",
              },
              {
                parameter: "Защитный кожух",
                _id: "gs_es4300s_ad3",
              },
              {
                parameter: "Тормоз цепи",
                _id: "gs_es4300s_ad4",
              },
              {
                parameter: "Регулируемый маслянный насос",
                _id: "gs_es4300s_ad5",
              },
              {
                parameter: "Легкий старт",
                _id: "gs_es4300s_ad6",
              },
              {
                parameter: "Многоразовый воздушный фильтр",
                _id: "gs_es4300s_ad7",
              },
              {
                parameter: "Металлический стартер",
                _id: "gs_es4300s_ad8",
              },
              {
                parameter: "Металлический тормоз",
                _id: "gs_es4300s_ad9",
              },
            ],
            sale: "-8%",
            newPrice: "17 990 ₽",
            oldPrice: "19 590 ₽",
          },
        },
      ],
    },
    {
      _id: "bs",
      subtitle: "Аккумуляторные пилы",
      premium: false,
      isHorizontal: true,
      models: [
        // {
        //   _id: "bs_es2300",
        //   nameModel: "ES-2300",
        //   // img: es2300,
        //   detailed: {
        //     // images: [
        //   {
        //     link: j190qx_1,
        //     _id: "j190qx_1",
        //   },
        //   {
        //     link: j190qx_2,
        //     _id: "j190qx_2",
        //   },
        //   {
        //     link: j190qx_3,
        //     _id: "j190qx_3",
        //   },
        //   {
        //     link: j190qx_4,
        //     _id: "j190qx_4",
        //   },
        //   {
        //     link: j190qx_5,
        //     _id: "j190qx_5",
        //   },
        // ],
        //     fullNameModel: "Электропила Jonser ES-2300",
        //     specifications: [
        //       {
        //         parameter: "Мощность:",
        //         value: "2300 Вт",
        //         _id: "bs_es2300_param1",
        //       },
        //       {
        //         parameter: "Длина шины:",
        //         value: '405мм./16"',
        //         _id: "bs_es2300_param2",
        //       },
        //       {
        //         parameter: "Количество звеньев:",
        //         value: "59 шт",
        //         _id: "bs_es2300_param3",
        //       },
        //       {
        //         parameter: "Шаг:",
        //         value: "3/8",
        //         _id: "bs_es2300_param4",
        //       },
        //       {
        //         parameter: "Коллекторный электродвигатель",
        //         value: "Да",
        //         _id: "bs_es2300_param5",
        //       },
        //       {
        //         parameter: "Скорость цепи:",
        //         value: "13 м/с",
        //         _id: "bs_es2300_param6",
        //       },

        //       {
        //         parameter: "Автоматическая подача масла",
        //         value: "Да",
        //         _id: "bs_es2300_param12",
        //       },
        //       {
        //         parameter: "Вес без шины и без цепи / брутто:",
        //         value: "3,3 кг / 4,8 кг",
        //         _id: "bs_es2300_param13",
        //       },
        //       {
        //         parameter: "Габариты упаковки:",
        //         value: "48 / 47 / 40 см",
        //         _id: "bs_es2300_param14",
        //       },
        //       {
        //         parameter: "Гарантия:",
        //         value: "2 года",
        //         _id: "bs_es2300_param15",
        //       },
        //     ],
        //     equipment: [
        //       {
        //         parameter: "Электропила:",
        //         value: "1 шт",
        //         _id: "gs_es2300_eq1",
        //       },
        //       {
        //         parameter: "Шина 16 дюймов (400мм):",
        //         value: "1 шт",
        //         _id: "gs_es2300_eq2",
        //       },
        //       {
        //         parameter: "Цепь 16 дюймов – 40 см (59зв):",
        //         value: "1 шт",
        //         _id: "gs_es2300_eq3",
        //       },
        //       {
        //         parameter: "Ключ для сборки:",
        //         value: "1 шт",
        //         _id: "gs_es2300_eq11",
        //       },
        //       {
        //         parameter: "Инструкция:",
        //         value: "1 шт",
        //         _id: "gs_es2300_eq12",
        //       },
        //     ],
        //     advantages: [
        //       {
        //         parameter: "Автоматическая смазка цепи",
        //         _id: "gs_es2300_ad1",
        //       },
        //       {
        //         parameter: "Блокировка от случайного включения",
        //         _id: "gs_es2300_ad2",
        //       },
        //       {
        //         parameter: "Наклонный распил/рез",
        //         _id: "gs_es2300_ad3",
        //       },
        //     ],
        //     sale: "-33%",
        //     newPrice: "7 990 ₽",
        //     oldPrice: "11 990 ₽",
        //   },
        // },
        {
          _id: "bs_jac186s",
          nameModel: "jac-186s",
          img: jac186s,
          nameProduct: "Аккумуляторная мини-пила",
          titleParams: [
            {
              param: "вольтаж:",
              value: "18 В",
              _id: "bs_jac186s_tp1",
            },
            {
              param: "время работы:",
              value: "120 мин",
              _id: "bs_jac186s_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: jac186s_1,
                _id: "jac186s_1",
              },
              {
                link: jac186s_2,
                _id: "jac186s_2",
              },
              {
                link: jac186s_3,
                _id: "jac186s_3",
              },
              {
                link: jac186s_4,
                _id: "jac186s_4",
              },
              {
                link: jac186s_5,
                _id: "jac186s_5",
              },
            ],
            fullNameModel: "Аккумуляторная цепная мини-пила Jonser JAC-186S",
            specifications: [
              {
                parameter: "Напряжение аккумулятора:",
                value: "18 В",
                _id: "bs_jac186s_param1",
              },
              {
                parameter: "Мощность:",
                value: "600 Вт",
                _id: "bs_jac186s_param1_2",
              },
              {
                parameter: "Скорость хода цепи:",
                value: "6 м/с",
                _id: "bs_jac186s_param2",
              },
              {
                parameter: "Число оборотов двигателя:",
                value: "500 об/мин",
                _id: "bs_jac186s_param3",
              },
              {
                parameter: "2 Li-lon аккумулятора:",
                value: "2 mAh",
                _id: "bs_jac186s_param4",
              },
              {
                parameter: "Размер пильной шины:",
                value: '15,24 см/ 6"',
                _id: "bs_jac186s_param5",
              },
              {
                parameter: "Время зарядки полностью разряженного АКБ:",
                value: "60 мин",
                _id: "bs_jac186s_param6",
              },
              {
                parameter: "Коллекторный двигатель",
                value: "Да",
                _id: "bs_jac186s_param7",
              },
              {
                parameter: "Прорезиненная рукоятка",
                value: "Да",
                _id: "bs_jac186s_param8",
              },
              {
                parameter: "Защита от случайного пуска",
                value: "Да",
                _id: "bs_jac186s_param9",
              },
              {
                parameter: "Защита от перегрева",
                value: "Да",
                _id: "bs_jac186s_param10",
              },
              {
                parameter: "Защита от короткого замыкания",
                value: "Да",
                _id: "bs_jac186s_param11",
              },
              {
                parameter: "Защитный кожух",
                value: "Да",
                _id: "bs_jac186s_param13",
              },
              {
                parameter: "Рабочий упор",
                value: "Да",
                _id: "bs_jac186s_param14",
              },
              {
                parameter: "Вес нетто / брутто:",
                value: "1,1 кг / 2,3 кг",
                _id: "bs_jac186s_param15",
              },
              {
                parameter: "Габариты упаковки:",
                value: "36 / 20 / 13 см",
                _id: "bs_jac186s_param16",
              },
              {
                parameter: "Гарантия:",
                value: "2 года",
                _id: "bs_jac186s_param17",
              },
            ],
            equipment: [
              {
                parameter: "Аккумуляторная мини-пила:",
                value: "1 шт",
                _id: "gs_jac186s_eq1",
              },
              {
                parameter: 'Шина для цепи 6":',
                value: "1 шт",
                _id: "gs_jac186s_eq2",
              },
              {
                parameter: "Цепь для пилы 37 звеньев:",
                value: "1 шт",
                _id: "gs_jac186s_eq3",
              },
              {
                parameter: "Аккумулятор 2000 mAh:",
                value: "2 шт",
                _id: "gs_jac186s_eq4",
              },
              {
                parameter: "Ключ накидной:",
                value: "1 шт",
                _id: "gs_jac186s_eq5",
              },
              {
                parameter: "Отвертка:",
                value: "1 шт",
                _id: "gs_jac186s_eq6",
              },
              {
                parameter: "Масло для смазки цепи:",
                value: "1 шт",
                _id: "gs_jac186s_eq7",
              },
              {
                parameter: "Инструкция:",
                value: "1 шт",
                _id: "gs_jac186s_eq12",
              },
            ],
            advantages: [
              {
                parameter: "Блокировка от случайного включения",
                _id: "gs_jac186s_ad2",
              },
              {
                parameter: "Автоотключение при перегреве",
                _id: "gs_jac186s_ad3",
              },
              {
                parameter: "Наклонный распил/рез",
                _id: "gs_jac186s_ad4",
              },
              {
                parameter: "Рукоятка с резиновым покрытием",
                _id: "gs_jac186s_ad5",
              },
            ],
            sale: "-5%",
            newPrice: "8 490 ₽",
            oldPrice: "11 590 ₽",
          },
        },
      ],
    },
  ],
};

export { сhainsawsInfo };
