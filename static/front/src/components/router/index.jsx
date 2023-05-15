import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {About} from "../pages/About";
import {Blog} from "../pages/Blog";
import {Home} from "../pages/Home";
import NoPage from "../pages/404";
import Layout from "../pages/Layout";
import {GridMovies} from "../Component"

export function TestBar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="About" element={<About />} />
          <Route path="Movies" element={<GridMovies />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
