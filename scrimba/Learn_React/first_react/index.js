import React from "react"
import ReactDom from "react-dom/client";

const navbar = (

    <nav>
        <h1>Bob's Burgers</h1>
        <ul>
            <li>Menu</li>
            <li>Aboutt</li>
            <li>Contact</li>
        </ul>
    </nav>
)

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(navbar)

