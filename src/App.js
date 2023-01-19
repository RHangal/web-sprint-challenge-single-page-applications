import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { Route } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <>
  <Header/>
  
  <Route path="/">
    <Homepage />
  </Route>
  
    </>
  );
};
export default App;
