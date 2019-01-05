import React from "react"
import Button from "../components/button";
import { navigate } from "gatsby"

export default ({title, goBackTo}) => 
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <h1>{title}</h1>
        <Button onClick={(e) => navigate(goBackTo)}>BACK</Button>
    </div>