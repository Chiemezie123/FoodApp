import React,{useContext, useEffect} from 'react';
import mealItem from "./MealItems.module.css";
import MealInput from './MealInput';
import CartContext from '../../../Store/CartContext';

function MealItems(props) {
  const CardCtx = useContext(CartContext);
const {item }= CardCtx;

  useEffect(()=>{
    localStorage.setItem('CartItem', JSON.stringify(item));
},[item]);


  
  const addToCart =(amount)=>{
      CardCtx.addItem({
        id: props.id,
        amount: amount,
        price: props.price,
        name: props.name,

      })
      console.log("checks this")
  }
  return (
    <li className={mealItem.meal} key={props.id}>
        <div >
            <h3>{props.name}</h3>
            <div className={mealItem.description}>{props.description}</div>
            <div className={mealItem.price}>{`$ ${props.price.toFixed(2)}`}</div>
        </div>
        <div>
        <MealInput  addToCart={addToCart} id={props.id}/>
        </div>
    </li>
  )
}

export default MealItems
