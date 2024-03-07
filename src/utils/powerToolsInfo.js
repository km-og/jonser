//jdh20
import jdh20_1 from "../images/powerTools/jdh20/1.webp";
import jdh20_2 from "../images/powerTools/jdh20/2.webp";
import jdh20_3 from "../images/powerTools/jdh20/3.webp";
import jdh20_4 from "../images/powerTools/jdh20/4.webp";
import jdh20_5 from "../images/powerTools/jdh20/5.webp";
//jdh60
import jdh60_1 from "../images/powerTools/jdh60/1.webp";
import jdh60_2 from "../images/powerTools/jdh60/2.webp";
import jdh60_3 from "../images/powerTools/jdh60/3.webp";
import jdh60_4 from "../images/powerTools/jdh60/4.webp";
import jdh60_5 from "../images/powerTools/jdh60/5.webp";
//jrh1400
import jrh1400_1 from "../images/powerTools/jrh1400/1.webp";
import jrh1400_2 from "../images/powerTools/jrh1400/2.webp";
import jrh1400_3 from "../images/powerTools/jrh1400/3.webp";
import jrh1400_4 from "../images/powerTools/jrh1400/4.webp";
import jrh1400_5 from "../images/powerTools/jrh1400/5.webp";
//jrh1450
import jrh1450_1 from "../images/powerTools/jrh1450/1.webp";
import jrh1450_2 from "../images/powerTools/jrh1450/2.webp";
import jrh1450_3 from "../images/powerTools/jrh1450/3.webp";
import jrh1450_4 from "../images/powerTools/jrh1450/4.webp";
import jrh1450_5 from "../images/powerTools/jrh1450/5.webp";
//jrh1450dfr
import jrh1450dfr_1 from "../images/powerTools/jrh1450dfr/1.webp";
import jrh1450dfr_2 from "../images/powerTools/jrh1450dfr/2.webp";
import jrh1450dfr_3 from "../images/powerTools/jrh1450dfr/3.webp";
import jrh1450dfr_4 from "../images/powerTools/jrh1450dfr/4.webp";
import jrh1450dfr_5 from "../images/powerTools/jrh1450dfr/5.webp";
// //jts180
// import jts180_1 from "../images/powerTools/jts180/1.webp";
// import jts180_2 from "../images/powerTools/jts180/2.webp";
// import jts180_3 from "../images/powerTools/jts180/3.webp";
// import jts180_4 from "../images/powerTools/jts180/4.webp";
// import jts180_5 from "../images/powerTools/jts180/5.webp";

