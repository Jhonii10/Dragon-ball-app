import React from "react";
import { Route, Routes } from "react-router-dom"

import Navbar from "../components/Navbar";
import CharacterScreen from "../pages/CharacterScreen";
import ManScreen from "../pages/ManScreen";
import Search from "../pages/Search";
import WomenScreen from "../pages/WomenScreen";

const AppRouter = () => {

  return (
    <div className='App'>
      <Navbar />

    
        <Routes>
          <Route  path="/mans" element={<ManScreen/>} />
          <Route
            path="/character/:characterId"
            element={<CharacterScreen/>}
          />
          <Route  path="/womans" element={<WomenScreen/>} />
          <Route  path="/search" element={<Search/>} />

          <Route path="/" element={<ManScreen />} />
        </Routes>
    </div>
  );
};

export default AppRouter;