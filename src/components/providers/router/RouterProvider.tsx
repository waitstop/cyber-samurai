import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ErrorPage from "@pages/errorPage/ErrorPage.tsx";
import HomePage from "@pages/home/HomePage.tsx";
import RoadmapPage from "@pages/roadmap/RoadmapPage.tsx";
import TechnologiesPage from "@pages/technologies/TechnologiesPage.tsx";
import SolutionsPage from "@pages/solutions/SolutionsPage.tsx";
import { routesPaths } from "@providers/router/routesPaths.ts";
import NotBitrixPage from "@pages/notBitrix/NotBitrixPage.tsx";
import PainSolutionPage from "@pages/painSolution/PainSolutionPage.tsx";
import RafflePage from "@pages/raffle/RafflePage.tsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RouterProvider = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="*"
          element={<ErrorPage error={new Error("Страница не найдена")} />}
        />
        <Route path={routesPaths.HOME} element={<HomePage />} />
        <Route path={routesPaths.ROADMAP} element={<RoadmapPage />} />
        <Route path={routesPaths.TECHNOLOGIES} element={<TechnologiesPage />} />
        <Route path={routesPaths.SOLUTIONS} element={<SolutionsPage />} />
        <Route path={routesPaths.NOT_BITREX} element={<NotBitrixPage />} />
        {/*<Route path={routesPaths.RAFFLE_APP} element={<RafflePage />} />*/}
        <Route
          path={routesPaths.PAIN_SOLUTIONS}
          element={<PainSolutionPage />}
        />
      </Routes>
    </HashRouter>
  );
};

export default RouterProvider;
