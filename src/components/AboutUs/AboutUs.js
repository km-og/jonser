import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <p className="about__text">
          <span className="about__bold">Jonser</span> - американский бренд,
          предлагающий лучшее качество продукции. Наши инструменты создаются
          только из высококачественных материалов и инновационных технологий. Мы
          стремимся к тому, чтобы каждый наш продукт был надежным, долговечным и
          соответствовал самым высоким стандартам качества.
        </p>
      </div>
      <div className="about__container">
        <h2 className="about__title">Информация о нас</h2>
        <p className="about__text">
          Независимо от того, нужно ли вам оборудование для садоводства,
          лесозаготовки или строительства, вы можете быть уверены, что продукция{" "}
          <span className="about__bold">Jonser</span> будет надежным и
          эффективным инструментом для вашей работы.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
