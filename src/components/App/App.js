// import logo from './logo.svg';
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "../Main/Main";
import {
  additionallyInfo,
  angleGrindersInfo,
  compressorsInfo,
  drillsAndScrewdriversInfo,
  gasolineGeneratorsInfo,
  oilsInfo,
  semiAutomaticWeldingMachinesInfo,
  toolKitsInfo,
  trimmersInfo,
  сhainsawsInfo,
} from "../../utils/constants";
import ProductPage from "../ProductPage/ProductPage";
import Privacy from "../Privacy/Privacy";

function App() {
  const [isDarkLinks, setIsDarkLinks] = useState(false);
  const [isFixedMenu, setIsFixedMenu] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 840) {
        setIsFixedMenu(true);
        setIsDarkLinks(false);
        return;
      } else {
        setIsFixedMenu(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
  }, []);

  function SwitchToDarkLinks() {
    setIsDarkLinks(true);
  }

  function SwitchToLightLinks() {
    setIsDarkLinks(false);
  }

  return (
    <div className="page">
      <Header isDarkLinks={isDarkLinks} isFixedMenu={isFixedMenu} />
      <main className="content">
        <Routes>
          <Route
            exact
            path="/"
            element={<Main installingColorLinks={SwitchToDarkLinks} />}
          />
          <Route
            path="/semiAutomaticWeldingMachines"
            element={
              <ProductPage
                infoPage={semiAutomaticWeldingMachinesInfo}
                installingColorLinks={SwitchToLightLinks}
              />
            }
          />
          <Route
            path="/chainsaws"
            element={
              <ProductPage
                infoPage={сhainsawsInfo}
                installingColorLinks={SwitchToLightLinks}
              />
            }
          />
          <Route
            path="/drillsAndScrewdrivers"
            element={
              <ProductPage
                infoPage={drillsAndScrewdriversInfo}
                installingColorLinks={SwitchToLightLinks}
              />
            }
          />
          <Route
            path="/gasolineGenerators"
            element={
              <ProductPage
                infoPage={gasolineGeneratorsInfo}
                installingColorLinks={SwitchToLightLinks}
              />
            }
          />
          <Route
            path="/angleGrinders"
            element={
              <ProductPage
                infoPage={angleGrindersInfo}
                installingColorLinks={SwitchToLightLinks}
              />
            }
          />
          <Route
            path="/oils"
            element={
              <ProductPage
                infoPage={oilsInfo}
                installingColorLinks={SwitchToLightLinks}
              />
            }
          />
          <Route
            path="/compressors"
            element={
              <ProductPage
                infoPage={compressorsInfo}
                installingColorLinks={SwitchToLightLinks}
              />
            }
          />
          <Route
            path="/trimmers"
            element={
              <ProductPage
                infoPage={trimmersInfo}
                installingColorLinks={SwitchToLightLinks}
              />
            }
          />
          <Route
            path="/toolKits"
            element={
              <ProductPage
                infoPage={toolKitsInfo}
                installingColorLinks={SwitchToLightLinks}
              />
            }
          />
          <Route
            path="/additionally"
            element={
              <ProductPage
                infoPage={additionallyInfo}
                installingColorLinks={SwitchToLightLinks}
              />
            }
          />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
