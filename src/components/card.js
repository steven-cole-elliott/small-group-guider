import React from "react"
// import { Link } from "gatsby"
import Button from "./button.js"
import cardStyles from "./card.module.css"

export default ({key, title, content, actionTitle, link, onClick}) => 
    <div key={key} className={cardStyles.card}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className={cardStyles.cardFooter}>
            <Button onClick={(e) => onClick(e)}>{actionTitle}</Button>
            {/*<Link className to={link}>{actionTitle}</Link>*/}
        </div>
    </div>