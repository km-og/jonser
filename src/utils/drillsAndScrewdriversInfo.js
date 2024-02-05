//Дрели-шуруповёрты
// jad12
import jad12 from "../images/drillsAndScrewdrivers/jad12/0.webp";
import jad12_1 from "../images/drillsAndScrewdrivers/jad12/1.webp";
// jad18
import jad18 from "../images/drillsAndScrewdrivers/jad18/0.webp";
import jad18_1 from "../images/drillsAndScrewdrivers/jad18/1.webp";
import jad18_2 from "../images/drillsAndScrewdrivers/jad18/2.webp";
import jad18_3 from "../images/drillsAndScrewdrivers/jad18/3.webp";
import jad18_4 from "../images/drillsAndScrewdrivers/jad18/4.webp";
import jad18_5 from "../images/drillsAndScrewdrivers/jad18/5.webp";
// jad21
import jad21 from "../images/drillsAndScrewdrivers/jad21/0.webp";
import jad21_1 from "../images/drillsAndScrewdrivers/jad21/1.webp";
import jad21_2 from "../images/drillsAndScrewdrivers/jad21/2.webp";
import jad21_3 from "../images/drillsAndScrewdrivers/jad21/3.webp";
import jad21_4 from "../images/drillsAndScrewdrivers/jad21/4.webp";
import jad21_5 from "../images/drillsAndScrewdrivers/jad21/5.webp";

