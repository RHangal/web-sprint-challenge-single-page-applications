import React from "react";
import PizzaLogo from "../Images/Pizza.jpg"

export default function Form(props){
    const {values, change, disabled, errors} = props;

    const onChange = evt =>{
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
} 

    return(
        <section id="order--page">
            <div className="order--logo--container">
                <div className="order--logo">
                    <h2>Build Your Pizza</h2>
                    <img id="order--logoImg" src={PizzaLogo} alt="Big Pizza"/>
                    <form id="pizza-form">
                        <label>Name
                            <input id="name-input" onChange={onChange} name="name" value={values.name} placeholder="Name"/>
                        </label>
                        <label>Size
                            <select id="size-dropdown" onChange={onChange} name="size" value={values.size}>
                                <option value="" disabled>Select a Size</option>
                                <option value="xtra-large">Xtra-Large</option>
                                <option value="large">Large</option>
                                <option value="medium">Medium</option>
                                <option value="small">Small</option>
                            </select>
                        </label>
                        <label>Toppings
                            <label>Pepperoni
                                <input type="checkbox"  onChange={onChange} name='pepperoni' value={values.pepperoni} />
                            </label>
                            <label>Ham
                                <input type="checkbox"  onChange={onChange} name='ham' value={values.ham} />
                            </label>
                            <label>Mushrooms
                                <input type="checkbox" onChange={onChange} name='mushrooms' value={values.mushrooms}/>
                            </label>
                            <label>Olives
                                <input type="checkbox"  onChange={onChange} name='olives' value={values.olives}/>
                            </label>
                        </label>
                        <label>Special Instructions
                            <textarea  id="special-text" rows="4" cols="50" onChange={onChange} name="special" value={values.special} placeholder="Anything special?"/>
                        </label>
                        <div className="order-button--container">
                            <button id="order-button" disabled={disabled} >Place Order!</button>
                            </div>
                    </form>
                </div>
            </div>
           
        </section>
    )
}