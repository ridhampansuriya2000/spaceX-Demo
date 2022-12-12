import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import navConfig from "./Layout/CommonLayout/NavConfig";
const PrivateRoute = lazy(() => import("Layout/PrivateRoute"));
const NotFound = lazy(() => import("screen/Auth/NotFound"));
const InternalError = lazy(() => import("screen/Auth/InternalServerError"));

const AppRoutes = () => {
  const loading = (
    <div className="mesh-loader">
      <div className="set-one">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="set-two">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
  return (
    <React.Suspense fallback={loading}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/500" element={<InternalError />} />
        {/*<Route path="/" element={<PrivateRoute component={Dashboard} />} />*/}
        {/*<Route path="/home" element={<PrivateRoute component={Home} />} />*/}

      </Routes>
      <PrivateRoute navConfig={navConfig} />
    </React.Suspense>
  );
};

export default AppRoutes;
