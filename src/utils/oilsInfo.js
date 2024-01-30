//Масла
import oil2t from "../images/oils/2t-premium.png";
import oil2tBig from "../images/oils/2t-premium@2x.png";
import oil4t from "../images/oils/4t-premium.png";
import oil4tBig from "../images/oils/4t-premium@2x.png";

const oilsInfo = {
  title: "Дополнительно",
  description: "",
  collections: [
    {
      _id: "oils",
      subtitle: "Моторные масла",
      premium: false,
      isHorizontal: false,
      models: [
        {
          _id: "oils_2t",
          nameModel: "2t premium",
          img: oil2t,
          nameProduct: "моторное масло",
          titleParams: [
            {
              param: "Объем:",
              value: "1л",
              _id: "oils_2t_tp1",
            },
            {
              param: "применение:",
              value: "для 2-тактных двигателей",
              _id: "oils_2t_tp2",
            },
          ],
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
          nameProduct: "моторное масло",
          titleParams: [
            {
              param: "Объем:",
              value: "1л",
              _id: "oils_4t_tp1",
            },
            {
              param: "применение:",
              value: "для 4-тактных двигателей",
              _id: "oils_4t_tp2",
            },
          ],
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
  ],
};

export default oilsInfo;
