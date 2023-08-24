import React from 'react';
import header from "./Header.module.css";
import foodImages from "../../Assets/rumman2.jpg";
import HeaderCard from './HeaderCard';

function Header(props) {
  return (
        <>
        <header className={header.header}>
            <h1>
                Chino's Delight
            </h1>
            <HeaderCard cartHandler={props.cartHandler}/>
        </header>
        <div className={header.mainImage}>
        <img src={foodImages} alt=" food-images" />
        </div>
        </>
  )
}

export default Header
