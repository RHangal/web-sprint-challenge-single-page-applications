import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Form from "./components/Form";
import { Route } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <>
  <Header/>
  
  <Route exact path="/">
    <Homepage />
  </Route>

  <Route exact path ="/pizza">
    <Form />
  </Route>


    </>
  );
};
export default App;
