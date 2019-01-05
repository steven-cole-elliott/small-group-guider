import React from "react"
import Card from "./card.js"
import cardListStyles from "./card-list.module.css"

export default ({cardItems}) => {
    const createCards = () => {
        return cardItems.map((cardItem) => [
            <Card {...cardItem} />
        ]);
    }
    return (<div className={cardListStyles.cardList}>
        {createCards()}
    </div>);
}