import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
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
import oilsInfo from "../../utils/oilsInfo";
import { powerToolsInfo } from "../../utils/powerToolsInfo";
import InterfaceForAdd from "../InterfaceForAdd/InterfaceForAdd";

function App() {
  const [isDarkLinks, setIsDarkLinks] = useState(true);
  const [isFixedMenu, setIsFixedMenu] = useState(false);
  const heightForScroll = 350;

  const location = useLocation();
  let path = location.pathname;

  useEffect(() => {
    function switchFixedMenu() {
      setIsFixedMenu(true);
      setIsDarkLinks(false);
    }

    function switchNotFixedMenu() {
      setIsFixedMenu(false);
      setIsDarkLinks(true);
    }

    function checkPath() {
      if (path !== "/") {
        switchFixedMenu();
        window.removeEventListener("scroll", checkPath);
        return;
      } else {
        handleScroll();
      }
    }

    function handleScroll() {
      if (window.scrollY < heightForScroll) {
        switchNotFixedMenu();
      } else {
        switchFixedMenu();
      }
    }

    window.addEventListener("scroll", checkPath);

    return () => {
      window.removeEventListener("scroll", checkPath);
    };
  }, [path, location]);

  function scrollToTop() {
    window.scrollTo(0, 0);
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
          {/* здесь должен быть защищенный роут */}
          <Route path="/interfaceForAdd" element={<InterfaceForAdd />} />
          <Route exact path="/" element={<Main />} />
          <Route
            path="/semiAutomaticWeldingMachines"
            element={
              <ProductPage infoPage={semiAutomaticWeldingMachinesInfo} />
            }
          />
          <Route
            path="/chainsaws"
            element={<ProductPage infoPage={сhainsawsInfo} />}
          />
          <Route
            path="/drillsAndScrewdrivers"
            element={<ProductPage infoPage={drillsAndScrewdriversInfo} />}
          />
          <Route
            path="/gasolineGenerators"
            element={<ProductPage infoPage={gasolineGeneratorsInfo} />}
          />
          <Route
            path="/angleGrinders"
            element={<ProductPage infoPage={angleGrindersInfo} />}
          />
          <Route
            path="/compressors"
            element={<ProductPage infoPage={compressorsInfo} />}
          />
          <Route
            path="/trimmers"
            element={<ProductPage infoPage={trimmersInfo} />}
          />
          <Route
            path="/toolKits"
            element={<ProductPage infoPage={toolKitsInfo} />}
          />
          <Route path="/oils" element={<ProductPage infoPage={oilsInfo} />} />
          <Route
            path="/additionally"
            element={<ProductPage infoPage={additionallyInfo} />}
          />
          <Route
            path="/powerTools"
            element={<ProductPage infoPage={powerToolsInfo} />}
          />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer scrollToTop={scrollToTop} />
    </div>
  );
}

export default App;
