import AboutUs from "../AboutUs/AboutUs";
import Catalog from "../Catalog/Catalog";
import Feedback from "../Feedback/Feedback";
import Info from "../Info/Info";
import Promo from "../Promo/Promo";

function Main({ loggedIn, onGroupDelete }) {
  return (
    <>
      <Promo />
      <AboutUs />
      <Catalog loggedIn={loggedIn} onGroupDelete={onGroupDelete} />
      <Info />
      <Feedback />
    </>
  );
}

export default Main;
