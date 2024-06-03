import{ createContext }from 'react';

const CartContext = createContext({
    item:JSON.parse(localStorage.getItem('CartItem')) || [],
    totalAmount: 0,
    addItem: ()=>{},
    removeItem : ()=>{},
    addingItem: ()=>{},
})

export default CartContext


