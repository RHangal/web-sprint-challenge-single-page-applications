import React from "react";
import { Link } from "react-router-dom";


export default function Homepage(props){
    return(
        <section id="homepage">
        <div className="pizza--container">
            <div className="pizza--logo">
                <h2>Your Favorite Food Delivered While Coding</h2>
                <Link to="/pizza">
                    <button id="order-pizza">Order Now!</button>
                </Link>
            </div>
        </div>
        </section>
    )
}