import React from "react";
//import logo from "./logo.svg";
import "./App.css";
// import Button from "./components/Button";
// import Label from "./components/Label";
// import Text from "./components/Text";
// import Dropdown from "./components/Dropdown";
// import RadioButton from "./components/RadioButton";
// import Img from "./components/Img";
// import HeroImage from "./components/HeroImage";
// import Card from "./components/Card";
// import Table from "./components/Table";
// import TableHeader from "./components/Table/TableHeader";
// import TableRow from "./components/Table/TableRow";
// import TableCell from "./components/Table/TableCell";
// import TableFooter from "./components/Table/TableFooter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import BasicInfo from "./sections/BasicInfo/BasicInfo";
import Skills from "./sections/Skills/Skills";
import Work from "./sections/Work/Work";
import Resources from "./sections/Resources/Resources";
import DeveloperSetup from "./sections/DevSetup/DevSetup";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<BasicInfo />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/developer-setup" element={<DeveloperSetup />} />
      </Routes>
    </Router>
  );
}

export default App;
