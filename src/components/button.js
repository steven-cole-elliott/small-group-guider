import React from "react"
import buttonStyle from "./button.module.css"

export default ({ children, onClick }) => 
    <button className={buttonStyle.button} onClick={(e) => onClick(e)}>{children}</button>