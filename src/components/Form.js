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
                        <label>Name</label>
                        <label>Size</label>
                        <label>Toppings</label>
                        <label>Special Instructions</label>

                    </form>
                </div>
            </div>
           
        </section>
    )
}