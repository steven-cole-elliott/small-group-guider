import React from "react"
import cardStyles from "./card.module.css"

export default ({key, title, content, actionTitle, onClick}) => 
    <div key={key} className={cardStyles.card}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div>
            <button onClick={(e) => onClick(e)}>{actionTitle}</button>
        </div>
    </div>