const drillsAndScrewdriversInfo = {
  title: "Дрели-шуруповёрты",
  description: [
    {
      _id: "1",
      text: "Аккумуляторные дрели-шуруповёрты предназначены для работ с различными материалами: цветные и черные металлы, дерево, пластмасса, ДСП, а также для откручивания и закручивания различного крепежа.",
    },
  ],
  collections: [
    {
      _id: "das",
      subtitle: "Дрели-шуруповёрты аккумуляторные",
      premium: false,
      isHorizontal: false,
      models: [
        {
          _id: "das_jad12pro",
          nameModel: "jad-12 pro",
          img: jad12,
          nameProduct: "аккумуляторная дрель-шуруповерт",
          titleParams: [
            {
              param: "вольтаж:",
              value: "12V",
              _id: "das_jad12pro_tp1",
            },
            {
              param: "крутящий момент:",
              value: "23hm",
              _id: "das_jad12pro_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: jad12_1,
                _id: "jad12_1",
              },
            ],
            fullNameModel: "Дрель-шуруповерт аккумуляторный Jonser JAD-12 PRO",
            specifications: [
              {
                parameter: "Напряжение аккумулятора:",
                value: "12 В",
                _id: "das_jad12pro_param1",
              },
              {
                parameter: "Максимальный крутящий момент:",
                value: "35 Н.м",
                _id: "das_jad12pro_param2",
              },
              {
                parameter: "2 Li-lon аккумулятора:",
                value: "2000 mAh",
                _id: "das_jad12pro_param3",
              },
              {
                parameter: "Скорость вращения:",
                value: "0-400/0-1500 об/мин",
                _id: "das_jad12pro_param4",
              },
              {
                parameter: "Максимальный диаметр патрона:",
                value: "10 мм",
                _id: "das_jad12pro_param5",
              },
              {
                parameter: "З/у",
                value: "Да",
                _id: "das_jad12pro_param6",
              },
              {
                parameter: "Быстрозажимной патрон",
                value: "Да",
                _id: "das_jad12pro_param7",
              },
              {
                parameter: "Подсветка рабочей зоны",
                value: "Да",
                _id: "das_jad12pro_param8",
              },
              {
                parameter: "Уровень заряда",
                value: "Да",
                _id: "das_jad12pro_param9",
              },
              {
                parameter: "Время зарядки полностью разряженного АКБ:",
                value: "60 мин",
                _id: "das_jad12pro_param10",
              },
              {
                parameter: "Защита от перегрева",
                value: "Да",
                _id: "das_jad12pro_param11",
              },
              {
                parameter: "Защита от короткого замыкания",
                value: "Да",
                _id: "das_jad12pro_param12",
              },
              {
                parameter: "Планетарный механизм редуктора",
                value: "Да",
                _id: "das_jad12pro_param13",
              },
              {
                parameter: "Прорезиненный корпус",
                value: "Да",
                _id: "das_jad12pro_param14",
              },
              {
                parameter: "Вес нетто / брутто:",
                value: "1,15 / 2,3 кг",
                _id: "das_jad12pro_param15",
              },
              {
                parameter: "Габариты:",
                value: "26 / 9 / 24 см",
                _id: "das_jad12pro_param16",
              },
              {
                parameter: "Гарантия:",
                value: "1 год",
                _id: "das_jad12pro_param17",
              },
            ],
            equipment: [
              {
                parameter: "Шуруповерт:",
                value: "1 шт",
                _id: "das_jad12pro_eq1",
              },
              {
                parameter: "Аккумулятор 2000mAh:",
                value: "2 шт",
                _id: "das_jad12pro_eq2",
              },
              {
                parameter: "З/у:",
                value: "1 шт",
                _id: "das_jad12pro_eq3",
              },
              {
                parameter: "Пластиковый кейс:",
                value: "1 шт",
                _id: "das_jad12pro_eq4",
              },
              {
                parameter: "Набор сверл:",
                value:
                  "6 шт (3 по металлу (4,5,6 мм.), 3 по дереву (4,5,6 мм.))",
                _id: "das_jad12pro_eq5",
              },
              {
                parameter: "Набор бит 50 мм:",
                value:
                  "6 шт (PZ1-2шт.; PH2-1 шт.; SL5 -1 шт.; SL6-1 шт.; TORX15-1 шт.)",
                _id: "das_jad12pro_eq6",
              },
              {
                parameter: "Удлинитель 40мм:",
                value: "1 шт",
                _id: "das_jad12pro_eq8",
              },
              {
                parameter: "Набор накидных головок:",
                value: "7 шт (4,5,6,7,8,9,10)",
                _id: "das_jad12pro_eq9",
              },
              {
                parameter: "Переходник для головок 25 мм:",
                value: "1 шт",
                _id: "das_jad12pro_eq10",
              },
            ],
            advantages: [
              {
                parameter: "Автоотключение при перегреве",
                _id: "das_jad12pro_ad1",
              },
              {
                parameter: "Бесступенчатая регулировка частоты вращения",
                _id: "das_jad12pro_ad2",
              },
              {
                parameter: "Блокировка от случайного включения",
                _id: "das_jad12pro_ad3",
              },
              {
                parameter: "Быстрозажимное крепление",
                _id: "das_jad12pro_ad4",
              },
              {
                parameter: "Защита от перегрузок",
                _id: "das_jad12pro_ad5",
              },
              {
                parameter: "Плавное изменение скорости",
                _id: "das_jad12pro_ad6",
              },
              {
                parameter: "Подсветка",
                _id: "das_jad12pro_ad7",
              },
              {
                parameter: "Реверс",
                _id: "das_jad12pro_ad8",
              },
              {
                parameter: "Система стабилизации оборотов",
                _id: "das_jad12pro_ad9",
              },
              {
                parameter: "Ступенчатое изменение скорости",
                _id: "das_jad12pro_ad10",
              },
              {
                parameter: "Блокировка шпинделя",
                _id: "das_jad12pro_ad11",
              },
            ],
            sale: "-28%",
            newPrice: "4 990 ₽",
            oldPrice: "6 990 ₽",
          },
        },
        {
          _id: "das_jad18pro",
          nameModel: "jad-18 pro",
          img: jad18,
          nameProduct: "аккумуляторная дрель-шуруповерт",
          titleParams: [
            {
              param: "вольтаж:",
              value: "18V",
              _id: "das_jad18pro_tp1",
            },
            {
              param: "крутящий момент:",
              value: "40hm",
              _id: "das_jad18pro_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: jad18_1,
                _id: "jad18_1",
              },
              {
                link: jad18_2,
                _id: "jad18_2",
              },
              {
                link: jad18_3,
                _id: "jad18_3",
              },
              {
                link: jad18_4,
                _id: "jad18_4",
              },
              {
                link: jad18_5,
                _id: "jad18_5",
              },
            ],
            fullNameModel: "Дрель-шуруповерт аккумуляторный Jonser JAD-18 PRO",
            movieLink: "https://www.youtube.com/watch?v=XhADreyFqn4",
            specifications: [
              {
                parameter: "Напряжение аккумулятора:",
                value: "18 В",
                _id: "das_jad18pro_param1",
              },
              {
                parameter: "Максимальный крутящий момент:",
                value: "40 Н.м",
                _id: "das_jad18pro_param2",
              },
              {
                parameter: "2 Li-lon аккумулятора:",
                value: "2000 mAh",
                _id: "das_jad18pro_param3",
              },
              {
                parameter: "Скорость вращения:",
                value: "0-400/0-1400 об/мин",
                _id: "das_jad18pro_param4",
              },
              {
                parameter: "Максимальный диаметр патрона:",
                value: "10 мм",
                _id: "das_jad18pro_param5",
              },
              {
                parameter: "З/у",
                value: "Да",
                _id: "das_jad18pro_param6",
              },
              {
                parameter: "Быстрозажимной патрон",
                value: "Да",
                _id: "das_jad18pro_param7",
              },
              {
                parameter: "Подсветка рабочей зоны",
                value: "Да",
                _id: "das_jad18pro_param8",
              },
              {
                parameter: "Уровень заряда",
                value: "Да",
                _id: "das_jad18pro_param9",
              },
              {
                parameter: "Время зарядки полностью разряженного АКБ:",
                value: "60 мин",
                _id: "das_jad18pro_param10",
              },
              {
                parameter: "Защита от перегрева",
                value: "Да",
                _id: "das_jad18pro_param11",
              },
              {
                parameter: "Защита от короткого замыкания",
                value: "Да",
                _id: "das_jad18pro_param12",
              },
              {
                parameter: "Планетарный механизм редуктора",
                value: "Да",
                _id: "das_jad18pro_param13",
              },
              {
                parameter: "Прорезиненный корпус",
                value: "Да",
                _id: "das_jad18pro_param14",
              },
              {
                parameter: "Вес нетто / брутто:",
                value: "1,15 / 2,3 кг",
                _id: "das_jad18pro_param15",
              },
              {
                parameter: "Габариты:",
                value: "26 / 9 / 24 см",
                _id: "das_jad18pro_param16",
              },
              {
                parameter: "Гарантия:",
                value: "1 год",
                _id: "das_jad18pro_param17",
              },
            ],
            equipment: [
              {
                parameter: "Шуруповерт:",
                value: "1 шт",
                _id: "das_jad18pro_eq1",
              },
              {
                parameter: "Аккумулятор 2000mAh:",
                value: "2 шт",
                _id: "das_jad18pro_eq2",
              },
              {
                parameter: "З/у:",
                value: "1 шт",
                _id: "das_jad18pro_eq3",
              },
              {
                parameter: "Пластиковый кейс:",
                value: "1 шт",
                _id: "das_jad18pro_eq4",
              },
              {
                parameter: "Набор сверл:",
                value:
                  "6 шт (3 по металлу (4,5,6 мм.), 3 по дереву (4,5,6 мм.))",
                _id: "das_jad18pro_eq5",
              },
              {
                parameter: "Набор бит 50 мм:",
                value:
                  "6 шт (PZ1-2шт.; PH2-1 шт.; SL5 -1 шт.; SL6-1 шт.; TORX15-1 шт.)",
                _id: "das_jad18pro_eq6",
              },
              {
                parameter: "Удлинитель 40мм:",
                value: "1 шт",
                _id: "das_jad18pro_eq8",
              },
              {
                parameter: "Набор накидных головок:",
                value: "7 шт (4,5,6,7,8,9,10)",
                _id: "das_jad18pro_eq9",
              },
              {
                parameter: "Переходник для головок 25 мм:",
                value: "1 шт",
                _id: "das_jad18pro_eq10",
              },
            ],
            advantages: [
              {
                parameter: "Автоотключение при перегреве",
                _id: "das_jad18pro_ad1",
              },
              {
                parameter: "Бесступенчатая регулировка частоты вращения",
                _id: "das_jad18pro_ad2",
              },
              {
                parameter: "Блокировка от случайного включения",
                _id: "das_jad18pro_ad3",
              },
              {
                parameter: "Быстрозажимное крепление",
                _id: "das_jad18pro_ad4",
              },
              {
                parameter: "Защита от перегрузок",
                _id: "das_jad18pro_ad5",
              },
              {
                parameter: "Плавное изменение скорости",
                _id: "das_jad18pro_ad6",
              },
              {
                parameter: "Подсветка",
                _id: "das_jad18pro_ad7",
              },
              {
                parameter: "Реверс",
                _id: "das_jad18pro_ad8",
              },
              {
                parameter: "Система стабилизации оборотов",
                _id: "das_jad18pro_ad9",
              },
              {
                parameter: "Ступенчатое изменение скорости",
                _id: "das_jad18pro_ad10",
              },
              {
                parameter: "Блокировка шпинделя",
                _id: "das_jad18pro_ad11",
              },
            ],
            sale: "-16%",
            newPrice: "7 490 ₽",
            oldPrice: "8 990 ₽",
          },
        },
        {
          _id: "das_jad21pro",
          nameModel: "jad-21 pro",
          img: jad21,
          nameProduct: "аккумуляторная дрель-шуруповерт",
          titleParams: [
            {
              param: "вольтаж:",
              value: "21V",
              _id: "das_jad21pro_tp1",
            },
            {
              param: "крутящий момент:",
              value: "50hm",
              _id: "das_jad21pro_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: jad21_1,
                _id: "jad21_1",
              },
              {
                link: jad21_2,
                _id: "jad21_2",
              },
              {
                link: jad21_3,
                _id: "jad21_3",
              },
              {
                link: jad21_4,
                _id: "jad21_4",
              },
              {
                link: jad21_5,
                _id: "jad21_5",
              },
            ],
            fullNameModel: "Дрель-шуруповерт аккумуляторный Jonser JAD-21 PRO",
            specifications: [
              {
                parameter: "Напряжение аккумулятора:",
                value: "21 В",
                _id: "das_jad21pro_param1",
              },
              {
                parameter: "Максимальный крутящий момент:",
                value: "50 Н.м",
                _id: "das_jad21pro_param2",
              },
              {
                parameter: "2 Li-lon аккумулятора:",
                value: "2000 mAh",
                _id: "das_jad21pro_param3",
              },
              {
                parameter: "Скорость вращения:",
                value: "0-400/0-1400 об/мин",
                _id: "das_jad21pro_param4",
              },
              {
                parameter: "Максимальный диаметр патрона:",
                value: "10 мм",
                _id: "das_jad21pro_param5",
              },
              {
                parameter: "З/у",
                value: "Да",
                _id: "das_jad21pro_param6",
              },
              {
                parameter: "Быстрозажимной патрон",
                value: "Да",
                _id: "das_jad21pro_param7",
              },
              {
                parameter: "Подсветка рабочей зоны",
                value: "Да",
                _id: "das_jad21pro_param8",
              },
              {
                parameter: "Уровень заряда",
                value: "Да",
                _id: "das_jad21pro_param9",
              },
              {
                parameter: "Время зарядки полностью разряженного АКБ:",
                value: "60 мин",
                _id: "das_jad21pro_param10",
              },
              {
                parameter: "Защита от перегрева",
                value: "Да",
                _id: "das_jad21pro_param11",
              },
              {
                parameter: "Защита от короткого замыкания",
                value: "Да",
                _id: "das_jad21pro_param12",
              },
              {
                parameter: "Планетарный механизм редуктора",
                value: "Да",
                _id: "das_jad21pro_param13",
              },
              {
                parameter: "Прорезиненный корпус",
                value: "Да",
                _id: "das_jad21pro_param14",
              },
              {
                parameter: "Вес нетто / брутто:",
                value: "1,15 / 2,3 кг",
                _id: "das_jad21pro_param15",
              },
              {
                parameter: "Габариты:",
                value: "26 / 9 / 24 см",
                _id: "das_jad21pro_param16",
              },
              {
                parameter: "Гарантия:",
                value: "1 год",
                _id: "das_jad21pro_param17",
              },
            ],
            equipment: [
              {
                parameter: "Шуруповерт:",
                value: "1 шт",
                _id: "das_jad21pro_eq1",
              },
              {
                parameter: "Аккумулятор 2000mAh:",
                value: "2 шт",
                _id: "das_jad21pro_eq2",
              },
              {
                parameter: "З/у:",
                value: "1 шт",
                _id: "das_jad21pro_eq3",
              },
              {
                parameter: "Пластиковый кейс:",
                value: "1 шт",
                _id: "das_jad21pro_eq4",
              },
              {
                parameter: "Набор сверл:",
                value:
                  "6 шт (3 по металлу (4,5,6 мм.), 3 по дереву (4,5,6 мм.))",
                _id: "das_jad21pro_eq5",
              },
              {
                parameter: "Набор бит 50 мм:",
                value:
                  "6 шт (PZ1-2шт.; PH2-1 шт.; SL5 -1 шт.; SL6-1 шт.; TORX15-1 шт.)",
                _id: "das_jad21pro_eq6",
              },
              {
                parameter: "Удлинитель 40мм:",
                value: "1 шт",
                _id: "das_jad21pro_eq8",
              },
              {
                parameter: "Набор накидных головок:",
                value: "7 шт (4,5,6,7,8,9,10)",
                _id: "das_jad21pro_eq9",
              },
              {
                parameter: "Переходник для головок 25 мм:",
                value: "1 шт",
                _id: "das_jad21pro_eq10",
              },
            ],
            advantages: [
              {
                parameter: "Автоотключение при перегреве",
                _id: "das_jad21pro_ad1",
              },
              {
                parameter: "Бесступенчатая регулировка частоты вращения",
                _id: "das_jad21pro_ad2",
              },
              {
                parameter: "Блокировка от случайного включения",
                _id: "das_jad21pro_ad3",
              },
              {
                parameter: "Быстрозажимное крепление",
                _id: "das_jad21pro_ad4",
              },
              {
                parameter: "Защита от перегрузок",
                _id: "das_jad21pro_ad5",
              },
              {
                parameter: "Плавное изменение скорости",
                _id: "das_jad21pro_ad6",
              },
              {
                parameter: "Подсветка",
                _id: "das_jad21pro_ad7",
              },
              {
                parameter: "Реверс",
                _id: "das_jad21pro_ad8",
              },
              {
                parameter: "Система стабилизации оборотов",
                _id: "das_jad21pro_ad9",
              },
              {
                parameter: "Ступенчатое изменение скорости",
                _id: "das_jad21pro_ad10",
              },
              {
                parameter: "Блокировка шпинделя",
                _id: "das_jad21pro_ad11",
              },
            ],
            sale: "-15%",
            newPrice: "8 490 ₽",
            oldPrice: "9 990 ₽",
          },
        },
      ],
    },
  ],
};

export { drillsAndScrewdriversInfo };
