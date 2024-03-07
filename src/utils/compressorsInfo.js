//Компрессоры
//jac50_2000ss
import jac50_2000ss from "../images/Compressors/jac50_2000ss/0.webp";
import jac50_2000ss_1 from "../images/Compressors/jac50_2000ss/1.webp";
import jac50_2000ss_2 from "../images/Compressors/jac50_2000ss/2.webp";
import jac50_2000ss_3 from "../images/Compressors/jac50_2000ss/3.webp";
import jac50_2000ss_4 from "../images/Compressors/jac50_2000ss/4.webp";
import jac50_2000ss_5 from "../images/Compressors/jac50_2000ss/5.webp";
//jac502200RS
import jac50_2200rs from "../images/Compressors/jac502200RS/0.webp";
import jac50_2200rs_1 from "../images/Compressors/jac502200RS/1.webp";
import jac50_2200rs_2 from "../images/Compressors/jac502200RS/2.webp";
import jac50_2200rs_3 from "../images/Compressors/jac502200RS/3.webp";
import jac50_2200rs_4 from "../images/Compressors/jac502200RS/4.webp";
import jac50_2200rs_5 from "../images/Compressors/jac502200RS/5.webp";
//jac100
import jac100 from "../images/Compressors/jac100/0.webp";
import jac100_1 from "../images/Compressors/jac100/1.webp";
// import jac100_2 from "../images/Compressors/jac100/2.webp";
// import jac100_3 from "../images/Compressors/jac100/3.webp";
// import jac100_4 from "../images/Compressors/jac100/4.webp";
// import jac100_5 from "../images/Compressors/jac100/5.webp";

// import jac100_2400ss from "../images/Compressors/jac100_2400ss.png";
// import jac100_2400ssBig from "../images/Compressors/jac100_2400ss@2x.png";

