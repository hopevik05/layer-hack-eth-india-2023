import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "../common/components/fallback/loading-page";
import MissingRootRedirect from "../common/components/misc/missing-root-redirect";
import { APP_ROUTES } from "../common/constants";

const LayerHack = React.lazy(() => import("./home"));
const ExplorePage = React.lazy(() => import("./explore"));
const EventsPage = React.lazy(() => import("./events"));

function AppRoutes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={APP_ROUTES.explore}
          element={
            <React.Suspense fallback={<LoadingPage />}>
              <ExplorePage />
            </React.Suspense>
          }
        />
        <Route
          path={APP_ROUTES.events}
          element={
            <React.Suspense fallback={<LoadingPage />}>
              <EventsPage />
            </React.Suspense>
          }
        />
        <Route path="*" element={<MissingRootRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
