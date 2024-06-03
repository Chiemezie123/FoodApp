import React, { useContext } from 'react';
import carts from "./carts.module.css";
import Modal  from '../UI/Modal';
import CartContext from '../../Store/CartContext';
import CartItems from './CartItems';

function Carts(props) {
    const CartCtx = useContext(CartContext);

    // const GetStorage = JSON.parse(localStorage.getItem('CartStorage'));
   
    // const CartItems = (
    //     <ul>
    //         {[{name:"sushi", id:"1", amount: 2, price: 12.99}].map((item)=> (<li>{item.name}</li>))}
    //     </ul>
    // )
  return (
            <Modal>
            <div className={carts['cart-items']}>
            <CartItems Cartprops ={CartCtx.item}/>
            <div className={carts.total}>
                <span>Total amount</span>
                <span>{`$${CartCtx.totalAmount.toFixed(2)}`}</span>
            </div>
            <div className={carts.actions}>
                <button className={carts.buttonAlt} onClick={props.cartHandler}>Close</button>
                <button className={carts.button}>Order</button>
            </div>
            </div>
            </Modal>
  )
}

export default Carts
