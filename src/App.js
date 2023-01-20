import React, { useState } from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Form from "./components/Form";
import { Route } from "react-router-dom";
import * as yup from "yup";
import schema from "./Validation/formSchema";
import "./App.css";

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  ham: false,
  mushrooms: false,
  olives: false,
  special: '',
};

const initialFormErrors = {
  name: '',
  size: '',
  special: '',
}

const initialDisabled = true;




const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ""}))
    .catch(err =>setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) =>{
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  return (
    <>
  <Header/>
  
  <Route exact path="/">
    <Homepage />
  </Route>

  <Route exact path ="/pizza">
    <Form 
    values={formValues}
    change={inputChange}
    disabled={disabled}
    />
  </Route>


    </>
  );
};
export default App;
