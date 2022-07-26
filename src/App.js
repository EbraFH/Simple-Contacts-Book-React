/***************
 * IMPORT LIBRARIES
 ***************/

import React from "react";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

/***************
 * CREATE REACT COMPONENT
 ***************/

function App() {
  const date = new Date();
  const year = date.getFullYear();
  const creators = "suliman mohammad & fahamne ebraheem";
  return (
    <>
      <Header title="Phone Book" />
      <Main />
      <Footer year={year} creators={creators} />
    </>
  );
}
export default App;
