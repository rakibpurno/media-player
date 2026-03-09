import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";

import LandingPage from "./Pages/LandingPage";
import Watch from "./Pages/Watch";
import Owner from "./Pages/Owner";

function App() {

  return (

    <Router>

      <MainLayout>

        <Routes>

          <Route path="/" element={<LandingPage />} />

          <Route path="/watch/:id" element={<Watch />} />

          <Route path="/owner" element={<Owner />} />

        </Routes>

      </MainLayout>

    </Router>

  );

}

export default App;