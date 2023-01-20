import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Form from "./components/Form";
import { Route } from "react-router-dom";
import * as yup from "yup";
import schema from "./Validation/formSchema";
import "./App.css";
import axios from "axios";

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

const initialOrder = []
const initialDisabled = true;




const App = () => {

  const [order, setOrder] = useState(initialOrder)
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


  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/users", newOrder)
    .then(res =>{
      console.log(res.data)
      setOrder([res.data,...order])
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  };
  

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      pepperoni: formValues.pepperoni,
      ham: formValues.ham,
      mushrooms: formValues.mushrooms,
      olives: formValues.olives,
      special: formValues.special.trim(),
    }
    postNewOrder(newOrder);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
   },[formValues]);

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
    submit={formSubmit}
    errors={formErrors}
    />
  </Route>


    </>
  );
};
export default App;
