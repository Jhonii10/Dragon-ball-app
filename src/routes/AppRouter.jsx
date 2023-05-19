import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom"

import Navbar from "../components/Navbar";

const ManScreen = lazy(() => import("../pages/ManScreen"));
const WomenScreen = lazy(() => import("../pages/WomenScreen"));
const Search = lazy(() => import("../pages/Search"));
const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));

const AppRouter = () => {

  return (
    <div className='App'>
    <Suspense fallback={<div className="spinner-container"><div className="spinner"></div></div>}>
      <Navbar />

    
        <Routes>
          <Route  path="/mans" element={<ManScreen/>} />
          <Route
            path="/character/:characterId"
            element={<CharacterScreen/>}
          />
          <Route  path="/womans" element={<WomenScreen/>} />
          <Route  path="/search" element={<Search/>} />

          <Route element={<Navigate to='/mans'/>} />
        </Routes>
        </Suspense>
    </div>
  );
};

export default AppRouter;