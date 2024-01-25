// import logo from './logo.svg';
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "../Main/Main";
import { semiAutomaticWeldingMachinesInfo } from "../../utils/semiAutomaticWeldingMachinesInfo";
import { additionallyInfo } from "../../utils/additionallyInfo";
import { angleGrindersInfo } from "../../utils/angleGrindersInfo";
import { compressorsInfo } from "../../utils/compressorsInfo";
import { drillsAndScrewdriversInfo } from "../../utils/drillsAndScrewdriversInfo";
import { gasolineGeneratorsInfo } from "../../utils/gasolineGeneratorsInfo";
import { toolKitsInfo } from "../../utils/toolKitsInfo";
import { trimmersInfo } from "../../utils/trimmersInfo";
import { сhainsawsInfo } from "../../utils/сhainsawsInfo";
import ProductPage from "../ProductPage/ProductPage";
import Privacy from "../Privacy/Privacy";
import Delivery from "../Delivery/Delivery";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  const [isDarkLinks, setIsDarkLinks] = useState(true);
  const [isFixedMenu, setIsFixedMenu] = useState(false);
  const [heightForScroll, setHeightForScroll] = useState(0);
  const mobileWidth = 768;

  useEffect(() => {
    if (window.screen.width < mobileWidth) {
      setHeightForScroll(350);
    } else {
      setHeightForScroll(420);
    }
    function handleScroll() {
      if (window.scrollY < heightForScroll) {
        setIsFixedMenu(false);
        setIsDarkLinks(true);
        // switchFixedMenu();
        // return;
      } else {
        setIsFixedMenu(true);
        setIsDarkLinks(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
  });

  function switchToDarkLinks() {
    setIsDarkLinks(true);
  }

  function switchToLightLinks() {
    setIsDarkLinks(false);
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function switchFixedMenu() {
    setIsFixedMenu(true);
    setIsDarkLinks(false);
  }

  return (
    <div className="page">
      <Header
        isDarkLinks={isDarkLinks}
        isFixedMenu={isFixedMenu}
        scrollToTop={scrollToTop}
      />
      <main className="content">
        <Routes>
          <Route
            exact
            path="/"
            element={<Main installingColorLinks={switchToDarkLinks} />}
          />
          <Route
            path="/semiAutomaticWeldingMachines"
            element={
              <ProductPage
                infoPage={semiAutomaticWeldingMachinesInfo}
                installingColorLinks={switchToLightLinks}
              />
            }
          />
          <Route
            path="/chainsaws"
            element={
              <ProductPage
                infoPage={сhainsawsInfo}
                installingColorLinks={switchToLightLinks}
              />
            }
          />
          <Route
            path="/drillsAndScrewdrivers"
            element={
              <ProductPage
                infoPage={drillsAndScrewdriversInfo}
                installingColorLinks={switchToLightLinks}
              />
            }
          />
          <Route
            path="/gasolineGenerators"
            element={
              <ProductPage
                infoPage={gasolineGeneratorsInfo}
                installingColorLinks={switchToLightLinks}
              />
            }
          />
          <Route
            path="/angleGrinders"
            element={
              <ProductPage
                infoPage={angleGrindersInfo}
                installingColorLinks={switchToLightLinks}
              />
            }
          />
          <Route
            path="/compressors"
            element={
              <ProductPage
                infoPage={compressorsInfo}
                installingColorLinks={switchToLightLinks}
              />
            }
          />
          <Route
            path="/trimmers"
            element={
              <ProductPage
                infoPage={trimmersInfo}
                installingColorLinks={switchToLightLinks}
              />
            }
          />
          <Route
            path="/toolKits"
            element={
              <ProductPage
                infoPage={toolKitsInfo}
                installingColorLinks={switchToLightLinks}
              />
            }
          />
          <Route
            path="/additionally"
            element={
              <ProductPage
                infoPage={additionallyInfo}
                installingColorLinks={switchToLightLinks}
              />
            }
          />
          <Route
            path="/delivery"
            element={<Delivery switchFixedMenu={switchFixedMenu} />}
          />
          <Route
            path="/privacy"
            element={<Privacy switchFixedMenu={switchFixedMenu} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer scrollToTop={scrollToTop} />
    </div>
  );
}

export default App;
