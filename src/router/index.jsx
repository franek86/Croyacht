import React from "react";
import { Route, Routes } from "react-router-dom";

/* Layouts */
import PublicLayout from "../layouts/PublicLayout";

/* Pages */
import Home from "../pages/Home";
import Boats from "../pages/Boats";
import Destinations from "../pages/Destinations";
import Blog from "../pages/Blog";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path='boats' element={<Boats />} />
        <Route path='destinations' element={<Destinations />} />
        <Route path='blog' element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
