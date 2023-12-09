import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "../common/components/fallback/loading-page";
import MissingRootRedirect from "../common/components/misc/missing-root-redirect";
import { APP_ROUTES } from "../common/constants";

const LayerHack = React.lazy(() => import("./home"));

function AppRoutes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={APP_ROUTES.home}
          element={
            <React.Suspense fallback={<LoadingPage />}>
              <LayerHack />
            </React.Suspense>
          }
        />
        <Route path="*" element={<MissingRootRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
