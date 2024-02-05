//Триммеры
// es4200
import es4200 from "../images/trimmers/es4200/0.webp";
import es4200_1 from "../images/trimmers/es4200/1.webp";
import es4200_2 from "../images/trimmers/es4200/2.webp";

// es4200el
import es4200el from "../images/trimmers/es4200el/0.webp";
import es4200el_1 from "../images/trimmers/es4200el/1.webp";
import es4200el_2 from "../images/trimmers/es4200el/2.webp";

// gt12jn
import gt12jn from "../images/trimmers/gt12jn/0.webp";
import gt12jn_1 from "../images/trimmers/gt12jn/1.webp";
import gt12jn_2 from "../images/trimmers/gt12jn/2.webp";
import gt12jn_3 from "../images/trimmers/gt12jn/3.webp";
import gt12jn_4 from "../images/trimmers/gt12jn/4.webp";
import gt12jn_5 from "../images/trimmers/gt12jn/5.webp";
// es5500
// import es5500 from "../images/trimmers/es5500.png";
// import es5500Big from "../images/trimmers/es5500@2x.png";
// gt18jn
// import trimBatt_gt18jn from "../images/trimmers/trimBatt_gt18jn.png";
// import trimBatt_gt18jnBig from "../images/trimmers/trimBatt_gt18jn@2x.png";

