import React from "react"
import Card from "./card.js"
import cardGridStyles from "./card-grid.module.css"

export default ({cardItems}) => {
    const createCards = () => {
        return cardItems.map((cardItem) => [
            <Card {...cardItem} />
        ]);
    }
    return (<div className={cardGridStyles.cardGrid}>
        {createCards()}
    </div>);
}