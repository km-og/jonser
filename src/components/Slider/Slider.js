import { useEffect, useState } from "react";
import "./Slider.css";

function Slider({ images, nameModel }) {
  const [isFirstPhoto, setIsFirstPhoto] = useState(true);
  const [isLastPhoto, setIsLastPhoto] = useState(false);
  const [isMaxWidth, setIsMaxWidth] = useState(0);
  const [scrollToTheSign, setScrollToTheSign] = useState(0);
  const [margin, setMargin] = useState({ marginLeft: 0 });
  const [slideNumber, setSlideNumber] = useState(0);
  const [isWindowWidth, setIsWindowWidth] = useState(window.innerWidth);
  const [isWidthImg, setIsWidthImg] = useState(0);

  //скролл влево/вправо
  function scroll(evt) {
    let scroll = scrollToTheSign;

    if (!evt.target.classList.contains("slider__arrow_type_inactive")) {
      setIsFirstPhoto(false);

      evt.target.classList.contains("slider__arrow_type_prev")
        ? (scroll = scroll + isWidthImg)
        : (scroll = scroll - isWidthImg);
      setScrollToTheSign(scroll);
    }
  }

  //отслеживание изменения ширины экрана
  useEffect(() => {
    function handleResize() {
      setIsWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //изменение ширины изображений в зависимости от ширины экрана
  useEffect(() => {
    // setIsWindowWidth(window.innerWidth);
    if (isWindowWidth <= 445) {
      setIsWidthImg(200);
      return;
    } else if (isWindowWidth > 445 && isWindowWidth < 700) {
      setIsWidthImg(300);
      return;
    } else {
      setIsWidthImg(460);
    }
  }, [isWindowWidth]);

  //расчет максмальной ширины слайдера
  useEffect(() => {
    const width = (images.length - 1) * isWidthImg;
    setIsMaxWidth(width);
  }, [images, isWidthImg]);

  //активация стрелок
  useEffect(() => {
    if (isMaxWidth === 0) {
      setIsFirstPhoto(true);
      setIsLastPhoto(true);
      return;
    }

    const isSlideNumber = Math.abs(scrollToTheSign / isWidthImg);
    setSlideNumber(isSlideNumber);

    setMargin((prevMargin) => ({
      ...prevMargin,
      marginLeft: scrollToTheSign,
    }));

    if (scrollToTheSign === 0 || slideNumber === 0) {
      setIsFirstPhoto(true);
      setIsLastPhoto(false);
      return;
    } else if (
      Math.abs(scrollToTheSign) === Math.abs(isMaxWidth) ||
      slideNumber === images.length - 1
    ) {
      setIsLastPhoto(true);
      setIsFirstPhoto(false);
      return;
    }
    setIsFirstPhoto(false);
    setIsLastPhoto(false);
  }, [scrollToTheSign, slideNumber, isMaxWidth, images.length, isWidthImg]);

  //переход к слайду при клике на точку
  function goToSlide(number) {
    const numberSlide = number * -isWidthImg;
    setScrollToTheSign(numberSlide);
  }

  //отрисовка точек
  function renderDots() {
    const dots = [];
    for (let i = 0; i < images.length; i++) {
      dots.push(
        <div
          key={`dot-${i}`}
          className={`slider__dot ${
            slideNumber === i ? "slider__dot_type_selected" : ""
          }`}
          onClick={() => goToSlide(i)}
        ></div>
      );
    }
    return dots;
  }

  return (
    <div className="slider">
      <button
        type="button"
        className={`slider__arrow slider__arrow_type_prev ${
          isFirstPhoto ? "slider__arrow_type_inactive" : ""
        }`}
        onClick={scroll}
      ></button>
      <div className="slider__photos">
        <div className="slider__box" style={margin}>
          {images.map((img) => (
            <div className="slider__wrapper" key={img._id}>
              <img
                className="slider__img"
                src={img.link}
                alt={`Модель ${nameModel}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="slider__dots">{renderDots()}</div>
      </div>
      <button
        type="button"
        className={`slider__arrow slider__arrow_type_next ${
          isLastPhoto ? "slider__arrow_type_inactive" : ""
        }`}
        onClick={scroll}
      ></button>
    </div>
  );
}

export default Slider;
