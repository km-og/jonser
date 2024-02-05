//Бензиновые генераторы
// gg3000
import gg3000 from "../images/gasolineGenerators/gg3000/0.webp";
import gg3000_1 from "../images/gasolineGenerators/gg3000/1.webp";
import gg3000_2 from "../images/gasolineGenerators/gg3000/2.webp";
import gg3000_3 from "../images/gasolineGenerators/gg3000/3.webp";
import gg3000_4 from "../images/gasolineGenerators/gg3000/4.webp";
import gg3000_5 from "../images/gasolineGenerators/gg3000/5.webp";
// gg3500
import gg3500 from "../images/gasolineGenerators/gg3500/0.webp";
import gg3500_1 from "../images/gasolineGenerators/gg3500/1.webp";
import gg3500_2 from "../images/gasolineGenerators/gg3500/2.webp";
import gg3500_3 from "../images/gasolineGenerators/gg3500/3.webp";
import gg3500_4 from "../images/gasolineGenerators/gg3500/4.webp";
import gg3500_5 from "../images/gasolineGenerators/gg3500/5.webp";

// import gg4000 from "../images/gasolineGenerators/";
// import gg400Big from "../images/gasolineGenerators/";
// import gg8000 from "../images/gasolineGenerators/";
// import gg800Big from "../images/gasolineGenerators/";