const trimmersInfo = {
  title: "Триммеры",
  videoReview: "https://www.youtube.com/watch?v=nCcuIbZfEgM",
  description: [
    {
      _id: "1",
      text: "Садовый триммер предназначен для ухода за травой, порослью и мелкими кустарниками. Этот инструмент идеально подходит для стрижки газона на даче, в саду или огороде. Легкий и подвижный, садовый триммер обеспечивает аккуратную и ровную обработку даже в труднодоступных местах.",
    },
    {
      _id: "11",
      text: "Электрический садовый триммер обладает возможностью индивидуальной настройки под различные параметры благодаря телескопической штанге. Это обеспечивает удобство использования для пользователей разного роста и обеспечивает компактное хранение. Аккумуляторный садовый триммер экологичен, так как не выделяет вредных выхлопных газов. По сравнению с бензиновым аналогом, он работает бесшумно и имеет компактные размеры. Подходит для регулярного ухода за газоном и садом. Электрическая коса удобна в использовании, не требует сложного обслуживания и эффективно справляется с различными задачами.",
    },
  ],
  collections: [
    {
      _id: "trimGas",
      subtitle: "Бензиновые триммеры",
      premium: false,
      isHorizontal: false,
      models: [
        {
          _id: "trimGas_es4200",
          nameModel: "es-4200",
          img: es4200,
          nameProduct: "бензиновый триммер",
          titleParams: [
            {
              param: "мощность:",
              value: "4200 Вт",
              _id: "trimGas_es4200_tp1",
            },
            {
              param: "двигатель:",
              value: "2-тактный",
              _id: "trimGas_es4200_tp2",
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
            ],
            fullNameModel: "Триммер бензиновый Jonser ES-4200",
            specifications: [
              {
                parameter: "2-тактный двигатель",
                value: "Да",
                _id: "trimGas_es4200_param1",
              },
              {
                parameter: "Мощность:",
                value: "4200Вт, 4.7 л.с",
                _id: "trimGas_es4200_param2",
              },
              {
                parameter: "Объем поршневой группы:",
                value: "52 см3",
                _id: "trimGas_es4200_param3",
              },
              {
                parameter: "Объем топливного бака:",
                value: "1,2л",
                _id: "trimGas_es4200_param4",
              },
              {
                parameter: "Уровень шума:",
                value: "104 dB",
                _id: "trimGas_es4200_param5",
              },
              {
                parameter: "Цельный вал:",
                value: "9 мм",
                _id: "trimGas_es4200_param6",
              },
              {
                parameter: "Усиленное крепление руля",
                value: "Да",
                _id: "trimGas_es4200_param7",
              },
              {
                parameter: "Соотношение масла и бензина:",
                value: "1:25",
                _id: "trimGas_es4200_param9",
              },
              {
                parameter: "Ручной стартер",
                value: "Да",
                _id: "trimGas_es4200_param10",
              },
              {
                parameter: "Обороты холостого хода:",
                value: "3300 об/мин",
                _id: "trimGas_es4200_param11",
              },
              {
                parameter: "Масимальные обороты без нагрузки:",
                value: "11000 об/мин",
                _id: "trimGas_es4200_param12",
              },
              {
                parameter: "Воздушное охлаждение",
                value: "Да",
                _id: "trimGas_es4200_param13",
              },
              {
                parameter: "Вес:",
                value: "8кг",
                _id: "trimGas_es4200_param14",
              },
              {
                parameter: "Гарантия:",
                value: "2 года",
                _id: "trimGas_es4200_param15",
              },
            ],
            equipment: [
              {
                parameter: "Триммер бензиновый:",
                value: "1 шт",
                _id: "trimGas_es4200_eq1",
              },
              {
                parameter: "Нож 3Т:",
                value: "1 шт",
                _id: "trimGas_es4200_eq2",
              },
              {
                parameter: "Нож 8Т:",
                value: "1 шт",
                _id: "trimGas_es4200_eq3",
              },
              {
                parameter: "Нож 40Т:",
                value: "1 шт",
                _id: "trimGas_es4200_eq4",
              },
              {
                parameter: "Полуавтоматическая катушка под леску:",
                value: "1 шт",
                _id: "trimGas_es4200_eq5",
              },
              {
                parameter: "Емкость для топливной смеси:",
                value: "1 шт",
                _id: "trimGas_es4200_eq6",
              },
              {
                parameter: "Ранцевый ремень:",
                value: "1 шт",
                _id: "trimGas_es4200_eq9",
              },
              {
                parameter: "Инструкция по эксплуатации:",
                value: "1 шт",
                _id: "trimGas_es4200_eq10",
              },
              {
                parameter: "Набор инструментов:",
                value: "1 шт",
                _id: "trimGas_es4200_eq11",
              },
            ],
            advantages: [
              {
                parameter: "Низкий уровень шума",
                _id: "trimGas_es4200_ad1",
              },
              {
                parameter: "Плечевой ремень",
                _id: "trimGas_es4200_ad2",
              },
              {
                parameter: "Регулируемые рукоятки",
                _id: "trimGas_es4200_ad3",
              },
              {
                parameter: "Блокировка от случайного включения",
                _id: "trimGas_es4200_ad4",
              },
              {
                parameter: "Рукоятка для переноски",
                _id: "trimGas_es4200_ad5",
              },
              {
                parameter: "Складные рукоятки",
                _id: "trimGas_es4200_ad6",
              },
            ],
            sale: "-26%",
            newPrice: "13 890 ₽",
            oldPrice: "18 990 ₽",
          },
        },
        {
          _id: "trimGas_es4200el",
          nameModel: "es-4200 Electric",
          img: es4200el,
          nameProduct: "бензиновый триммер",
          titleParams: [
            {
              param: "мощность:",
              value: "4200 Вт",
              _id: "trimGas_es4200_tp1",
            },
            {
              param: "двигатель:",
              value: "2-тактный",
              _id: "trimGas_es4200_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: es4200el_1,
                _id: "es4200el_1",
              },
              {
                link: es4200el_2,
                _id: "es4200el_2",
              },
            ],
            fullNameModel:
              "Триммер бензиновый с электростартером Jonser ES-4200 Electric",
            specifications: [
              {
                parameter: "2-тактный двигатель",
                value: "Да",
                _id: "trimGas_es4200el_param1",
              },
              {
                parameter: "Мощность:",
                value: "4200Вт, 4.7 л.с",
                _id: "trimGas_es4200el_param2",
              },
              {
                parameter: "Объем поршневой группы:",
                value: "52 см3",
                _id: "trimGas_es4200el_param3",
              },
              {
                parameter: "Объем топливного бака:",
                value: "1,2л",
                _id: "trimGas_es4200el_param4",
              },
              {
                parameter: "Уровень шума:",
                value: "104 dB",
                _id: "trimGas_es4200el_param5",
              },
              {
                parameter: "Цельный вал:",
                value: "9 мм",
                _id: "trimGas_es4200el_param6",
              },
              {
                parameter: "Усиленное крепление руля",
                value: "Да",
                _id: "trimGas_es4200el_param7",
              },
              {
                parameter: "Заводится  с кнопки и вручную",
                value: "Да",
                _id: "trimGas_es4200el_param8",
              },
              {
                parameter: "Соотношение масла и бензина:",
                value: "1:25",
                _id: "trimGas_es4200el_param9",
              },
              {
                parameter: "Ручной стартер",
                value: "Да",
                _id: "trimGas_es4200el_param10",
              },
              {
                parameter: "Обороты холостого хода:",
                value: "3300 об/мин",
                _id: "trimGas_es4200el_param11",
              },
              {
                parameter: "Масимальные обороты без нагрузки:",
                value: "11000 об/мин",
                _id: "trimGas_es4200el_param12",
              },
              {
                parameter: "Воздушное охлаждение",
                value: "Да",
                _id: "trimGas_es4200el_param13",
              },
              {
                parameter: "Вес:",
                value: "8кг",
                _id: "trimGas_es4200el_param14",
              },
              {
                parameter: "Гарантия:",
                value: "2 года",
                _id: "trimGas_es4200el_param15",
              },
            ],
            equipment: [
              {
                parameter: "Триммер бензиновый:",
                value: "1 шт",
                _id: "trimGas_es4200el_eq1",
              },
              {
                parameter: "Нож 3Т:",
                value: "1 шт",
                _id: "trimGas_es4200el_eq2",
              },
              {
                parameter: "Нож 8Т:",
                value: "1 шт",
                _id: "trimGas_es4200el_eq3",
              },
              {
                parameter: "Нож 40Т:",
                value: "1 шт",
                _id: "trimGas_es4200el_eq4",
              },
              {
                parameter: "Полуавтоматическая катушка под леску:",
                value: "1 шт",
                _id: "trimGas_es4200el_eq5",
              },
              {
                parameter: "Емкость для топливной смеси:",
                value: "1 шт",
                _id: "trimGas_es4200el_eq6",
              },
              {
                parameter: "Зарядное устройство:",
                value: "1 шт",
                _id: "trimGas_es4200el_eq8",
              },
              {
                parameter: "Ранцевый ремень:",
                value: "1 шт",
                _id: "trimGas_es4200el_eq9",
              },
              {
                parameter: "Инструкция по эксплуатации:",
                value: "1 шт",
                _id: "trimGas_es4200el_eq10",
              },
              {
                parameter: "Набор инструментов:",
                value: "1 шт",
                _id: "trimGas_es4200el_eq11",
              },
            ],
            advantages: [
              {
                parameter: "Низкий уровень шума",
                _id: "trimGas_es4200el_ad1",
              },
              {
                parameter: "Плечевой ремень",
                _id: "trimGas_es4200el_ad2",
              },
              {
                parameter: "Регулируемые рукоятки",
                _id: "trimGas_es4200el_ad3",
              },
              {
                parameter: "Блокировка от случайного включения",
                _id: "trimGas_es4200el_ad4",
              },
              {
                parameter: "Рукоятка для переноски",
                _id: "trimGas_es4200el_ad5",
              },
              {
                parameter: "Складные рукоятки",
                _id: "trimGas_es4200el_ad6",
              },
              {
                parameter: "Электростартер",
                _id: "trimGas_es4200el_ad7",
              },
            ],
            sale: "-36%",
            newPrice: "16 390 ₽",
            oldPrice: "25 990 ₽",
          },
        },
        // {
        //   _id: "trimGas_es5500",
        //   nameModel: "ES-5500 (4Т)",
        //   img: es5500,
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
        // ],: es5500Big,
        //     fullNameModel: "Триммер бензиновый Jonser ES-5500 (4Т)",
        //     specifications: [
        //       {
        //         parameter: "4-тактный двигатель",
        //         value: "Да",
        //         _id: "trimGas_es5500_param1",
        //       },
        //       {
        //         parameter: "Мощность:",
        //         value: "5500 Вт, 5.7 л.с",
        //         _id: "trimGas_es5500_param2",
        //       },
        //       {
        //         parameter: "Объем поршневой группы:",
        //         value: "63 см3",
        //         _id: "trimGas_es5500_param3",
        //       },
        //       {
        //         parameter: "Объем топливного бака:",
        //         value: "1,2л",
        //         _id: "trimGas_es5500_param4",
        //       },
        //       {
        //         parameter: "Уровень шума:",
        //         value: "98 dB",
        //         _id: "trimGas_es5500_param5",
        //       },
        //       {
        //         parameter: "Цельный вал:",
        //         value: "9 мм",
        //         _id: "trimGas_es5500_param6",
        //       },
        //       {
        //         parameter: "Усиленное крепление руля",
        //         value: "Да",
        //         _id: "trimGas_es5500_param7",
        //       },
        //       {
        //         parameter: "Круиз контроль",
        //         value: "Да",
        //         _id: "trimGas_es5500_param8",
        //       },
        //       {
        //         parameter: "Ручной стартер",
        //         value: "Да",
        //         _id: "trimGas_es5500_param10",
        //       },
        //       {
        //         parameter: "Масимальные обороты без нагрузки:",
        //         value: "9000 об/мин",
        //         _id: "trimGas_es5500_param12",
        //       },
        //       {
        //         parameter: "Воздушное охлаждение",
        //         value: "Да",
        //         _id: "trimGas_es5500_param13",
        //       },
        //       {
        //         parameter: "Масло заливается отдельно",
        //         value: "Да",
        //         _id: "trimGas_es5500_param13_1",
        //       },
        //       {
        //         parameter: "Вес:",
        //         value: "8кг",
        //         _id: "trimGas_es5500_param14",
        //       },
        //       {
        //         parameter: "Гарантия:",
        //         value: "2 года",
        //         _id: "trimGas_es5500_param15",
        //       },
        //     ],
        //     equipment: [
        //       {
        //         parameter: "Триммер бензиновый:",
        //         value: "1 шт",
        //         _id: "trimGas_es5500_eq1",
        //       },
        //       {
        //         parameter: "Нож для бензокосы:",
        //         value: "3T, 40Т, 40Т",
        //         _id: "trimGas_es5500_eq2",
        //       },
        //       {
        //         parameter: "Полуавтоматическая катушка под леску:",
        //         value: "1 шт",
        //         _id: "trimGas_es5500_eq5",
        //       },
        //       {
        //         parameter: "Емкость для топливной смеси:",
        //         value: "1 шт",
        //         _id: "trimGas_es5500_eq6",
        //       },
        //       {
        //         parameter: "Ранцевый ремень:",
        //         value: "1 шт",
        //         _id: "trimGas_es5500_eq9",
        //       },
        //       {
        //         parameter: "Инструкция по эксплуатации:",
        //         value: "1 шт",
        //         _id: "trimGas_es5500_eq10",
        //       },
        //       {
        //         parameter: "Набор инструментов:",
        //         value: "1 шт",
        //         _id: "trimGas_es5500_eq11",
        //       },
        //     ],
        //     advantages: [
        //       {
        //         parameter: "Низкий уровень шума",
        //         _id: "trimGas_es5500_ad1",
        //       },
        //       {
        //         parameter: "Плечевой ремень",
        //         _id: "trimGas_es5500_ad2",
        //       },
        //       {
        //         parameter: "Регулируемые рукоятки",
        //         _id: "trimGas_es5500_ad3",
        //       },
        //       {
        //         parameter: "Блокировка от случайного включения",
        //         _id: "trimGas_es5500_ad4",
        //       },
        //       {
        //         parameter: "Рукоятка для переноски",
        //         _id: "trimGas_es5500_ad5",
        //       },
        //       {
        //         parameter: "Складные рукоятки",
        //         _id: "trimGas_es5500_ad6",
        //       },
        //     ],
        //     sale: "-8%",
        //     newPrice: "17 480 ₽",
        //     oldPrice: "18 990 ₽",
        //   },
        // },
      ],
    },
    {
      _id: "trimBatt",
      subtitle: "Аккумуляторные триммеры",
      premium: false,
      isHorizontal: false,
      models: [
        {
          _id: "trimBatt_gt12jn",
          nameModel: "gt-12jn",
          img: gt12jn,
          nameProduct: "Аккумуляторный триммер",
          titleParams: [
            {
              param: "вольтаж:",
              value: "400 Вт",
              _id: "trimBatt_gt12jn_tp1",
            },
            {
              param: "время работы:",
              value: "90 минут",
              _id: "trimBatt_gt12jn_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: gt12jn_1,
                _id: "gt12jn_1",
              },
              {
                link: gt12jn_2,
                _id: "gt12jn_2",
              },
              {
                link: gt12jn_3,
                _id: "gt12jn_3",
              },
              {
                link: gt12jn_4,
                _id: "gt12jn_4",
              },
              {
                link: gt12jn_5,
                _id: "gt12jn_5",
              },
            ],
            fullNameModel: "Триммер аккумуляторный Jonser GT-12JN",
            specifications: [
              {
                parameter: "12 В двигатель",
                value: "Да",
                _id: "trimBatt_gt12jn_param1",
              },
              {
                parameter: "Мощность:",
                value: "400 Вт",
                _id: "trimBatt_gt12jn_param2",
              },
              {
                parameter: "З/у:",
                value: "12В",
                _id: "trimBatt_gt12jn_param3",
              },
              {
                parameter: "2 акб Li-ion:",
                value: "2000 мАч",
                _id: "trimBatt_gt12jn_param4",
              },
              {
                parameter: "время зарядки 1 акб:",
                value: "60 мин",
                _id: "trimBatt_gt12jn_param5",
              },
              {
                parameter: "Максимальная частота вращения без нагрузки:",
                value: "9000 об/мин",
                _id: "trimBatt_gt12jn_param6",
              },
              {
                parameter: "Максимальная ширина скашивания:",
                value: "148 мм",
                _id: "trimBatt_gt12jn_param7",
              },
              {
                parameter: "Уровень шума:",
                value: "60 дб",
                _id: "trimBatt_gt12jn_param8",
              },
              {
                parameter: "АКБ подойдет на шуруповерты многих производителей",
                value: "Да",
                _id: "trimBatt_gt12jn_param9",
              },
              {
                parameter: "Вес нетто / брутто:",
                value: "0,92 / 2,1 кг",
                _id: "trimBatt_gt12jn_param14",
              },
              {
                parameter: "Габариты:",
                value: "88 / 16 / 10 см",
                _id: "trimBatt_gt12jn_param15",
              },
              {
                parameter: "Гарантия:",
                value: "2 года",
                _id: "trimBatt_gt12jn_param16",
              },
            ],
            equipment: [
              {
                parameter: "Триммер аккумуляторный садовый:",
                value: "1 шт",
                _id: "trimBatt_gt12jn_eq1",
              },
              {
                parameter: "Аккумулятор Li-lion 12 В:",
                value: "2 шт",
                _id: "trimBatt_gt12jn_eq2",
              },
              {
                parameter: "Зарядное устройство:",
                value: "1 шт",
                _id: "trimBatt_gt12jn_eq3",
              },
              {
                parameter: "Комплект крепежа:",
                value: "1 шт",
                _id: "trimBatt_gt12jn_eq4",
              },
              {
                parameter: "Дополнительная рукоять:",
                value: "1 шт",
                _id: "trimBatt_gt12jn_eq5",
              },
              {
                parameter: "Металлический ограничитель:",
                value: "1 шт",
                _id: "trimBatt_gt12jn_eq6",
              },
              {
                parameter: "Защитный кожух:",
                value: "1 шт",
                _id: "trimBatt_gt12jn_eq8",
              },
              {
                parameter: "ААCD 110/50-40 (Режущий диск):",
                value: "1 шт",
                _id: "trimBatt_gt12jn_eq9",
              },
              {
                parameter: "ААCD 148/20-2 (Стальной нож):",
                value: "1 шт",
                _id: "trimBatt_gt12jn_eq10",
              },
              {
                parameter: "ААCD 138/20-2Р (Пластиковый нож):",
                value: "5 шт",
                _id: "trimBatt_gt12jn_eq11",
              },
            ],
            advantages: [
              {
                parameter: "Защита от перегрева",
                _id: "trimBatt_gt12jn_ad1",
              },
              {
                parameter: "Защита от перегрузок",
                _id: "trimBatt_gt12jn_ad2",
              },
              {
                parameter: "Низкий уровень шума",
                _id: "trimBatt_gt12jn_ad3",
              },
              {
                parameter: "Регулируемые рукоятки",
                _id: "trimBatt_gt12jn_ad4",
              },
              {
                parameter: "Рукоятка для переноски",
                _id: "trimBatt_gt12jn_ad5",
              },
            ],
            sale: "-46%",
            newPrice: "7 990 ₽",
            oldPrice: "14 990 ₽",
          },
        },
        // {
        //   _id: "trimBatt_gt18jn",
        //   nameModel: "gt-18jn",
        //   img: trimBatt_gt18jn,
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
        //     fullNameModel: "Триммер аккумуляторный Jonser GT-18JN",
        //     specifications: [
        //       {
        //         parameter: "18 В двигатель",
        //         value: "Да",
        //         _id: "trimBatt_gt18jn_param1",
        //       },
        //       {
        //         parameter: "Мощность:",
        //         value: "600 Вт",
        //         _id: "trimBatt_gt18jn_param2",
        //       },
        //       {
        //         parameter: "З/у:",
        //         value: "18В",
        //         _id: "trimBatt_gt18jn_param3",
        //       },
        //       {
        //         parameter: "2 акб Li-ion:",
        //         value: "2000 мАч",
        //         _id: "trimBatt_gt18jn_param4",
        //       },
        //       {
        //         parameter: "время зарядки 1 акб:",
        //         value: "60 мин",
        //         _id: "trimBatt_gt18jn_param5",
        //       },
        //       {
        //         parameter: "Максимальная частота вращения без нагрузки:",
        //         value: "10000 об/мин",
        //         _id: "trimBatt_gt18jn_param6",
        //       },
        //       {
        //         parameter: "Максимальная ширина скашивания:",
        //         value: "150 мм",
        //         _id: "trimBatt_gt18jn_param7",
        //       },
        //       {
        //         parameter: "Уровень шума:",
        //         value: "80 дб",
        //         _id: "trimBatt_gt18jn_param8",
        //       },
        //       {
        //         parameter:
        //           "АКБ системы слайдер, подойдет на шуруповерты многих производителей",
        //         value: "Да",
        //         _id: "trimBatt_gt18jn_param9",
        //       },
        //       {
        //         parameter: "1.04 / 2,63 кг",
        //         _id: "trimBatt_gt18jn_param14",
        //       },
        //       {
        //         parameter: "Габариты:",
        //         value: "88 / 16 / 10 см",
        //         _id: "trimBatt_gt18jn_param15",
        //       },
        //       {
        //         parameter: "Гарантия:",
        //         value: "2 года",
        //         _id: "trimBatt_gt18jn_param16",
        //       },
        //     ],
        //     equipment: [
        //       {
        //         parameter: "Триммер аккумуляторный садовый:",
        //         value: "1 шт",
        //         _id: "trimBatt_gt18jn_eq1",
        //       },
        //       {
        //         parameter: "Аккумулятор Li-lion 18 В:",
        //         value: "2 шт",
        //         _id: "trimBatt_gt18jn_eq2",
        //       },
        //       {
        //         parameter: "Зарядное устройство:",
        //         value: "1 шт",
        //         _id: "trimBatt_gt18jn_eq3",
        //       },
        //       {
        //         parameter: "Комплект крепежа:",
        //         value: "1 шт",
        //         _id: "trimBatt_gt18jn_eq4",
        //       },
        //       {
        //         parameter: "Дополнительная рукоять:",
        //         value: "1 шт",
        //         _id: "trimBatt_gt18jn_eq5",
        //       },
        //       {
        //         parameter: "Металлический ограничитель:",
        //         value: "1 шт",
        //         _id: "trimBatt_gt18jn_eq6",
        //       },
        //       {
        //         parameter: "Защитный кожух:",
        //         value: "1 шт",
        //         _id: "trimBatt_gt18jn_eq8",
        //       },
        //       {
        //         parameter: "ААCD 110/50-40 (Режущий диск):",
        //         value: "1 шт",
        //         _id: "trimBatt_gt18jn_eq9",
        //       },
        //       {
        //         parameter: "ААCD 148/20-2 (Стальной нож):",
        //         value: "1 шт",
        //         _id: "trimBatt_gt18jn_eq10",
        //       },
        //       {
        //         parameter: "ААCD 138/20-2Р (Пластиковый нож):",
        //         value: "5 шт",
        //         _id: "trimBatt_gt18jn_eq11",
        //       },
        //     ],
        //     advantages: [
        //       {
        //         parameter: "Защита от перегрева",
        //         _id: "trimBatt_gt18jn_ad1",
        //       },
        //       {
        //         parameter: "Защита от перегрузок",
        //         _id: "trimBatt_gt18jn_ad2",
        //       },
        //       {
        //         parameter: "Низкий уровень шума",
        //         _id: "trimBatt_gt18jn_ad3",
        //       },
        //       {
        //         parameter: "Регулируемые рукоятки",
        //         _id: "trimBatt_gt18jn_ad4",
        //       },
        //       {
        //         parameter: "Рукоятка для переноски",
        //         _id: "trimBatt_gt18jn_ad5",
        //       },
        //     ],
        //     sale: "-23%",
        //     newPrice: "12 990 ₽",
        //     oldPrice: "16 990 ₽",
        //   },
        // },
      ],
    },
  ],
};

export { trimmersInfo };
