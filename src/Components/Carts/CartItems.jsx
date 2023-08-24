import classes from './CartItems.module.css';
import CartContext from '../../Store/CartContext';
import { useContext } from 'react';

const CartItems = ({Cartprops}) => {

    const CartCtx = useContext(CartContext);

    

    const removeCartFunc =(id )=>{
        CartCtx.removeItem(id);
        console.log("working right",id)
    }

    const AddingCartFunc =(item)=>{
        CartCtx.addItem({...item, amount : 1});
    }
    const newAddingItem =(id)=>{
        CartCtx.addingItem(id)
    }
  return (
        <>
        
        {Cartprops.map((item)=>{
            return(
                <li className={classes['cart-item']} key={item.id}>
                <div>
                <h2>{item.name}</h2>
                <div className={classes.summary}>
                <span className={classes.price}>{item.price.toFixed(2)}</span>
                <span className={classes.amount}>x {item.amount}</span>
                </div>
                </div>
                <div className={classes.actions}>
                    <button onClick={()=>{removeCartFunc(item.id)}}>−</button>
                    <button onClick={()=>{newAddingItem(item.id)}}>+</button>
                </div>
                </li>
            )
        })}
        </>
  );
};

export default CartItems;
