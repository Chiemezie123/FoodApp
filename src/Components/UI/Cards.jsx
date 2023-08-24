import React from 'react';
import cards from "./Cards.module.css"

function Cards(props) {
  return (
    <div className={cards.card}>
      {props.children}
    </div>
  )
}

export default Cards
