import React, { useState } from "react";
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
import BasicInfo from "./sections/BasicInfo/BasicInfo";
import Work from "./sections/Work/Work";

function App() {
  return (
    <div className="App">
      <BasicInfo />
      <Work />
    </div>

  );
}

export default App;