const gasolineGeneratorsInfo = {
  title: "Генераторы",
  description: [
    {
      _id: 1,
      text: "Портативные бензогенераторы обеспечивают защиту от перегрузок и коротких замыканий. Они представляют собой надежные резервные источники энергии, необходимые для дач, коттеджей и загородных домов. В случае возможного отключения электроснабжения из-за нестабильности сети, они призваны обеспечить электроэнергией необходимые устройства, инструменты и оборудование на какое-то время. Также они полезны при уличных работах, где требуется подключение сетевых электроинструментов, но нет доступа к основному источнику питания.",
    },
  ],

  collections: [
    {
      _id: "gg",
      subtitle: "Бензиновые генераторы",
      premium: false,
      isHorizontal: false,
      models: [
        {
          _id: "gg_gg3000",
          nameModel: "gg-3000",
          img: gg3000,
          nameProduct: "бензиновый генератор",
          titleParams: [
            {
              param: "мощность:",
              value: "3000Вт",
              _id: "gg_gg3000_tp1",
            },
            {
              param: "Объем бака:",
              value: "15л",
              _id: "gg_gg3000_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: gg3000_1,
                _id: "gg3000_1",
              },
              {
                link: gg3000_2,
                _id: "gg3000_2",
              },
              {
                link: gg3000_3,
                _id: "gg3000_3",
              },
              {
                link: gg3000_4,
                _id: "gg3000_4",
              },
              {
                link: gg3000_5,
                _id: "gg3000_5",
              },
            ],
            fullNameModel: "Электрогенератор бензиновый Jonser GG-3000",
            specifications: [
              {
                parameter: "4-тактный 1-цилиндровый двигатель",
                value: "Да",
                _id: "gg_gg3000_param1",
              },
              {
                parameter: "Максимальная выходная мощность:",
                value: "3000Вт",
                _id: "gg_gg3000_param2",
              },
              {
                parameter: "Номинальная выходная мощность:",
                value: "2,5 кВт",
                _id: "gg_gg3000_param3",
              },
              {
                parameter: "Число оборотов:",
                value: "3200 об/мин",
                _id: "gg_gg3000_param4",
              },
              {
                parameter: "Объем двигателя:",
                value: "208 см3",
                _id: "gg_gg3000_param5",
              },
              {
                parameter: "Мощность двигателя:",
                value: "6,5 л.с.",
                _id: "gg_gg3000_param6",
              },
              {
                parameter: "Объем масляной системы:",
                value: "0,6 л",
                _id: "gg_gg3000_param7",
              },
              {
                parameter: "Объем топливного бака:",
                value: "15 л",
                _id: "gg_gg3000_param8",
              },
              {
                parameter: "Расход топлива:",
                value: "395 гр./кВт/ч",
                _id: "gg_gg3000_param9",
              },
              {
                parameter: "2 розетки 220В",
                value: "Да",
                _id: "gg_gg3000_param10",
              },
              {
                parameter: "Выход на 12В",
                value: "Да",
                _id: "gg_gg3000_param11",
              },
              {
                parameter: "Автомат сетевой",
                value: "Да",
                _id: "gg_gg3000_param12",
              },
              {
                parameter: "Датчик уровня масла",
                value: "Да",
                _id: "gg_gg3000_param13",
              },

              {
                parameter: "Индикатор уровня топлива",
                value: "Да",
                _id: "gg_gg3000_param15",
              },
              {
                parameter: "Медная обмотка",
                value: "Да",
                _id: "gg_gg3000_param16",
              },
              {
                parameter: "AVR - автоматическая регулировка напряжения",
                value: "Да",
                _id: "gg_gg3000_param17",
              },
              {
                parameter: "Стабилизация +/- 5%",
                value: "Да",
                _id: "gg_gg3000_param18",
              },
              {
                parameter: "Усиленные антивибро подушки",
                value: "Да",
                _id: "gg_gg3000_param19",
              },
              {
                parameter: "Ручной стартер",
                value: "Да",
                _id: "gg_gg3000_param20",
              },
              {
                parameter: "Воздушное принудительное охлаждение",
                value: "Да",
                _id: "gg_gg3000_param21",
              },
              {
                parameter: "Вес:",
                value: "47кг",
                _id: "gg_gg3000_param22",
              },
              {
                parameter: "Габариты:",
                value: "63 / 46 / 54 см",
                _id: "gg_gg3000_param23",
              },
              {
                parameter: "Гарантия:",
                value: "2 года",
                _id: "gg_gg3000_param24",
              },
            ],
            equipment: [
              {
                parameter: "Генератор:",
                value: "1 шт",
                _id: "gg_gg3000_eq1",
              },
              {
                parameter: "Ключ свечной:",
                value: "1 шт",
                _id: "gg_gg3000_eq2",
              },
              {
                parameter: "Штепсельная вилка:",
                value: "2 шт",
                _id: "gg_gg3000_eq3",
              },
              {
                parameter: "Провод для зарядки аккумулятора:",
                value: "1 шт",
                _id: "gg_gg3000_eq4",
              },
              {
                parameter: "Инструкция по эксплуатации:",
                value: "1 шт",
                _id: "gg_gg3000_eq5",
              },
            ],

            sale: "-12%",
            newPrice: "28 990 ₽",
            oldPrice: "32 990 ₽",
          },
        },
        {
          _id: "gg_gg3500",
          nameModel: "gg-3500",
          img: gg3500,
          nameProduct: "бензиновый генератор",
          titleParams: [
            {
              param: "мощность:",
              value: "3500Вт",
              _id: "gg_gg3500_tp1",
            },
            {
              param: "Объем бака:",
              value: "15л",
              _id: "gg_gg3500_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: gg3500_1,
                _id: "gg3500_1",
              },
              {
                link: gg3500_2,
                _id: "gg3500_2",
              },
              {
                link: gg3500_3,
                _id: "gg3500_3",
              },
              {
                link: gg3500_4,
                _id: "gg3500_4",
              },
              {
                link: gg3500_5,
                _id: "gg3500_5",
              },
            ],
            fullNameModel: "Электрогенератор бензиновый Jonser GG-3500",
            specifications: [
              {
                parameter: "4-тактный 1-цилиндровый двигатель",
                value: "Да",
                _id: "gg_gg3500_param1",
              },
              {
                parameter: "Максимальная выходная мощность:",
                value: "3500Вт",
                _id: "gg_gg3500_param2",
              },
              {
                parameter: "Номинальная выходная мощность:",
                value: "3 кВт",
                _id: "gg_gg3500_param3",
              },
              {
                parameter: "Число оборотов:",
                value: "3200 об/мин",
                _id: "gg_gg3500_param4",
              },
              {
                parameter: "Объем двигателя:",
                value: "208 см3",
                _id: "gg_gg3500_param5",
              },
              {
                parameter: "Мощность двигателя:",
                value: "6,5 л.с.",
                _id: "gg_gg3500_param6",
              },
              {
                parameter: "Объем масляной системы:",
                value: "0,6 л",
                _id: "gg_gg3500_param7",
              },
              {
                parameter: "Объем топливного бака:",
                value: "15 л",
                _id: "gg_gg3500_param8",
              },
              {
                parameter: "Расход топлива:",
                value: "395 гр./кВт/ч",
                _id: "gg_gg3500_param9",
              },
              {
                parameter: "2 розетки 220В",
                value: "Да",
                _id: "gg_gg3500_param10",
              },
              {
                parameter: "Выход на 12В",
                value: "Да",
                _id: "gg_gg3500_param11",
              },
              {
                parameter: "Автомат сетевой",
                value: "Да",
                _id: "gg_gg3500_param12",
              },
              {
                parameter: "Датчик уровня масла",
                value: "Да",
                _id: "gg_gg3500_param13",
              },

              {
                parameter: "Индикатор уровня топлива",
                value: "Да",
                _id: "gg_gg3500_param15",
              },
              {
                parameter: "Медная обмотка",
                value: "Да",
                _id: "gg_gg3500_param16",
              },
              {
                parameter: "AVR - автоматическая регулировка напряжения",
                value: "Да",
                _id: "gg_gg3500_param17",
              },
              {
                parameter: "Стабилизация +/- 5%",
                value: "Да",
                _id: "gg_gg3500_param18",
              },
              {
                parameter: "Усиленные антивибро подушки",
                value: "Да",
                _id: "gg_gg3500_param19",
              },
              {
                parameter: "Ручной стартер",
                value: "Да",
                _id: "gg_gg3500_param20",
              },
              {
                parameter: "Воздушное принудительное охлаждение",
                value: "Да",
                _id: "gg_gg3500_param21",
              },
              {
                parameter: "Вес нетто / брутто:",
                value: "43 / 47 кг",
                _id: "gg_gg3500_param22",
              },
              {
                parameter: "Габариты:",
                value: "63 / 46 / 54 см",
                _id: "gg_gg3500_param23",
              },
              {
                parameter: "Гарантия:",
                value: "2 года",
                _id: "gg_gg3500_param24",
              },
            ],
            equipment: [
              {
                parameter: "Генератор:",
                value: "1 шт",
                _id: "gg_gg3500_eq1",
              },
              {
                parameter: "Ключ свечной:",
                value: "1 шт",
                _id: "gg_gg3500_eq2",
              },
              {
                parameter: "Штепсельная вилка:",
                value: "2 шт",
                _id: "gg_gg3500_eq3",
              },
              {
                parameter: "Провод для зарядки аккумулятора:",
                value: "1 шт",
                _id: "gg_gg3500_eq4",
              },
              {
                parameter: "Инструкция по эксплуатации:",
                value: "1 шт",
                _id: "gg_gg3500_eq5",
              },
            ],

            sale: "-5%",
            newPrice: "31 990 ₽",
            oldPrice: "33 990 ₽",
          },
        },
        // {
        //   _id: "gg_gg4000",
        //   nameModel: "gg-4000",
        //   // img: gg4000,
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
        //     fullNameModel: "Электрогенератор бензиновый Jonser GG-4000",
        //     specifications: [
        //       {
        //         parameter: "4-тактный 1-цилиндровый двигатель",
        //         value: "Да",
        //         _id: "gg_gg4000_param1",
        //       },
        //       {
        //         parameter: "Максимальная выходная мощность:",
        //         value: "4000Вт",
        //         _id: "gg_gg4000_param2",
        //       },
        //       {
        //         parameter: "Номинальная выходная мощность:",
        //         value: "3,7 кВт",
        //         _id: "gg_gg4000_param3",
        //       },
        //       {
        //         parameter: "Число оборотов:",
        //         value: "3200 об/мин",
        //         _id: "gg_gg4000_param4",
        //       },
        //       {
        //         parameter: "Объем двигателя:",
        //         value: "208 см3",
        //         _id: "gg_gg4000_param5",
        //       },
        //       {
        //         parameter: "Мощность двигателя:",
        //         value: "6,5 л.с.",
        //         _id: "gg_gg4000_param6",
        //       },
        //       {
        //         parameter: "Объем масляной системы:",
        //         value: "0,6 л",
        //         _id: "gg_gg4000_param7",
        //       },
        //       {
        //         parameter: "Объем топливного бака:",
        //         value: "15 л",
        //         _id: "gg_gg4000_param8",
        //       },
        //       {
        //         parameter: "Расход топлива:",
        //         value: "395 гр./кВт/ч",
        //         _id: "gg_gg4000_param9",
        //       },
        //       {
        //         parameter: "2 розетки 220В",
        //         value: "Да",
        //         _id: "gg_gg4000_param10",
        //       },
        //       {
        //         parameter: "Выход на 12В",
        //         value: "Да",
        //         _id: "gg_gg4000_param11",
        //       },
        //       {
        //         parameter: "Автомат сетевой",
        //         value: "Да",
        //         _id: "gg_gg4000_param12",
        //       },
        //       {
        //         parameter: "Датчик уровня масла",
        //         value: "Да",
        //         _id: "gg_gg4000_param13",
        //       },

        //       {
        //         parameter: "Индикатор уровня топлива",
        //         value: "Да",
        //         _id: "gg_gg4000_param15",
        //       },
        //       {
        //         parameter: "Медная обмотка",
        //         value: "Да",
        //         _id: "gg_gg4000_param16",
        //       },
        //       {
        //         parameter: "AVR - автоматическая регулировка напряжения",
        //         value: "Да",
        //         _id: "gg_gg4000_param17",
        //       },
        //       {
        //         parameter: "Стабилизация +/- 5%",
        //         value: "Да",
        //         _id: "gg_gg4000_param18",
        //       },
        //       {
        //         parameter: "Усиленные антивибро подушки",
        //         value: "Да",
        //         _id: "gg_gg4000_param19",
        //       },
        //       {
        //         parameter: "Ручной стартер",
        //         value: "Да",
        //         _id: "gg_gg4000_param20",
        //       },
        //       {
        //         parameter: "Воздушное принудительное охлаждение",
        //         value: "Да",
        //         _id: "gg_gg4000_param21",
        //       },
        //       {
        //         parameter: "Вес:",
        //         value: "47кг",
        //         _id: "gg_gg4000_param22",
        //       },
        //       {
        //         parameter: "Габариты:",
        //         value: "63 / 46 / 54 см",
        //         _id: "gg_gg4000_param23",
        //       },
        //       {
        //         parameter: "Гарантия:",
        //         value: "2 года",
        //         _id: "gg_gg4000_param24",
        //       },
        //     ],
        //     equipment: [
        //       {
        //         parameter: "Генератор:",
        //         value: "1 шт",
        //         _id: "gg_gg4000_eq1",
        //       },
        //       {
        //         parameter: "Ключ свечной:",
        //         value: "1 шт",
        //         _id: "gg_gg4000_eq2",
        //       },
        //       {
        //         parameter: "Штепсельная вилка:",
        //         value: "2 шт",
        //         _id: "gg_gg4000_eq3",
        //       },
        //       {
        //         parameter: "Провод для зарядки аккумулятора:",
        //         value: "1 шт",
        //         _id: "gg_gg4000_eq4",
        //       },
        //       {
        //         parameter: "Инструкция по эксплуатации:",
        //         value: "1 шт",
        //         _id: "gg_gg4000_eq5",
        //       },
        //     ],

        //     sale: "-10%",
        //     newPrice: "35 990 ₽",
        //     oldPrice: "39 990 ₽",
        //   },
        // },
        // {
        //   _id: "gg_gg8000",
        //   nameModel: "gg-8000",
        //   // img: gg8000,
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
        //     fullNameModel: "Электрогенератор бензиновый Jonser GG-8000",
        //     specifications: [
        //       {
        //         parameter: "4-тактный 1-цилиндровый двигатель",
        //         value: "Да",
        //         _id: "gg_gg8000_param1",
        //       },
        //       {
        //         parameter: "Максимальная выходная мощность:",
        //         value: "7500Вт",
        //         _id: "gg_gg8000_param2",
        //       },
        //       {
        //         parameter: "Номинальная выходная мощность:",
        //         value: "6,5 кВт",
        //         _id: "gg_gg8000_param3",
        //       },
        //       {
        //         parameter: "Число оборотов:",
        //         value: "3200 об/мин",
        //         _id: "gg_gg8000_param4",
        //       },
        //       {
        //         parameter: "Объем двигателя:",
        //         value: "390 см3",
        //         _id: "gg_gg8000_param5",
        //       },
        //       {
        //         parameter: "Мощность двигателя:",
        //         value: "15 л.с.",
        //         _id: "gg_gg8000_param6",
        //       },
        //       {
        //         parameter: "Объем масляной системы:",
        //         value: "1,1 л",
        //         _id: "gg_gg8000_param7",
        //       },
        //       {
        //         parameter: "Объем топливного бака:",
        //         value: "25 л",
        //         _id: "gg_gg8000_param8",
        //       },
        //       {
        //         parameter: "Расход топлива:",
        //         value: "395 гр./кВт/ч",
        //         _id: "gg_gg8000_param9",
        //       },
        //       {
        //         parameter: "2 розетки 220В",
        //         value: "Да",
        //         _id: "gg_gg8000_param10",
        //       },
        //       {
        //         parameter: "Выход на 12В",
        //         value: "Да",
        //         _id: "gg_gg8000_param11",
        //       },
        //       {
        //         parameter: "Автомат сетевой",
        //         value: "Да",
        //         _id: "gg_gg8000_param12",
        //       },
        //       {
        //         parameter: "Датчик уровня масла",
        //         value: "Да",
        //         _id: "gg_gg8000_param13",
        //       },
        //       {
        //         parameter: "Индикатор уровня топлива",
        //         value: "Да",
        //         _id: "gg_gg8000_param15",
        //       },
        //       {
        //         parameter: "Медная обмотка",
        //         value: "Да",
        //         _id: "gg_gg8000_param16",
        //       },
        //       {
        //         parameter: "AVR - автоматическая регулировка напряжения",
        //         value: "Да",
        //         _id: "gg_gg8000_param17",
        //       },
        //       {
        //         parameter: "Стабилизация +/- 5%",
        //         value: "Да",
        //         _id: "gg_gg8000_param18",
        //       },
        //       {
        //         parameter: "Усиленные антивибро подушки",
        //         value: "Да",
        //         _id: "gg_gg8000_param19",
        //       },
        //       {
        //         parameter: "Ручной стартер",
        //         value: "Да",
        //         _id: "gg_gg8000_param20",
        //       },
        //       {
        //         parameter: "Электростартер",
        //         value: "Да",
        //         _id: "gg_gg8000_param20_1",
        //       },
        //       {
        //         parameter: "Воздушное принудительное охлаждение",
        //         value: "Да",
        //         _id: "gg_gg8000_param21",
        //       },
        //       {
        //         parameter: "Подогрев карбюратора",
        //         value: "Да",
        //         _id: "gg_gg8000_param21_1",
        //       },
        //       {
        //         parameter: "Вес:",
        //         value: "91кг",
        //         _id: "gg_gg8000_param22",
        //       },
        //       {
        //         parameter: "Габариты:",
        //         value: "71 / 55 / 59 см",
        //         _id: "gg_gg8000_param23",
        //       },
        //       {
        //         parameter: "Гарантия:",
        //         value: "2 года",
        //         _id: "gg_gg8000_param24",
        //       },
        //     ],
        //     equipment: [
        //       {
        //         parameter: "Генератор:",
        //         value: "1 шт",
        //         _id: "gg_gg8000_eq1",
        //       },
        //       {
        //         parameter: "Гелевый аккумулятор (12В - 17 А/ч):",
        //         value: "1 шт",
        //         _id: "gg_gg8000_eq2",
        //       },
        //       {
        //         parameter:
        //           "Комплект колес с опорными ножками и ручками для переноса:",
        //         value: "1 шт",
        //         _id: "gg_gg8000_eq3",
        //       },
        //       {
        //         parameter: "Ключ свечной:",
        //         value: "1 шт",
        //         _id: "gg_gg8000_eq4",
        //       },
        //       {
        //         parameter: "Штепсельная вилка:",
        //         value: "2 шт",
        //         _id: "gg_gg8000_eq5",
        //       },
        //       {
        //         parameter: "Провод для зарядки аккумулятора:",
        //         value: "1 шт",
        //         _id: "gg_gg8000_eq6",
        //       },
        //       {
        //         parameter: "Инструкция по эксплуатации:",
        //         value: "1 шт",
        //         _id: "gg_gg8000_eq7",
        //       },
        //     ],

        //     sale: "-8%",
        //     newPrice: "78 990 ₽",
        //     oldPrice: "85 990 ₽",
        //   },
        // },
      ],
    },
  ],
};

export { gasolineGeneratorsInfo };
