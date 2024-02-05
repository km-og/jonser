//Масла
// oil2t
import oil2t from "../images/oils/oil2t/0.webp";
import oil2t_1 from "../images/oils/oil2t/1.webp";
// oil4t
import oil4t from "../images/oils/oil4t/0.webp";
import oil4t_1 from "../images/oils/oil4t/1.webp";

const oilsInfo = {
  title: "Масло",
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
            images: [
              {
                link: oil2t_1,
                _id: "oil2t_1",
              },
            ],
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
            images: [
              {
                link: oil4t_1,
                _id: "oil4t_1",
              },
            ],
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
