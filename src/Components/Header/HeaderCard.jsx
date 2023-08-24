import React, { useContext, useEffect, useState } from 'react';
import CartIcon from "../Carts/CartIcon";
import headerCard from "./HeaderCard.module.css";
import CartContext from '../../Store/CartContext';

function HeaderCard(props) {
  const CartCtx = useContext(CartContext);
const [buttonisHighLighted , setButtonIsHighLighted] = useState(false);
const dumpButton = `${headerCard.button} ${buttonisHighLighted ? headerCard.bump: " "}`;

const {item}= CartCtx;



useEffect(()=>{
  
  if(CartCtx.item.length === 0){
    return;
  }
  else{
    setButtonIsHighLighted(true);
    setTimeout(()=>{
      setButtonIsHighLighted(false);
    }, 300)
  };
},[item]);




  const TotalListOfItems = item.reduce((curNum, item) => {
    return curNum + item.amount;
}, 0);

  return (
        <>
        <button className={dumpButton} onClick={props.cartHandler} >
            <span className={headerCard.icon}>
            <CartIcon/>
            </span>
            <span>your cart</span>
            <span className={headerCard.badge}>{TotalListOfItems}</span>
        </button>
        
        </>
  )
}

export default HeaderCard
