import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "../Main/Main";
import ProductPage from "../ProductPage/ProductPage";
import Privacy from "../Privacy/Privacy";
import Delivery from "../Delivery/Delivery";
import PageNotFound from "../PageNotFound/PageNotFound";
import InterfaceForAdd from "../InterfaceForAdd/InterfaceForAdd";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import Login from "../Login/Login";
import * as Auth from "../AdminApi/AuthApi";
import * as ApiGroup from "../AdminApi/GroupApi";
import * as ApiModel from "../AdminApi/ModelApi";
import { GroupsContext } from "../../contexts/GroupsContexts";
import { AdminContext } from "../../contexts/AdminContexts";
import { itemsFromCatalog } from "../../utils/constants";
import sortData from "../../utils/sortData";
import BlankPage from "../BlankPage/BlankPage";

function App() {
  const [isDarkLinks, setIsDarkLinks] = useState(true);
  const [isFixedMenu, setIsFixedMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCatalogInfo, setIsCatalogInfo] = useState({});
  const [modelsInfo, setModelsInfo] = useState({});
  const [isGroupedData, setIsGroupedData] = useState([]);
  const navigate = useNavigate();
  const heightForScroll = 350;

  const location = useLocation();
  let path = location.pathname;

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  //выход из админ-панели
  function changeOnExit() {
    setLoggedIn(false);
    localStorage.removeItem("tokenJonser");
  }

  //вход админа
  function handleSubmitLogin({ login, password, setFormValue }) {
    Auth.authorize(login, password)
      .then((data) => {
        if (data.token) {
          setFormValue({ login: "", password: "" });
          setLoggedIn(true);
          navigate("/interfaceForAdd", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  }

  //проверка токена для авторизации админа
  function tokenCheck() {
    const token = localStorage.getItem("tokenJonser");

    if (token) {
      setLoggedIn(true);
      navigate(path, { replace: true });
    } else {
      return;
    }
  }

  //получение информации для каталога
  function getCatalogInfo() {
    ApiGroup.getGroups()
      .then((res) => {
        const isObject = res.data;
        isObject.sort((a, b) => a.order - b.order);
        setIsCatalogInfo(isObject);
      })
      .catch((err) => console.log(err));
  }

  //удаление группы товаров из каталога
  function handleGroupDelete(group) {
    ApiGroup.deleteGroup(group._id)
      .then((res) => {
        setIsCatalogInfo((state) => {
          const newState = state.filter((item) => {
            return item._id !== group._id;
          });
          return newState;
        });
        alert("Удаление прошло успешно!");
      })
      .catch((err) => {
        console.log(err);
        alert("Произошла ошибка.");
      });
  }

  //получение информации всех моделей
  function getModelsInfo() {
    ApiModel.getModels()
      .then((res) => {
        setModelsInfo(res.data);
      })
      .catch((err) => console.log(err));
  }

  //удаление модели
  function handleModelDelete(model) {
    ApiModel.deleteModel(model._id)
      .then((res) => {
        setModelsInfo((state) => {
          const newState = state.filter((item) => {
            return item._id !== model._id;
          });
          return newState;
        });
        alert("Карточка удалена. Пожалуйста, перезагрузите страницу.");
      })
      .catch((err) => {
        console.log(err);
        alert("Произошла ошибка.");
      });
  }

  //редактирование цен
  function handleUpdatePrices(model, formData) {
    const id = model._id;
    const newPrice = formData.newPrice;
    const oldPrice = formData.oldPrice;

    ApiModel.updatePriceModel({ id, newPrice, oldPrice })
      .then((res) => {
        alert(
          "Цены изменены усешно. Обновления появятся после перезагрузки страницы."
        );
      })
      .catch((err) => {
        console.log(err);
        alert(
          "Произошла ошибка. Пожалуйста, проверьте правильность заполнения формы."
        );
      });
  }

  //добавление роутов для каждой группы товаров
  function renderRoutes() {
    if (!isLoading) {
      return isCatalogInfo.map((item) => (
        <Route
          key={item._id}
          path={item.route}
          element={
            <ProductPage
              title={item.title}
              description={item.description}
              videoReview={item.videoReview}
              modelsInfo={isGroupedData[item.title]}
              onModelDelete={handleModelDelete}
              onUpdatePrices={handleUpdatePrices}
            />
          }
        />
      ));
    } else {
      return itemsFromCatalog.map((item) => (
        <Route key={item._id} path={item.route} element={<BlankPage />} />
      ));
    }
  }

  useEffect(() => {
    setIsLoading(true);
    setIsCatalogInfo(itemsFromCatalog);
    getCatalogInfo();
    getModelsInfo();
    tokenCheck();
  }, []);

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

  //сортировка полученных с сервера данных для распределения по роутам
  useEffect(() => {
    if (!modelsInfo) {
      return;
    }
    const groupedTitles = sortData(modelsInfo, "title");
    setIsGroupedData(groupedTitles);
  }, [modelsInfo]);

  //проверка, что все загрузилось
  useEffect(() => {
    function checkLoading() {
      if (Object.keys(isCatalogInfo).length === 0) {
        setIsLoading(true);
        return;
      } else if (!isGroupedData) {
        setIsLoading(true);
        return;
      } else if (Object.keys(modelsInfo) === 0) {
        setIsLoading(true);
        return;
      } else {
        setIsLoading(false);
      }
    }
    checkLoading();
  }, [isCatalogInfo, isGroupedData, modelsInfo]);

  return (
    <AdminContext.Provider value={loggedIn}>
      <GroupsContext.Provider value={isCatalogInfo}>
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
              {renderRoutes()}
              <Route
                path="/interfaceForAdd"
                element={
                  <ProtectedRouteElement
                    element={InterfaceForAdd}
                    loggedIn={loggedIn}
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
              <Route
                exact
                path="/"
                element={
                  <Main loggedIn={loggedIn} onGroupDelete={handleGroupDelete} />
                }
              />

              <Route path="/delivery" element={<Delivery />} />
              <Route path="/privacy" element={<Privacy />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer scrollToTop={scrollToTop} />
        </div>
      </GroupsContext.Provider>
    </AdminContext.Provider>
  );
}

export default App;