const powerToolsInfo = {
  title: "Перфораторы и отбойные молотки",
  description: [
    {
      _id: "1",
      text: "Отбойные молотки и перфораторы отлично подойдут для работ на стройке, производстве, для работ по бетону, кирпичу, камню, асфальту.",
    },
  ],
  collections: [
    {
      _id: "hammer",
      subtitle: "Отбойные молотки",
      models: [
        {
          _id: "hammer_jdh20",
          nameModel: "JDH-20/2000",
          nameProduct: "Отбойный молоток",
          img: jdh20_1,
          titleParams: [
            {
              param: "мощность:",
              value: "2000 в",
              _id: "jdh20_tp1",
            },
            // {
            //   param: "вместимость катушки:",
            //   value: "до 1 кг",
            //   _id: "jdh20_tp2",
            // },
          ],
          detailed: {
            images: [
              {
                link: jdh20_1,
                _id: "jdh20_1",
              },
              {
                link: jdh20_2,
                _id: "jdh20_2",
              },
              {
                link: jdh20_3,
                _id: "jdh20_3",
              },
              {
                link: jdh20_4,
                _id: "jdh20_4",
              },
              {
                link: jdh20_5,
                _id: "jdh20_5",
              },
            ],
            fullNameModel: "Отбойный молоток электрический Jonser JDH-20/2000",
            specifications: [
              {
                parameter: "Коллекторный двигатель мощностью:",
                value: "2000 Вт",
                _id: "hammer_jdh20_param1",
              },
              {
                parameter: "Входное напряжение:",
                value: "220+/- 10% (220-240)",
                _id: "hammer_jdh20_param2",
              },
              {
                parameter: "Сила удара:",
                value: "20 Дж",
                _id: "hammer_jdh20_param3",
              },
              {
                parameter: "Количество ударов:",
                value: "3000 уд/мин",
                _id: "hammer_jdh20_param4",
              },
              {
                parameter: "Установочный размер хвостовика:",
                value: "17 мм",
                _id: "hammer_jdh20_param5",
              },
              {
                parameter: "Кабель:",
                value: "2 м",
                _id: "hammer_jdh20_param6",
              },
              {
                parameter: "Фиксатор выключателя:",
                value: "Да",
                _id: "hammer_jdh20_param7",
              },
              {
                parameter: "Металлический быстросъемный патрон:",
                value: "Да",
                _id: "hammer_jdh20_param8",
              },
              {
                parameter:
                  "Металлический редуктор антивибрационная система рукоятки:",
                value: "Да",
                _id: "hammer_jdh20_param9",
              },
              {
                parameter:
                  "Возможность установки дополнительной рукояти в двух положениях:",
                value: "Да",
                _id: "hammer_jdh20_param10",
              },
              {
                parameter: "Вес:",
                value: "9,7 кг",
                _id: "hammer_jdh20_param12",
              },
              {
                parameter: "Габариты упаковки:",
                value: "41 / 12 / 30 см",
                _id: "hammer_jdh20_param13",
              },
              // {
              //   parameter: "Гарантия:",
              //   value: "2 года",
              //   _id: "hammer_jdh20_param14",
              // },
            ],
            equipment: [
              {
                parameter: "Молоток:",
                value: "1 шт",
                _id: "hammer_jdh20_eq1",
              },
              {
                parameter: "Металлический кейс:",
                value: "1 шт",
                _id: "hammer_jdh20_eq2",
              },
              {
                parameter: "Дополнительная рукоятка:",
                value: "1 шт",
                _id: "hammer_jdh20_eq3",
              },
              {
                parameter: "Пика и долото (SDS-max):",
                value: "1 шт",
                _id: "hammer_jdh20_eq4",
              },
              {
                parameter: "Щетки графитовые комплект:",
                value: "1 шт",
                _id: "hammer_jdh20_eq5",
              },
              {
                parameter: "Ключ накидной:",
                value: "1 шт",
                _id: "hammer_jdh20_eq6",
              },
              {
                parameter: "Ключ шестигранный:",
                value: "1 шт",
                _id: "hammer_jdh20_eq7",
              },
              {
                parameter: "Масленка:",
                value: "1 шт",
                _id: "hammer_jdh20_eq8",
              },
            ],
            // advantages: [
            //   {
            //     parameter: "Автоматическая стабилизация напряжения",
            //     _id: "hammer_jdh20_ad1",
            //   },
            //   {
            //     parameter: "Антизалипание электрода",
            //     _id: "hammer_jdh20_ad2",
            //   },
            //   {
            //     parameter: "Горячий старт",
            //     _id: "hammer_jdh20_ad3",
            //   },
            //   {
            //     parameter: "Защита от перегрева",
            //     _id: "hammer_jdh20_ad4",
            //   },
            //   {
            //     parameter: "Защита от перегрузок",
            //     _id: "hammer_jdh20_ad5",
            //   },
            //   {
            //     parameter: "Инверторный",
            //     _id: "hammer_jdh20_ad6",
            //   },
            //   {
            //     parameter: "Рукоятка для переноски",
            //     _id: "hammer_jdh20_ad7",
            //   },
            //   {
            //     parameter: "Форсаж дуги",
            //     _id: "hammer_jdh20_ad8",
            //   },
            //   {
            //     parameter: "Цифровой дисплей",
            //     _id: "hammer_jdh20_ad9",
            //   },
            // ],
            sale: "-30%",
            newPrice: "10 490 ₽",
            oldPrice: "14 990 ₽",
          },
        },
        {
          _id: "hammer_jdh60",
          nameModel: "JDH-60/2200",
          nameProduct: "Отбойный молоток",
          img: jdh60_1,
          titleParams: [
            {
              param: "мощность:",
              value: "2200 в",
              _id: "jdh60_tp1",
            },
            // {
            //   param: "вместимость катушки:",
            //   value: "до 1 кг",
            //   _id: "jdh60_tp2",
            // },
          ],
          detailed: {
            images: [
              {
                link: jdh60_1,
                _id: "jdh60_1",
              },
              {
                link: jdh60_2,
                _id: "jdh60_2",
              },
              {
                link: jdh60_3,
                _id: "jdh60_3",
              },
              {
                link: jdh60_4,
                _id: "jdh60_4",
              },
              {
                link: jdh60_5,
                _id: "jdh60_5",
              },
            ],
            fullNameModel: "Отбойный молоток электрический Jonser JDH-60/2200",
            specifications: [
              {
                parameter: "Коллекторный двигатель мощностью:",
                value: "2200 Вт",
                _id: "hammer_jdh60_param1",
              },
              {
                parameter: "Входное напряжение:",
                value: "220+/- 10% (220-240)",
                _id: "hammer_jdh60_param2",
              },
              {
                parameter: "Сила удара:",
                value: "60 Дж",
                _id: "hammer_jdh60_param3",
              },
              {
                parameter: "Количество ударов:",
                value: "1900 уд/мин",
                _id: "hammer_jdh60_param4",
              },
              {
                parameter: "Система зажима:",
                value: "Шестигранник 30 мм (HEX30)",
                _id: "hammer_jdh60_param5",
              },
              {
                parameter: "Кабель:",
                value: "2 м",
                _id: "hammer_jdh60_param6",
              },
              {
                parameter: "Фиксатор выключателя:",
                value: "Да",
                _id: "hammer_jdh60_param7",
              },
              {
                parameter:
                  "Металлический редуктор антивибрационная система рукоятки:",
                value: "Да",
                _id: "hammer_jdh60_param9",
              },
              {
                parameter: "Вес:",
                value: "19,7 кг",
                _id: "hammer_jdh60_param12",
              },
              {
                parameter: "Габариты упаковки:",
                value: "71 / 17 / 30 см",
                _id: "hammer_jdh60_param13",
              },
              // {
              //   parameter: "Гарантия:",
              //   value: "2 года",
              //   _id: "hammer_jdh60_param14",
              // },
            ],
            equipment: [
              {
                parameter: "Молоток:",
                value: "1 шт",
                _id: "hammer_jdh60_eq1",
              },
              {
                parameter: "Металлический кейс:",
                value: "1 шт",
                _id: "hammer_jdh60_eq2",
              },
              {
                parameter: "Дополнительная рукоятка:",
                value: "1 шт",
                _id: "hammer_jdh60_eq3",
              },
              {
                parameter: "Пика и долото:",
                value: "1 шт",
                _id: "hammer_jdh60_eq4",
              },
              {
                parameter: "Щетки графитовые комплект:",
                value: "1 шт",
                _id: "hammer_jdh60_eq5",
              },
              {
                parameter: "Ключ накидной:",
                value: "1 шт",
                _id: "hammer_jdh60_eq6",
              },
              {
                parameter: "Ключ шестигранный:",
                value: "2 шт",
                _id: "hammer_jdh60_eq7",
              },
              {
                parameter: "Масленка:",
                value: "1 шт",
                _id: "hammer_jdh60_eq8",
              },
            ],
            // advantages: [
            //   {
            //     parameter: "Автоматическая стабилизация напряжения",
            //     _id: "hammer_jdh60_ad1",
            //   },
            //   {
            //     parameter: "Антизалипание электрода",
            //     _id: "hammer_jdh60_ad2",
            //   },
            //   {
            //     parameter: "Горячий старт",
            //     _id: "hammer_jdh60_ad3",
            //   },
            //   {
            //     parameter: "Защита от перегрева",
            //     _id: "hammer_jdh60_ad4",
            //   },
            //   {
            //     parameter: "Защита от перегрузок",
            //     _id: "hammer_jdh60_ad5",
            //   },
            //   {
            //     parameter: "Инверторный",
            //     _id: "hammer_jdh60_ad6",
            //   },
            //   {
            //     parameter: "Рукоятка для переноски",
            //     _id: "hammer_jdh60_ad7",
            //   },
            //   {
            //     parameter: "Форсаж дуги",
            //     _id: "hammer_jdh60_ad8",
            //   },
            //   {
            //     parameter: "Цифровой дисплей",
            //     _id: "hammer_jdh60_ad9",
            //   },
            // ],
            sale: "-18%",
            newPrice: "19 990 ₽",
            oldPrice: "23 990 ₽",
          },
        },
      ],
    },
    {
      _id: "perforators",
      subtitle: "Перфораторы",
      models: [
        {
          _id: "perf_jrh1400",
          nameModel: "JRH-1400",
          nameProduct: "Перфоратор электрический",
          img: jrh1400_1,
          titleParams: [
            {
              param: "мощность:",
              value: "1400 Вт",
              _id: "perf_jrh1400_tp1",
            },
            // {
            //   param: "вместимость катушки:",
            //   value: "до 1 кг",
            //   _id: "perf_jrh1400_tp2",
            // },
          ],
          detailed: {
            images: [
              {
                link: jrh1400_1,
                _id: "jrh1400_1",
              },
              {
                link: jrh1400_2,
                _id: "jrh1400_2",
              },
              {
                link: jrh1400_3,
                _id: "jrh1400_3",
              },
              {
                link: jrh1400_4,
                _id: "jrh1400_4",
              },
              {
                link: jrh1400_5,
                _id: "jrh1400_5",
              },
            ],
            fullNameModel: "Перфоратор электрический Jonser JRH-1400",
            specifications: [
              {
                parameter: "Коллекторный двигатель мощностью:",
                value: "1400 Вт",
                _id: "perf_jrh1400_param1",
              },
              {
                parameter: "Входное напряжение:",
                value: "220+/- 10% (220-240)",
                _id: "perf_jrh1400_param2",
              },
              {
                parameter: "Сила удара по паспорту:",
                value: "4,5 Дж",
                _id: "perf_jrh1400_param3",
              },
              {
                parameter: "Скорость вращения:",
                value: "0 - 1300 об/мин",
                _id: "perf_jrh1400_param3_1",
              },
              {
                parameter: "Количество ударов:",
                value: "5100 уд/мин",
                _id: "perf_jrh1400_param4",
              },
              {
                parameter: "Система зажима:",
                value: "SDS-Plus",
                _id: "perf_jrh1400_param5",
              },
              {
                parameter: "Кабель:",
                value: "2 м",
                _id: "perf_jrh1400_param6",
              },
              {
                parameter: "Фиксатор выключателя:",
                value: "Да",
                _id: "perf_jrh1400_param7",
              },
              {
                parameter: "Реверс:",
                value: "Да",
                _id: "perf_jrh1400_param7_1",
              },
              {
                parameter: "Сменный металлический быстрозажимной патрон:",
                value: "Да",
                _id: "perf_jrh1400_param8",
              },
              {
                parameter: "3 режима:",
                value: "Сверление, удар+сверление, удар",
                _id: "perf_jrh1400_param9",
              },
              {
                parameter: "Вес:",
                value: "5,2 кг",
                _id: "perf_jrh1400_param12",
              },
              {
                parameter: "Габариты упаковки:",
                value: "39,5 / 10 / 29,6 см",
                _id: "perf_jrh1400_param13",
              },
            ],
            equipment: [
              {
                parameter: "Перфоратор:",
                value: "1 шт",
                _id: "perf_jrh1400_eq1",
              },
              {
                parameter: "Пластиковый кейс:",
                value: "1 шт",
                _id: "perf_jrh1400_eq2",
              },
              {
                parameter: "Дополнительная рукоятка:",
                value: "1 шт",
                _id: "perf_jrh1400_eq3",
              },
              {
                parameter: "Пика и долото:",
                value: "1 шт",
                _id: "perf_jrh1400_eq4",
              },
              {
                parameter: "Буры (6, 8, 10 мм. SDS-mplus):",
                value: "1 шт",
                _id: "perf_jrh1400_eq5",
              },
              {
                parameter: "Масленка:",
                value: "1 шт",
                _id: "perf_jrh1400_eq6",
              },
              {
                parameter: "Ограничитель глубины:",
                value: "1 шт",
                _id: "perf_jrh1400_eq7",
              },
              {
                parameter: "Сменный быстросъемный патрон:",
                value: "1 шт",
                _id: "perf_jrh1400_eq8",
              },
            ],
            // advantages: [
            //   {
            //     parameter: "Автоматическая стабилизация напряжения",
            //     _id: "perf_jrh1400_ad1",
            //   },
            //   {
            //     parameter: "Антизалипание электрода",
            //     _id: "perf_jrh1400_ad2",
            //   },
            //   {
            //     parameter: "Горячий старт",
            //     _id: "perf_jrh1400_ad3",
            //   },
            //   {
            //     parameter: "Защита от перегрева",
            //     _id: "perf_jrh1400_ad4",
            //   },
            //   {
            //     parameter: "Защита от перегрузок",
            //     _id: "perf_jrh1400_ad5",
            //   },
            //   {
            //     parameter: "Инверторный",
            //     _id: "perf_jrh1400_ad6",
            //   },
            //   {
            //     parameter: "Рукоятка для переноски",
            //     _id: "perf_jrh1400_ad7",
            //   },
            //   {
            //     parameter: "Форсаж дуги",
            //     _id: "perf_jrh1400_ad8",
            //   },
            //   {
            //     parameter: "Цифровой дисплей",
            //     _id: "perf_jrh1400_ad9",
            //   },
            // ],
            sale: "-39%",
            newPrice: "8 490 ₽",
            oldPrice: "13 990 ₽",
          },
        },
        {
          _id: "perf_jrh1450",
          nameModel: "JRH-1450",
          nameProduct: "Перфоратор электрический",
          img: jrh1450_1,
          titleParams: [
            {
              param: "мощность:",
              value: "1450 Вт",
              _id: "perf_jrh1450_tp1",
            },
            // {
            //   param: "вместимость катушки:",
            //   value: "до 1 кг",
            //   _id: "perf_jrh1450_tp2",
            // },
          ],
          detailed: {
            images: [
              {
                link: jrh1450_1,
                _id: "jrh1450_1",
              },
              {
                link: jrh1450_2,
                _id: "jrh1450_2",
              },
              {
                link: jrh1450_3,
                _id: "jrh1450_3",
              },
              {
                link: jrh1450_4,
                _id: "jrh1450_4",
              },
              {
                link: jrh1450_5,
                _id: "jrh1450_5",
              },
            ],
            fullNameModel: "Перфоратор электрический Jonser JRH-1450",
            specifications: [
              {
                parameter: "Коллекторный двигатель мощностью:",
                value: "1450 Вт",
                _id: "perf_jrh1450_param1",
              },
              {
                parameter: "Входное напряжение:",
                value: "220+/- 10% (220-240)",
                _id: "perf_jrh1450_param2",
              },
              {
                parameter: "Сила удара по паспорту:",
                value: "3,0 Дж",
                _id: "perf_jrh1450_param3",
              },
              {
                parameter: "Скорость вращения:",
                value: "0 - 1250 об/мин",
                _id: "perf_jrh1450_param3_1",
              },
              {
                parameter: "Количество ударов:",
                value: "5100 уд/мин",
                _id: "perf_jrh1450_param4",
              },
              {
                parameter: "Система зажима:",
                value: "SDS-Plus",
                _id: "perf_jrh1450_param5",
              },
              {
                parameter: "Кабель:",
                value: "2 м",
                _id: "perf_jrh1450_param6",
              },
              {
                parameter: "Фиксатор выключателя:",
                value: "Да",
                _id: "perf_jrh1450_param7",
              },
              {
                parameter: "Реверс:",
                value: "Да",
                _id: "perf_jrh1450_param8",
              },

              {
                parameter: "3 режима:",
                value: "Сверление, удар+сверление, удар",
                _id: "perf_jrh1450_param9",
              },
              {
                parameter: "Вес:",
                value: "5,6 кг",
                _id: "perf_jrh1450_param12",
              },
              {
                parameter: "Габариты упаковки:",
                value: "41,5 / 10,5 / 29,5 см",
                _id: "perf_jrh1450_param13",
              },
            ],
            equipment: [
              {
                parameter: "Перфоратор:",
                value: "1 шт",
                _id: "perf_jrh1450_eq1",
              },
              {
                parameter: "Пластиковый кейс:",
                value: "1 шт",
                _id: "perf_jrh1450_eq2",
              },
              {
                parameter: "Дополнительная рукоятка:",
                value: "1 шт",
                _id: "perf_jrh1450_eq3",
              },
              {
                parameter: "Пика и долото:",
                value: "1 шт",
                _id: "perf_jrh1450_eq4",
              },
              {
                parameter: "Буры (6, 8, 10 мм. SDS-mplus):",
                value: "1 шт",
                _id: "perf_jrh1450_eq5",
              },
              {
                parameter: "Масленка:",
                value: "1 шт",
                _id: "perf_jrh1450_eq6",
              },
              {
                parameter: "Ограничитель глубины:",
                value: "1 шт",
                _id: "perf_jrh1450_eq7",
              },
            ],
            // advantages: [
            //   {
            //     parameter: "Автоматическая стабилизация напряжения",
            //     _id: "perf_jrh1450_ad1",
            //   },
            //   {
            //     parameter: "Антизалипание электрода",
            //     _id: "perf_jrh1450_ad2",
            //   },
            //   {
            //     parameter: "Горячий старт",
            //     _id: "perf_jrh1450_ad3",
            //   },
            //   {
            //     parameter: "Защита от перегрева",
            //     _id: "perf_jrh1450_ad4",
            //   },
            //   {
            //     parameter: "Защита от перегрузок",
            //     _id: "perf_jrh1450_ad5",
            //   },
            //   {
            //     parameter: "Инверторный",
            //     _id: "perf_jrh1450_ad6",
            //   },
            //   {
            //     parameter: "Рукоятка для переноски",
            //     _id: "perf_jrh1450_ad7",
            //   },
            //   {
            //     parameter: "Форсаж дуги",
            //     _id: "perf_jrh1450_ad8",
            //   },
            //   {
            //     parameter: "Цифровой дисплей",
            //     _id: "perf_jrh1450_ad9",
            //   },
            // ],
            sale: "-31%",
            newPrice: "8 990 ₽",
            oldPrice: "14 990 ₽",
          },
        },
        {
          _id: "perf_jrh1450dfr",
          nameModel: "JRH-1450dfr",
          nameProduct: "Перфоратор электрический",
          img: jrh1450dfr_1,
          titleParams: [
            {
              param: "мощность:",
              value: "1450 Вт",
              _id: "perf_jrh1450dfr_tp1",
            },
            // {
            //   param: "вместимость катушки:",
            //   value: "до 1 кг",
            //   _id: "perf_jrh1450dfr_tp2",
            // },
          ],
          detailed: {
            images: [
              {
                link: jrh1450dfr_1,
                _id: "jrh1450dfr_1",
              },
              {
                link: jrh1450dfr_2,
                _id: "jrh1450dfr_2",
              },
              {
                link: jrh1450dfr_3,
                _id: "jrh1450dfr_3",
              },
              {
                link: jrh1450dfr_4,
                _id: "jrh1450dfr_4",
              },
              {
                link: jrh1450dfr_5,
                _id: "jrh1450dfr_5",
              },
            ],
            fullNameModel: "Перфоратор электрический Jonser JRH-1450DFR",
            specifications: [
              {
                parameter: "Коллекторный двигатель мощностью:",
                value: "1450 Вт",
                _id: "perf_jrh1450dfr_param1",
              },
              {
                parameter: "Входное напряжение:",
                value: "220+/- 10% (220-240)",
                _id: "perf_jrh1450dfr_param2",
              },
              {
                parameter: "Сила удара по паспорту:",
                value: "3,0 Дж",
                _id: "perf_jrh1450dfr_param3",
              },
              {
                parameter: "Скорость вращения:",
                value: "0 - 1250 об/мин",
                _id: "perf_jrh1450dfr_param3_1",
              },
              {
                parameter: "Количество ударов:",
                value: "5100 уд/мин",
                _id: "perf_jrh1450dfr_param4",
              },
              {
                parameter: "Система зажима:",
                value: "SDS-Plus",
                _id: "perf_jrh1450dfr_param5",
              },
              {
                parameter: "Кабель:",
                value: "2 м",
                _id: "perf_jrh1450dfr_param6",
              },
              {
                parameter: "Фиксатор выключателя:",
                value: "Да",
                _id: "perf_jrh1450dfr_param7",
              },
              {
                parameter: "Реверс:",
                value: "Да",
                _id: "perf_jrh1450dfr_param8",
              },
              {
                parameter: "Металлический корпус редуктора:",
                value: "Да",
                _id: "perf_jrh1450dfr_param9",
              },
              {
                parameter: "3 режима:",
                value: "Сверление, удар+сверление, удар",
                _id: "perf_jrh1450_param10",
              },
              {
                parameter: "Вес:",
                value: "5,6 кг",
                _id: "perf_jrh1450_param12",
              },
              {
                parameter: "Габариты упаковки:",
                value: "41,5 / 10,5 / 29,5 см",
                _id: "perf_jrh1450_param13",
              },
            ],
            equipment: [
              {
                parameter: "Перфоратор:",
                value: "1 шт",
                _id: "perf_jrh1450_eq1",
              },
              {
                parameter: "Пластиковый кейс:",
                value: "1 шт",
                _id: "perf_jrh1450_eq2",
              },
              {
                parameter: "Дополнительная рукоятка:",
                value: "1 шт",
                _id: "perf_jrh1450_eq3",
              },
              {
                parameter: "Пика и долото:",
                value: "1 шт",
                _id: "perf_jrh1450_eq4",
              },
              {
                parameter: "Буры (6, 8, 10 мм. SDS-mplus):",
                value: "1 шт",
                _id: "perf_jrh1450_eq5",
              },
              {
                parameter: "Масленка:",
                value: "1 шт",
                _id: "perf_jrh1450_eq6",
              },
              {
                parameter: "Ограничитель глубины:",
                value: "1 шт",
                _id: "perf_jrh1450_eq7",
              },
            ],
            // advantages: [
            //   {
            //     parameter: "Автоматическая стабилизация напряжения",
            //     _id: "perf_jrh1450_ad1",
            //   },
            //   {
            //     parameter: "Антизалипание электрода",
            //     _id: "perf_jrh1450_ad2",
            //   },
            //   {
            //     parameter: "Горячий старт",
            //     _id: "perf_jrh1450_ad3",
            //   },
            //   {
            //     parameter: "Защита от перегрева",
            //     _id: "perf_jrh1450_ad4",
            //   },
            //   {
            //     parameter: "Защита от перегрузок",
            //     _id: "perf_jrh1450_ad5",
            //   },
            //   {
            //     parameter: "Инверторный",
            //     _id: "perf_jrh1450_ad6",
            //   },
            //   {
            //     parameter: "Рукоятка для переноски",
            //     _id: "perf_jrh1450_ad7",
            //   },
            //   {
            //     parameter: "Форсаж дуги",
            //     _id: "perf_jrh1450_ad8",
            //   },
            //   {
            //     parameter: "Цифровой дисплей",
            //     _id: "perf_jrh1450_ad9",
            //   },
            // ],
            sale: "-37%",
            newPrice: "9 990 ₽",
            oldPrice: "15 990 ₽",
          },
        },
      ],
    },
    // {
    //   _id: "tc",
    //   subtitle: "Плиткорезы",
    //   models: [
    //     {
    //       _id: "tc_jts180",
    //       nameModel: "JTS-180/1000",
    //       nameProduct: "Плиткорез электрический",
    //       img: jts180_1,
    //       titleParams: [
    //         {
    //           param: "мощность:",
    //           value: "1400 Вт",
    //           _id: "tc_jts180_tp1",
    //         },
    //         // {
    //         //   param: "вместимость катушки:",
    //         //   value: "до 1 кг",
    //         //   _id: "tc_jts180_tp2",
    //         // },
    //       ],
    //       detailed: {
    //         images: [
    //           {
    //             link: jts180_1,
    //             _id: "jts180_1",
    //           },
    //           {
    //             link: jts180_2,
    //             _id: "jts180_2",
    //           },
    //           {
    //             link: jts180_3,
    //             _id: "jts180_3",
    //           },
    //           {
    //             link: jts180_4,
    //             _id: "jts180_4",
    //           },
    //           {
    //             link: jts180_5,
    //             _id: "jts180_5",
    //           },
    //         ],
    //         fullNameModel: "Плиткорез электрический Jonser JTS-180/1000",
    //         specifications: [
    //           {
    //             parameter: "Асинхронный двигатель мощностью:",
    //             value: "1000 Вт",
    //             _id: "tc_jts180_param1",
    //           },
    //           {
    //             parameter: "Входное напряжение:",
    //             value: "220+/- 10% (220-240)",
    //             _id: "tc_jts180_param2",
    //           },
    //           {
    //             parameter: "Скорость вращения:",
    //             value: "2950 об/мин",
    //             _id: "tc_jts180_param3",
    //           },
    //           {
    //             parameter: "Диаметр диска:",
    //             value: "180 мм",
    //             _id: "tc_jts180_param4",
    //           },
    //           {
    //             parameter: "Диаметр посадочного отверстия:",
    //             value: "22,2 мм",
    //             _id: "tc_jts180_param5",
    //           },
    //           {
    //             parameter: "Максимальная глубина пропила под углом 90:",
    //             value: "34 мм",
    //             _id: "tc_jts180_param6",
    //           },
    //           {
    //             parameter: "Максимальная глубина пропила под углом 45:",
    //             value: "22 мм",
    //             _id: "tc_jts180_param7",
    //           },
    //           {
    //             parameter: "Класс изоляции:",
    //             value: "IP54",
    //             _id: "tc_jts180_param8",
    //           },
    //           {
    //             parameter: "Регулировка наклона:",
    //             value: "0-45 (градусов)",
    //             _id: "tc_jts180_param9",
    //           },
    //           {
    //             parameter: "Размеры рабочего стола:",
    //             value: "360*330 мм",
    //             _id: "tc_jts180_param10",
    //           },
    //           {
    //             parameter: "Вес:",
    //             value: "8,5 кг",
    //             _id: "tc_jts180_param12",
    //           },
    //           {
    //             parameter: "Габариты упаковки:",
    //             value: "37 / 34 / 19 см",
    //             _id: "tc_jts180_param13",
    //           },
    //         ],
    //         equipment: [
    //           {
    //             parameter: "Плиткорез:",
    //             value: "1 шт",
    //             _id: "tc_jts180_eq1",
    //           },
    //           {
    //             parameter: "Защитный кожух:",
    //             value: "1 шт",
    //             _id: "tc_jts180_eq2",
    //           },
    //           {
    //             parameter: "Ванна для водяного охлаждения диска:",
    //             value: "1 шт",
    //             _id: "tc_jts180_eq3",
    //           },
    //           {
    //             parameter: "Параллельный упор:",
    //             value: "1 шт",
    //             _id: "tc_jts180_eq4",
    //           },
    //           {
    //             parameter: "Комплект крепежа:",
    //             value: "1 шт",
    //             _id: "tc_jts180_eq5",
    //           },
    //           {
    //             parameter: "Накидной ключ:",
    //             value: "2 шт",
    //             _id: "tc_jts180_eq6",
    //           },
    //           {
    //             parameter: "Вспомогательный упор:",
    //             value: "1 шт",
    //             _id: "tc_jts180_eq7",
    //           },
    //           {
    //             parameter: "Диск 180 мм:",
    //             value: "1 шт",
    //             _id: "tc_jts180_eq8",
    //           },
    //         ],
    //         // advantages: [
    //         //   {
    //         //     parameter: "Автоматическая стабилизация напряжения",
    //         //     _id: "tc_jts180_ad1",
    //         //   },
    //         //   {
    //         //     parameter: "Антизалипание электрода",
    //         //     _id: "tc_jts180_ad2",
    //         //   },
    //         //   {
    //         //     parameter: "Горячий старт",
    //         //     _id: "tc_jts180_ad3",
    //         //   },
    //         //   {
    //         //     parameter: "Защита от перегрева",
    //         //     _id: "tc_jts180_ad4",
    //         //   },
    //         //   {
    //         //     parameter: "Защита от перегрузок",
    //         //     _id: "tc_jts180_ad5",
    //         //   },
    //         //   {
    //         //     parameter: "Инверторный",
    //         //     _id: "tc_jts180_ad6",
    //         //   },
    //         //   {
    //         //     parameter: "Рукоятка для переноски",
    //         //     _id: "tc_jts180_ad7",
    //         //   },
    //         //   {
    //         //     parameter: "Форсаж дуги",
    //         //     _id: "tc_jts180_ad8",
    //         //   },
    //         //   {
    //         //     parameter: "Цифровой дисплей",
    //         //     _id: "tc_jts180_ad9",
    //         //   },
    //         // ],
    //         sale: "-35%",
    //         newPrice: "8 990 ₽",
    //         oldPrice: "13 990 ₽",
    //       },
    //     },
    //   ],
    // },
  ],
};

export { powerToolsInfo };
