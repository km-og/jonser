//Масла
import oil2t from "../images/oils/2t-premium.png";
import oil2tBig from "../images/oils/2t-premium@2x.png";
import oil4t from "../images/oils/4t-premium.png";
import oil4tBig from "../images/oils/4t-premium@2x.png";

//Цепи
import chain3850 from "../images/additionally/chain3850.png";
import chain3850Big from "../images/additionally/chain3850@2x.png";
//Проволока
import fcw081 from "../images/additionally/fcw081.png";
import fcw081Big from "../images/additionally/fcw081@2x.png";
import fcw101 from "../images/additionally/fcw101.png";
import fcw101Big from "../images/additionally/fcw101@2x.png";
import fcw085 from "../images/additionally/fcw085.png";
import fcw085Big from "../images/additionally/fcw085@2x.png";
import fcw085c from "../images/additionally/fcw085C.png";
import fcw085cBig from "../images/additionally/fcw085C@2x.png";

const additionallyInfo = {
  title: "Оснастка",
  description: "",
  collections: [
    {
      _id: "oils",
      subtitle: "Моторные масла",
      premium: false,
      isHorizontal: false,
      alignImageRight: false,
      models: [
        {
          _id: "oils_2t",
          nameModel: "2t premium",
          img: oil2t,
          detailed: {
            imgBig: oil2tBig,
            fullNameModel: "Моторное масло Jonser 2T Premium",
            description:
              " - это полусинтетическое масло для 2-тактных двигателей. Специально разработано для двигателей с воздушным охлаждением. Полусинтетическое масло благодаря своим характеристикам способно работать на высоком уровне максимально длительное время. Такое масло снижает риск возникновения неисправностей оборудования, обеспечивает бесперебойную работу, снижает стоимость затрат на обслуживание, продлевает срок службы двигателя. Используется в двухтактных двигателях с воздушным охлаждением, устанавливаемых на мотоблоках, бензопилах, газонокосилках и другой технике.",
            specifications: [
              {
                parameter: "Объем :",
                value: "1л",
                _id: "oils_2t_param1",
              },
            ],
            sale: "-16%",
            newPrice: "990 ₽",
            oldPrice: "1 190 ₽",
          },
        },
        {
          _id: "oils_4t",
          nameModel: "4t premium",
          img: oil4t,
          detailed: {
            imgBig: oil4tBig,
            fullNameModel: "Моторное масло Jonser 4T Premium",
            description:
              " - это полусинтетическое масло для 4-тактных двигателей. Специально разработано для двигателей с воздушным охлаждением. Полусинтетическое масло благодаря своим характеристикам способно работать на высоком уровне максимально длительное время. По сравнению с минеральными маслами полусинтетическое может использоваться при самом широком температурном диапазоне, обладает лучшей текучестью при низких температурах, лучшей термоустойчивостью, лучшей устойчивостью к окислению, низкой летучестью, низким нагарообразованием, лучшим контролем над износом.",
            specifications: [
              {
                parameter: "Объем :",
                value: "1л",
                _id: "oils_2t_param1",
              },
            ],
            sale: "-16%",
            newPrice: "990 ₽",
            oldPrice: "1 190 ₽",
          },
        },
      ],
    },
    {
      _id: "chain",
      subtitle: "Цепи",
      premium: false,
      isHorizontal: false,
      alignImageRight: false,
      alignImageTop: false,
      models: [
        {
          _id: "chain_3850",
          nameModel: "3/8 - 50",
          img: chain3850,
          detailed: {
            imgBig: chain3850Big,
            fullNameModel: "Цепь для пилы Jonser 3/8 - 50",
            description: "",
            specifications: [
              {
                parameter: "Материал:",
                value: `Сталь`,
                _id: "chain_3850_param1",
              },
              {
                parameter: "Количество звеньев:",
                value: "50шт",
                _id: "chain_3850_param2",
              },
              {
                parameter: "Длина:",
                value: "350мм",
                _id: "chain_3850_param3",
              },
              {
                parameter: "Шаг зубьев:",
                value: `3/8"`,
                _id: "chain_3850_param4",
              },
            ],
            sale: "-18%",
            newPrice: "1 049 ₽",
            oldPrice: "1 290 ₽",
          },
        },
        {
          _id: "chain_3856",
          nameModel: "3/8 - 56",
          img: chain3850,
          detailed: {
            imgBig: chain3850Big,
            fullNameModel: "Цепь для пилы Jonser 3/8 - 56",
            description: "",
            specifications: [
              {
                parameter: "Материал:",
                value: `Сталь`,
                _id: "chain_3856_param1",
              },
              {
                parameter: "Количество звеньев:",
                value: "56шт",
                _id: "chain_3856_param2",
              },
              {
                parameter: "Длина:",
                value: "400мм",
                _id: "chain_3856_param3",
              },
              {
                parameter: "Шаг зубьев:",
                value: `3/8"`,
                _id: "chain_3856_param4",
              },
            ],
            sale: "-26%",
            newPrice: "1 090 ₽",
            oldPrice: "1 490 ₽",
          },
        },
        {
          _id: "chain_3857",
          nameModel: "3/8 - 57",
          img: chain3850,
          detailed: {
            imgBig: chain3850Big,
            fullNameModel: "Цепь для пилы Jonser 3/8 - 57",
            description: "",
            specifications: [
              {
                parameter: "Материал:",
                value: `Сталь`,
                _id: "chain_3857_param1",
              },
              {
                parameter: "Количество звеньев:",
                value: "57шт",
                _id: "chain_3857_param2",
              },
              {
                parameter: "Длина:",
                value: "400мм",
                _id: "chain_3857_param3",
              },
              {
                parameter: "Шаг зубьев:",
                value: `3/8"`,
                _id: "chain_3857_param4",
              },
            ],
            sale: "-26%",
            newPrice: "1 090 ₽",
            oldPrice: "1 490 ₽",
          },
        },
        {
          _id: "chain_032564",
          nameModel: "0.325 - 64",
          img: chain3850,
          detailed: {
            imgBig: chain3850Big,
            fullNameModel: "Цепь для пилы Jonser 0.325 - 64",
            description: "",
            specifications: [
              {
                parameter: "Материал:",
                value: `Сталь`,
                _id: "chain_032564_param1",
              },
              {
                parameter: "Количество звеньев:",
                value: "64шт",
                _id: "chain_032564_param2",
              },
              {
                parameter: "Длина:",
                value: "400мм",
                _id: "chain_032564_param3",
              },
              {
                parameter: "Шаг зубьев:",
                value: `0.325"`,
                _id: "chain_032564_param4",
              },
            ],
            sale: "-27%",
            newPrice: "1 149 ₽",
            oldPrice: "1 590 ₽",
          },
        },
        {
          _id: "chain_032572",
          nameModel: "0.325 - 72",
          img: chain3850,
          detailed: {
            imgBig: chain3850Big,
            fullNameModel: "Цепь для пилы Jonser 0.325 - 72",
            description: "",
            specifications: [
              {
                parameter: "Материал:",
                value: `Сталь`,
                _id: "chain_032572_param1",
              },
              {
                parameter: "Количество звеньев:",
                value: "72шт",
                _id: "chain_032572_param2",
              },
              {
                parameter: "Длина:",
                value: "450мм",
                _id: "chain_032572_param3",
              },
              {
                parameter: "Шаг зубьев:",
                value: `0.325"`,
                _id: "chain_032572_param4",
              },
            ],
            sale: "-27%",
            newPrice: "1 149 ₽",
            oldPrice: "1 590 ₽",
          },
        },
      ],
    },
    {
      _id: "chainS",
      subtitle: "Цепи Super Series",
      premium: true,
      isHorizontal: false,
      alignImageRight: false,
      alignImageTop: false,
      models: [
        {
          _id: "chainS_3850s",
          nameModel: "3/8 - 50s",
          img: chain3850,
          detailed: {
            imgBig: chain3850Big,
            fullNameModel: "Цепь для пилы Jonser 3/8 - 50s",
            description: "",
            specifications: [
              {
                parameter: "Материал:",
                value: `Сталь`,
                _id: "chainS_3850s_param1",
              },
              {
                parameter: "Количество звеньев:",
                value: "50шт",
                _id: "chainS_3850s_param2",
              },
              {
                parameter: "Длина:",
                value: "350мм",
                _id: "chainS_3850s_param3",
              },
              {
                parameter: "Шаг зубьев:",
                value: `3/8"`,
                _id: "chainS_3850s_param4",
              },
            ],
            sale: "-11%",
            newPrice: "1 490 ₽",
            oldPrice: "1 690 ₽",
          },
        },
        {
          _id: "chainS_3856s",
          nameModel: "3/8 - 56s",
          img: chain3850,
          detailed: {
            imgBig: chain3850Big,
            fullNameModel: "Цепь для пилы Jonser 3/8 - 56s",
            description: "",
            specifications: [
              {
                parameter: "Материал:",
                value: `Сталь`,
                _id: "chainS_3856s_param1",
              },
              {
                parameter: "Количество звеньев:",
                value: "56шт",
                _id: "chainS_3856s_param2",
              },
              {
                parameter: "Длина:",
                value: "400мм",
                _id: "chainS_3856s_param3",
              },
              {
                parameter: "Шаг зубьев:",
                value: `3/8"`,
                _id: "chainS_3856s_param4",
              },
            ],
            sale: "-11%",
            newPrice: "1 590 ₽",
            oldPrice: "1 790 ₽",
          },
        },
        {
          _id: "chainS_3857",
          nameModel: "3/8 - 57",
          img: chain3850,
          detailed: {
            imgBig: chain3850Big,
            fullNameModel: "Цепь для пилы Jonser 3/8 - 57",
            description: "",
            specifications: [
              {
                parameter: "Материал:",
                value: `Сталь`,
                _id: "chainS_3857_param1",
              },
              {
                parameter: "Количество звеньев:",
                value: "57шт",
                _id: "chainS_3857_param2",
              },
              {
                parameter: "Длина:",
                value: "400мм",
                _id: "chainS_3857_param3",
              },
              {
                parameter: "Шаг зубьев:",
                value: `3/8"`,
                _id: "chainS_3857_param4",
              },
            ],
            sale: "-11%",
            newPrice: "1 590 ₽",
            oldPrice: "1 790 ₽",
          },
        },
        {
          _id: "chainS_032564s",
          nameModel: "0.325 - 64s",
          img: chain3850,
          detailed: {
            imgBig: chain3850Big,
            fullNameModel: "Цепь для пилы Jonser 0.325 - 64s",
            description: "",
            specifications: [
              {
                parameter: "Материал:",
                value: `Сталь`,
                _id: "chainS_032564s_param1",
              },
              {
                parameter: "Количество звеньев:",
                value: "64шт",
                _id: "chainS_032564s_param2",
              },
              {
                parameter: "Длина:",
                value: "400мм",
                _id: "chainS_032564s_param3",
              },
              {
                parameter: "Шаг зубьев:",
                value: `0.325"`,
                _id: "chainS_032564s_param4",
              },
            ],
            sale: "-10%",
            newPrice: "1 690 ₽",
            oldPrice: "1 890 ₽",
          },
        },
        {
          _id: "chainS_032572s",
          nameModel: "0.325 - 72s",
          img: chain3850,
          detailed: {
            imgBig: chain3850Big,
            fullNameModel: "Цепь для пилы Jonser 0.325 - 72s",
            description: "",
            specifications: [
              {
                parameter: "Материал:",
                value: `Сталь`,
                _id: "chainS_032572s_param1",
              },
              {
                parameter: "Количество звеньев:",
                value: "72шт",
                _id: "chainS_032572s_param2",
              },
              {
                parameter: "Длина:",
                value: "450мм",
                _id: "chainS_032572s_param3",
              },
              {
                parameter: "Шаг зубьев:",
                value: `0.325"`,
                _id: "chainS_032572s_param4",
              },
            ],
            sale: "-10%",
            newPrice: "1 690 ₽",
            oldPrice: "1 890 ₽",
          },
        },
      ],
    },
    {
      _id: "wire",
      subtitle: "Проволока",
      premium: false,
      isHorizontal: false,
      alignImageRight: false,
      alignImageTop: false,
      models: [
        {
          _id: "wire_fcw081",
          nameModel: "fcw 0,8 - 1",
          img: fcw081,
          detailed: {
            imgBig: fcw081Big,
            fullNameModel:
              "Сварочная проволока флюсовая порошковая Jonser FCW 0,8 - 1",
            description: "",
            specifications: [
              {
                parameter: "Тип сварки:",
                value: `полуавтоматическая (MIG/MAG)`,
                _id: "wire_fcw081_param1",
              },
              {
                parameter: "Диаметр:",
                value: "0,8мм",
                _id: "wire_fcw081_param2",
              },
              {
                parameter: "Вес:",
                value: "1кг",
                _id: "wire_fcw081_param3",
              },
            ],
            sale: "-21%",
            newPrice: "1 490 ₽",
            oldPrice: "1 890 ₽",
          },
        },
        {
          _id: "wire_fcw101",
          nameModel: "fcw 1,0 - 1",
          img: fcw101,
          detailed: {
            imgBig: fcw101Big,
            fullNameModel:
              "Сварочная проволока флюсовая порошковая Jonser FCW 1,0 - 1",
            description: "",
            specifications: [
              {
                parameter: "Тип сварки:",
                value: `полуавтоматическая (MIG/MAG)`,
                _id: "wire_fcw101_param1",
              },
              {
                parameter: "Диаметр:",
                value: "1,0мм",
                _id: "wire_fcw101_param2",
              },
              {
                parameter: "Вес:",
                value: "1кг",
                _id: "wire_fcw101_param3",
              },
            ],
            sale: "-21%",
            newPrice: "1 490 ₽",
            oldPrice: "1 890 ₽",
          },
        },
        {
          _id: "wire_fcw085",
          nameModel: "fcw 0,8 - 5",
          img: fcw085,
          detailed: {
            imgBig: fcw085Big,
            fullNameModel: "Сварочная проволока Jonser FCW 0,8 - 5",
            description: "",
            specifications: [
              {
                parameter: "Тип сварки:",
                value: `полуавтоматическая (MIG/MAG)`,
                _id: "wire_fcw085_param1",
              },
              {
                parameter: "Диаметр:",
                value: "0,8мм",
                _id: "wire_fcw085_param2",
              },
              {
                parameter: "Вес:",
                value: "5кг",
                _id: "wire_fcw085_param3",
              },
            ],
            sale: "-28%",
            newPrice: "4 990 ₽",
            oldPrice: "6 990 ₽",
          },
        },
        {
          _id: "wire_fcw085c",
          nameModel: "fcw 0,8 - 5 омеднённая",
          img: fcw085c,
          detailed: {
            imgBig: fcw085cBig,
            fullNameModel: "Сварочная проволока омеднённая Jonser FCW 0,8 - 5",
            description: "",
            specifications: [
              {
                parameter: "Тип сварки:",
                value: `полуавтоматическая (MIG/MAG)`,
                _id: "wire_fcw085c_param1",
              },
              {
                parameter: "Диаметр:",
                value: "0,8мм",
                _id: "wire_fcw085c_param2",
              },
              {
                parameter: "Вес:",
                value: "5кг",
                _id: "wire_fcw085c_param3",
              },
            ],
            sale: "-40%",
            newPrice: "2 990 ₽",
            oldPrice: "4 990 ₽",
          },
        },
      ],
    },
  ],
};

export { additionallyInfo };
