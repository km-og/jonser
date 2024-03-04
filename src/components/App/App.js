import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import Login from "../Login/Login";
import * as Auth from "../Auth/Auth";
function App() {
  const [isDarkLinks, setIsDarkLinks] = useState(true);
  const [isFixedMenu, setIsFixedMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
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

    checkPath();
    window.addEventListener("scroll", checkPath);

    return () => {
      window.removeEventListener("scroll", checkPath);
    };
  }, [path, location]);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function changeOnExit() {
    setLoggedIn(false);
    localStorage.removeItem("token");
  }

  function handleSubmitForm() {
    setLoggedIn(true);
  }

  function handleSubmitLogin({ login, password, setFormValue }) {
    Auth.authorize(login, password)
      .then((data) => {
        console.log(data);
        if (data.token) {
          setFormValue({ login: "", password: "" });
          handleSubmitForm();
          navigate("/interfaceForAdd", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  }

  function tokenCheck() {
    // const token = localStorage.getItem("token");
    // if (token) {
    // Auth.getContent(token).then((res) => {
    //   if (res) {
    //     console.log(res);
    // setLoggedIn(true);
    // navigate("/interfaceForAdd", { replace: true });
    //   }
    // });
    // } else {
    //   return;
    // }
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  return (
    <div className="page">
      <Header
        isDarkLinks={isDarkLinks}
        isFixedMenu={isFixedMenu}
        scrollToTop={scrollToTop}
        loggedIn={loggedIn}
        signOut={changeOnExit}
      />
      <main className="content">
        <Routes>
          <Route
            path="/interfaceForAdd"
            element={
              <ProtectedRouteElement
                element={InterfaceForAdd}
                loggedIn={loggedIn}
                // isChangeOnExit={changeOnExit}
                // onSubmitProductForm={handleSubmitProductForm}
              />
            }
          />
          <Route
            path="/sign-in"
            element={
              <Login
                handleSubmitLogin={handleSubmitLogin}
                loggedIn={loggedIn}
              />
            }
          />
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
