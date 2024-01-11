import { useEffect } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Catalog from "../Catalog/Catalog";
import Feedback from "../Feedback/Feedback";
import Info from "../Info/Info";
import Promo from "../Promo/Promo";

function Main({ installingColorLinks }) {
  useEffect(() => {
    installingColorLinks();
  }, []);

  return (
    <>
      <Promo />
      <AboutUs />
      <Catalog />
      <Info />
      <Feedback />
    </>
  );
}

export default Main;