const compressorsInfo = {
  title: "Компрессоры",
  description: [
    {
      _id: "12",
      text: "Главная функция поршневого компрессора заключается в обеспечении сжатым воздухом пневматических устройств как в промышленных сферах, так и в повседневной жизни. Поршневой воздушный компрессор может быть использован для накачивания шин автомобилей и велосипедов, мячей, камер, матрасов, горок или других надувных изделий, а также для окраски различных поверхностей.",
    },
    {
      _id: "123",
      text: "Масляные поршневые компрессоры обеспечивают высокое давление и пропускную способность, что позволяет быстро и качественно выполнять ремонтные работы. К ним можно подключать различные пневмоинструменты, такие как гайко- и шуруповерты, отбойные молотки, дрели, а также отрезные и шлифовальные машины, или другие инструменты домашнего мастера.",
    },
  ],
  collections: [
    {
      _id: "compr",
      subtitle: "Компрессор воздушный",
      models: [
        {
          _id: "jac50_2000ss",
          nameModel: "jac-50/2000ss",
          img: jac50_2000ss,
          nameProduct: "Компрессор воздушный",
          titleParams: [
            {
              param: "мощность:",
              value: "2000 Вт",
              _id: "jac50_2000ss_tp1",
            },
            {
              param: "Рабочее давление:",
              value: "8 бар",
              _id: "jac50_2000ss_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: jac50_2000ss_1,
                _id: "jac50_2000ss_1",
              },
              {
                link: jac50_2000ss_2,
                _id: "jac50_2000ss_2",
              },
              {
                link: jac50_2000ss_3,
                _id: "jac50_2000ss_3",
              },
              {
                link: jac50_2000ss_4,
                _id: "jac50_2000ss_4",
              },
              {
                link: jac50_2000ss_5,
                _id: "jac50_2000ss_5",
              },
            ],
            fullNameModel: "Компрессор воздушный масляный Jonser JAC-50/2000SS",
            specifications: [
              {
                parameter: "Асинхронный двигатель мощностью:",
                value: "2000 Вт",
                _id: "jac50_2000ss_param1",
              },
              {
                parameter: "Один цилиндр",
                value: "Да",
                _id: "jac50_2000ss_param2",
              },
              {
                parameter: "Входное напряжение:",
                value: "220В +/- 10%",
                _id: "jac50_2000ss_param5",
              },
              {
                parameter: "Рабочее давление:",
                value: "8 бар",
                _id: "jac50_2000ss_param6",
              },
              {
                parameter: "Производительность:",
                value: "300 л/мин",
                _id: "jac50_2000ss_param7",
              },
              {
                parameter: "Объем рессивера:",
                value: "50 л",
                _id: "jac50_2000ss_param8",
              },
              {
                parameter: "Вес брутто:",
                value: "22кг",
                _id: "jac50_2000ss_param9",
              },
              {
                parameter: "Габариты:",
                value: "65 / 30 / 64 см",
                _id: "jac50_2000ss_param10",
              },
              {
                parameter: "Гарантия:",
                value: "2 года",
                _id: "jac50_2000ss_param11",
              },
            ],
            equipment: [
              {
                parameter: "Компрессор:",
                value: "1 шт",
                _id: "jac50_2000ss_eq1",
              },
              {
                parameter: "Колеса:",
                value: "2 шт",
                _id: "jac50_2000ss_eq2",
              },
              {
                parameter: "Комплект крепежа колес и ножек:",
                value: "1 шт",
                _id: "jac50_2000ss_eq3",
              },
              {
                parameter: "Резиновые ножки:",
                value: "2 шт",
                _id: "jac50_2000ss_eq4",
              },
              {
                parameter: "Воздушный фильтр:",
                value: "1 шт",
                _id: "jac50_2000ss_eq4",
              },
            ],
            advantages: [
              {
                parameter:
                  "Автоматическое отключение по достижению заданного давления",
                _id: "jac50_2000ss_ad1",
              },
              {
                parameter: "Защита от перегрева",
                _id: "jac50_2000ss_ad2",
              },
              {
                parameter: "Колеса",
                _id: "jac50_2000ss_ad3",
              },
              {
                parameter: "Манометр",
                _id: "jac50_2000ss_ad4",
              },
              {
                parameter: "Ресивер",
                _id: "jac50_2000ss_ad5",
              },
              {
                parameter: "Рукоятка для переноски",
                _id: "jac50_2000ss_ad6",
              },
              {
                parameter: "Спускной клапан",
                _id: "jac50_2000ss_ad7",
              },
            ],
            sale: "-64%",
            newPrice: "17 990 ₽",
            oldPrice: "49 990 ₽",
          },
        },
        {
          _id: "jac50_2200rs",
          nameModel: "jac-50/2200rs",
          img: jac50_2200rs,
          nameProduct: "Компрессор воздушный",
          titleParams: [
            {
              param: "мощность:",
              value: "2200 Вт",
              _id: "jac50_2200rs_tp1",
            },
            {
              param: "Рабочее давление:",
              value: "8 бар",
              _id: "jac50_2200rs_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: jac50_2200rs_1,
                _id: "jac50_2200rs_1",
              },
              {
                link: jac50_2200rs_2,
                _id: "jac50_2200rs_2",
              },
              {
                link: jac50_2200rs_3,
                _id: "jac50_2200rs_3",
              },
              {
                link: jac50_2200rs_4,
                _id: "jac50_2200rs_4",
              },
              {
                link: jac50_2200rs_5,
                _id: "jac50_2200rs_5",
              },
            ],
            fullNameModel: "Компрессор воздушный масляный Jonser JAC-50/2200RS",
            specifications: [
              {
                parameter: "Мощность:",
                value: "2200 Вт",
                _id: "jac50_2200rs_param1",
              },
              {
                parameter: "Входное напряжение:",
                value: "220В +/- 10%",
                _id: "jac50_2200rs_param2",
              },
              {
                parameter: "Рабочее давление:",
                value: "8 бар",
                _id: "jac50_2200rs_param3",
              },
              {
                parameter: "Производительность:",
                value: "440 л/мин",
                _id: "jac50_2200rs_param4",
              },
              {
                parameter: "Объем рессивера:",
                value: "50 л",
                _id: "jac50_2200rs_param5",
              },
              {
                parameter: "Длина кабеля питания:",
                value: "1 м",
                _id: "jac50_2200rs_param6",
              },
              {
                parameter: "Тип запуска:",
                value: "Автоматический",
                _id: "jac50_2200rs_param7",
              },
              {
                parameter: "Вид компрессора:",
                value: "Винтовой",
                _id: "jac50_2200rs_param8",
              },
              {
                parameter: "Вес брутто:",
                value: "22кг",
                _id: "jac50_2200rs_param9",
              },
              {
                parameter: "Гарантия:",
                value: "1 год",
                _id: "jac50_2200rs_param11",
              },
            ],
            equipment: [
              {
                parameter: "Компрессор:",
                value: "1 шт",
                _id: "jac50_2200rs_eq1",
              },
              {
                parameter: "Рукоятка:",
                value: "1 шт",
                _id: "jac50_2200rs_eq2",
              },
              {
                parameter: "Колеса:",
                value: "2 шт",
                _id: "jac50_2200rs_eq3",
              },
              {
                parameter: "Резиновые ножки:",
                value: "2 шт",
                _id: "jac50_2200rs_eq4",
              },
              {
                parameter: "Комплект крепежа:",
                value: "1 шт",
                _id: "jac50_2200rs_eq5",
              },
              {
                parameter: "Руководство по эксплуатации:",
                value: "1 шт",
                _id: "jac50_2200rs_eq6",
              },
            ],
            advantages: [
              {
                parameter: "Автоматическая стабилизация напряжения",
                _id: "jac50_2200rs_ad1",
              },
              {
                parameter:
                  "Автоматическое отключение при недостаточном уровне масла",
                _id: "jac50_2200rs_ad2",
              },
              {
                parameter: "Датчик уровня масла",
                _id: "jac50_2200rs_ad3",
              },
              {
                parameter: "Защита от перегрева",
                _id: "jac50_2200rs_ad4",
              },
              {
                parameter: "Колеса",
                _id: "jac50_2200rs_ad5",
              },
              {
                parameter: "Ресивер",
                _id: "jac50_2200rs_ad6",
              },
            ],
            sale: "-42%",
            newPrice: "37 990 ₽",
            oldPrice: "65 990 ₽",
          },
        },
        {
          _id: "jac100",
          nameModel: "jac-100/2400 SS",
          img: jac100,
          nameProduct: "Компрессор воздушный",
          titleParams: [
            {
              param: "мощность:",
              value: "2400 Вт",
              _id: "jac100_tp1",
            },
            {
              param: "Рабочее давление:",
              value: "8 бар",
              _id: "jac100_tp2",
            },
          ],
          detailed: {
            images: [
              {
                link: jac100_1,
                _id: "jac100_1",
              },
            ],
            fullNameModel:
              "Компрессор воздушный масляный Jonser JAC-100/2400 SS",
            specifications: [
              {
                parameter: "Асинхронный двигатель мощностью:",
                value: "2400 Вт",
                _id: "jac100_param1",
              },
              {
                parameter: "Входное напряжение:",
                value: "220В +/- 10%",
                _id: "jac100_param2",
              },
              {
                parameter: "Рабочее давление:",
                value: "8 бар",
                _id: "jac100_param3",
              },
              {
                parameter: "Производительность:",
                value: "500 л/мин",
                _id: "jac100_param4",
              },
              {
                parameter: "Объем рессивера:",
                value: "100 л",
                _id: "jac100_param5",
              },
              {
                parameter: "Три цилиндра:",
                value: "Да",
                _id: "jac100_param6",
              },
              {
                parameter: "Два ремня:",
                value: "Да",
                _id: "jac100_param7",
              },
              {
                parameter: "Вес брутто:",
                value: "75кг",
                _id: "jac100_param9",
              },
              {
                parameter: "Габариты:",
                value: "1160 * 450 * 780 мм",
                _id: "jac100_param10",
              },
              {
                parameter: "Гарантия:",
                value: "2 года",
                _id: "jac100_param11",
              },
            ],
            equipment: [
              {
                parameter: "Компрессор:",
                value: "1 шт",
                _id: "jac100_eq1",
              },
              {
                parameter: "Колеса:",
                value: "4 шт",
                _id: "jac100_eq2",
              },
              {
                parameter: "Воздушный фильтр:",
                value: "3 шт",
                _id: "jac100_eq3",
              },
              {
                parameter: "Комплект крепежа колес:",
                value: "1 шт",
                _id: "jac100_eq4",
              },
            ],
            // advantages: [
            //   {
            //     parameter: "Автоматическая стабилизация напряжения",
            //     _id: "jac100_ad1",
            //   },
            //   {
            //     parameter:
            //       "Автоматическое отключение при недостаточном уровне масла",
            //     _id: "jac100_ad2",
            //   },
            //   {
            //     parameter: "Датчик уровня масла",
            //     _id: "jac100_ad3",
            //   },
            //   {
            //     parameter: "Защита от перегрева",
            //     _id: "jac100_ad4",
            //   },
            //   {
            //     parameter: "Колеса",
            //     _id: "jac100_ad5",
            //   },
            //   {
            //     parameter: "Ресивер",
            //     _id: "jac100_ad6",
            //   },
            // ],
            sale: "-35%",
            newPrice: "64 990 ₽",
            oldPrice: "99 990 ₽",
          },
        },
        // {
        //   _id: "jac100_2400ss",
        //   nameModel: "JAC-100/2400SS",
        //   // img: jac100_2400ss,
        //   detailed: {
        //     // imgBig: jac100_2400ssBig,
        //     fullNameModel:
        //       "Компрессор воздушный масляный Jonser JAC-100/2400SS",
        //     specifications: [
        //       {
        //         parameter: "Асинхронный двигатель мощностью:",
        //         value: "2400 Вт",
        //         _id: "jac100_2400ss_param1",
        //       },
        //       {
        //         parameter: "Три цилиндра",
        //         value: "Да",
        //         _id: "jac100_2400ss_param2",
        //       },
        //       {
        //         parameter: "Два ремня",
        //         value: "Да",
        //         _id: "jac100_2400ss_param3",
        //       },
        //       {
        //         parameter: "Производительность:",
        //         value: "500л/мин",
        //         _id: "jac100_2400ss_param4",
        //       },
        //       {
        //         parameter: "Входное напряжение:",
        //         value: "220В +/- 10%",
        //         _id: "jac100_2400ss_param5",
        //       },
        //       {
        //         parameter: "Рабочее давление:",
        //         value: "8 бар",
        //         _id: "jac100_2400ss_param6",
        //       },
        //       {
        //         parameter: "Объем рессивера:",
        //         value: "100 л",
        //         _id: "jac100_2400ss_param7",
        //       },
        //       {
        //         parameter: "Вес брутто:",
        //         value: "75кг",
        //         _id: "jac100_2400ss_param8",
        //       },
        //       {
        //         parameter: "Габариты:",
        //         value: "116 / 45 / 78 см",
        //         _id: "jac100_2400ss_param9",
        //       },
        //       {
        //         parameter: "Гарантия:",
        //         value: "2 года",
        //         _id: "jac100_2400ss_param10",
        //       },
        //     ],
        //     equipment: [
        //       {
        //         parameter: "Компрессор:",
        //         value: "1 шт",
        //         _id: "jac100_2400ss_eq1",
        //       },
        //       {
        //         parameter: "Колеса:",
        //         value: "4 шт",
        //         _id: "jac100_2400ss_eq2",
        //       },
        //       {
        //         parameter: "Воздушный фильтр:",
        //         value: "3 шт",
        //         _id: "jac100_2400ss_eq3",
        //       },
        //       {
        //         parameter: "Комплект крепежа колес:",
        //         value: "1 шт",
        //         _id: "jac100_2400ss_eq4",
        //       },
        //     ],

        //     sale: "-10%",
        //     newPrice: "86 290 ₽",
        //     oldPrice: "95 990 ₽",
        //   },
        // },
      ],
    },
  ],
};

export { compressorsInfo };
