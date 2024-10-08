import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Components/App.css";
import Home from "./Components/Home";
import CityPage from "./Pages/CityPage";
import AdventureDetail from "./Pages/AdventureDetail";
import Loginpage from "./Pages/Login/Loginpage";
import Registerpage from "./Pages/Register/Registerpage";
import ErrorPage from "./Pages/ErrorPage"; 
import ErrorBoundary from "./Components/ErrorBoundary"; 

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ErrorBoundary>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/reg" element={<Registerpage />} />
            <Route path="/log" element={<Loginpage />} />
            <Route path="/" element={<Home />} />
            <Route path="/:cityId" element={<CityPage />} />
            <Route path="/adventure/:adventureId" element={<AdventureDetail />} />
            <Route path="/error" element={<ErrorPage />} /> 
          </Routes>
        </ErrorBoundary>
      </Router>
    );
  }
}
