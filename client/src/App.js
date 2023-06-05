import React from "react";
import { Routes } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Navbar />
        <AuthPage />
      </Routes>
    </div>
  );
}

export default App;
