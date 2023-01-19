import React from "react";
import { Link } from "react-router-dom";

export default function Header(props){


    return(
        <header>
            <nav id="nav">
                <div className="nav--title">
                    <h1>Bloom Eats</h1>
                </div>
                <div className="navBtn--container">
                    <Link to="/">
                        <button className="nav--btn">Home</button>
                    </Link>
                    <button className="nav--btn">Help</button>
                </div>
            </nav>
        </header>
    )
}