import AboutUs from "../AboutUs/AboutUs";
import Catalog from "../Catalog/Catalog";
import Feedback from "../Feedback/Feedback";
import Info from "../Info/Info";
import Promo from "../Promo/Promo";

function Main({ catalogInfo, loggedIn, onGroupDelete, isLoading }) {
  return (
    <>
      <Promo />
      <AboutUs />
      <Catalog
        catalogInfo={catalogInfo}
        loggedIn={loggedIn}
        onGroupDelete={onGroupDelete}
        isLoading={isLoading}
      />
      <Info />
      <Feedback />
    </>
  );
}

export default Main;
