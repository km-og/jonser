//Компрессоры
import jac50_2000ss from "../images/Compressors/jac50_2000ss.png";
import jac50_2000ssBig from "../images/Compressors/jac50_2000ss@2x.png";
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
      premium: false,
      isHorizontal: false,
      alignImageRight: false,
      models: [
        // {
        //   _id: "compr_jac100_2400ss",
        //   nameModel: "JAC-100/2400SS",
        //   // img: jac100_2400ss,
        //   detailed: {
        //     // imgBig: jac100_2400ssBig,
        //     fullNameModel:
        //       "Компрессор воздушный масляный Jonser JAC-100/2400SS",
        //     description: "",
        //     specifications: [
        //       {
        //         parameter: "Асинхронный двигатель мощностью:",
        //         value: "2400 Вт",
        //         _id: "compr_jac100_2400ss_param1",
        //       },
        //       {
        //         parameter: "Три цилиндра",
        //         value: "",
        //         _id: "compr_jac100_2400ss_param2",
        //       },
        //       {
        //         parameter: "Два ремня",
        //         value: "",
        //         _id: "compr_jac100_2400ss_param3",
        //       },
        //       {
        //         parameter: "Производительность:",
        //         value: "500л/мин",
        //         _id: "compr_jac100_2400ss_param4",
        //       },
        //       {
        //         parameter: "Входное напряжение:",
        //         value: "220В +/- 10%",
        //         _id: "compr_jac100_2400ss_param5",
        //       },
        //       {
        //         parameter: "Рабочее давление:",
        //         value: "8 бар",
        //         _id: "compr_jac100_2400ss_param6",
        //       },
        //       {
        //         parameter: "Объем рессивера:",
        //         value: "100 л",
        //         _id: "compr_jac100_2400ss_param7",
        //       },
        //       {
        //         parameter: "Вес брутто:",
        //         value: "75кг",
        //         _id: "compr_jac100_2400ss_param8",
        //       },
        //       {
        //         parameter: "Габариты:",
        //         value: "116 / 45 / 78 см",
        //         _id: "compr_jac100_2400ss_param9",
        //       },
        //       {
        //         parameter: "Гарантия:",
        //         value: "2 года",
        //         _id: "compr_jac100_2400ss_param10",
        //       },
        //     ],
        //     equipment: [
        //       {
        //         parameter: "Компрессор:",
        //         value: "1 шт",
        //         _id: "compr_jac100_2400ss_eq1",
        //       },
        //       {
        //         parameter: "Колеса:",
        //         value: "4 шт",
        //         _id: "compr_jac100_2400ss_eq2",
        //       },
        //       {
        //         parameter: "Воздушный фильтр:",
        //         value: "3 шт",
        //         _id: "compr_jac100_2400ss_eq3",
        //       },
        //       {
        //         parameter: "Комплект крепежа колес:",
        //         value: "1 шт",
        //         _id: "compr_jac100_2400ss_eq4",
        //       },
        //     ],

        //     sale: "-10%",
        //     newPrice: "86 290 ₽",
        //     oldPrice: "95 990 ₽",
        //   },
        // },
        {
          _id: "compr_jac50_2000ss",
          nameModel: "jac-50/2000ss",
          img: jac50_2000ss,
          detailed: {
            imgBig: jac50_2000ssBig,
            fullNameModel: "Компрессор воздушный масляный Jonser JAC-50/2000SS",
            description: "",
            specifications: [
              {
                parameter: "Асинхронный двигатель мощностью:",
                value: "2000 Вт",
                _id: "compr_jac50_2000ss_param1",
              },
              {
                parameter: "Один цилиндр",
                value: "",
                _id: "compr_jac50_2000ss_param2",
              },
              {
                parameter: "Входное напряжение:",
                value: "220В +/- 10%",
                _id: "compr_jac50_2000ss_param5",
              },
              {
                parameter: "Рабочее давление:",
                value: "8 бар",
                _id: "compr_jac50_2000ss_param6",
              },
              {
                parameter: "Производительность:",
                value: "300 л/мин",
                _id: "compr_jac50_2000ss_param7",
              },
              {
                parameter: "Объем рессивера:",
                value: "50 л",
                _id: "compr_jac50_2000ss_param8",
              },
              {
                parameter: "Вес брутто:",
                value: "22кг",
                _id: "compr_jac50_2000ss_param9",
              },
              {
                parameter: "Габариты:",
                value: "65 / 30 / 64 см",
                _id: "compr_jac50_2000ss_param10",
              },
              {
                parameter: "Гарантия:",
                value: "2 года",
                _id: "compr_jac50_2000ss_param11",
              },
            ],
            equipment: [
              {
                parameter: "Компрессор:",
                value: "1 шт",
                _id: "compr_jac50_2000ss_eq1",
              },
              {
                parameter: "Колеса:",
                value: "2 шт",
                _id: "compr_jac50_2000ss_eq2",
              },
              {
                parameter: "Комплект крепежа колес и ножек:",
                value: "1 шт",
                _id: "compr_jac50_2000ss_eq3",
              },
              {
                parameter: "Резиновые ножки:",
                value: "2 шт",
                _id: "compr_jac50_2000ss_eq4",
              },
              {
                parameter: "Воздушный фильтр:",
                value: "1 шт",
                _id: "compr_jac50_2000ss_eq4",
              },
            ],
            advantages: [
              {
                parameter:
                  "Автоматическое отключение по достижению заданного давления",
                _id: "compr_jac50_2000ss_ad1",
              },
              {
                parameter: "Защита от перегрева",
                _id: "compr_jac50_2000ss_ad2",
              },
              {
                parameter: "Колеса",
                _id: "compr_jac50_2000ss_ad3",
              },
              {
                parameter: "Манометр",
                _id: "compr_jac50_2000ss_ad4",
              },
              {
                parameter: "Ресивер",
                _id: "compr_jac50_2000ss_ad5",
              },
              {
                parameter: "Рукоятка для переноски",
                _id: "compr_jac50_2000ss_ad6",
              },
              {
                parameter: "Спускной клапан",
                _id: "compr_jac50_2000ss_ad7",
              },
            ],
            sale: "-46%",
            newPrice: "26 990 ₽",
            oldPrice: "49 990 ₽",
          },
        },
      ],
    },
  ],
};

export { compressorsInfo };
