import React from "react";
import PizzaLogo from "../Images/Pizza.jpg"

export default function Form(props){


    return(
        <section id="order--page">
            <div class="order--logo--container">
                <div className="order--logo">
                    <h2>Build Your Pizza</h2>
                    <img id="order--logoImg" src={PizzaLogo} alt="Big Pizza"/>
                    <form id="pizza-form">
                        <label>Name
                            <input id="name-input" name="name" value="" placeholder="Name"/>
                        </label>
                        <label>Size
                            <select id="size-dropdown" name="size">
                                <option value="" disabled selected>Select a Size</option>
                                <option value="">Xtra-Large</option>
                                <option value="">Large</option>
                                <option value="">Medium</option>
                                <option value="">Small</option>
                            </select>
                        </label>
                        <label>Toppings
                            <label>Pepperoni
                                <input type="checkbox" value="" name />
                            </label>
                            <label>Ham
                                <input type="checkbox" value="" name />
                            </label>
                            <label>Mushrooms
                                <input type="checkbox" value="" name />
                            </label>
                            <label>Olives
                                <input type="checkbox" value="" name />
                            </label>
                        </label>
                        <label>Special Instructions
                            <textarea  id="special-text" rows="4" cols="50" name="special" value="" placeholder="Anything special?"/>
                        </label>
                        <div className="order-button--container">
                            <button id="order-button">Place Order!</button>
                            </div>
                    </form>
                </div>
            </div>
           
        </section>
    )
}