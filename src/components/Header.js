import React from "react"
import logo from "./myLogo.svg"

export default function Header() {
    return (
        <nav>
            <img src={logo} className="nav--logo" alt="logo"></img>
            <p>my travel journal.</p>
        </nav>
    )
}