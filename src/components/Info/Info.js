import "./Info.css";

function Info() {
  return (
    <div className="info" id="info">
      <ul className="info__list">
        <li className="info__column">
          <h2 className="info__title">Сервисный центр</h2>
          <p className="info__text">
            Мы предоставляем технические сервисы в более чем 112 городах по всей
            стране, чтобы удовлетворить потребности всех наших клиентов.
            Независимо от того, где Вы находитесь, вы всегда можете рассчитывать
            на быстрый ответ от наших специалистов, которые помогут вам решить
            любую проблему. Мы ценим каждого нашего клиента и стремимся сделать
            их опыт покупок максимально удобным и простым.
          </p>
        </li>
        <li className="info__column">
          <h2 className="info__title">Гарантия</h2>
          <p className="info__text">
            Гарантия, длительностью от 12 месяцев со дня приобретения,
            предоставляется на все наши товары. Мы гарантируем качество и
            надежность нашей техники, и в случае обнаружения любых дефектов или
            неисправностей в процессе использования, мы обеспечим их замену или
            ремонт согласно условиям нашей гарантии.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Info;
