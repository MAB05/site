import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./Components/Navibar";
import BOS from "./Components/BOS";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Animal from "./Components/Animal";
import RLink from "./Components/RLink";

function App() {
  return (
    <>
      <Navibar></Navibar>
      <BOS></BOS>
      <Cards></Cards>
      <Animal></Animal>
      <RLink></RLink>
      <Footer></Footer>
    </>
  );
}

export default App;
