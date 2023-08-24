import React,{useEffect, useReducer}from 'react';
import CartContext from './CartContext';




const initialState = {
    items: JSON.parse(localStorage.getItem("Carts"))|| [],
    totalAmount:JSON.parse(localStorage.getItem("total"))|| 0,
};
const ReducerFunc=(state, action)=>{
    if(action.type === "ADD"){

        const FindCartIndex = state.items.findIndex(item => item.id === action.item.id);
         const existingCartItem = state.items[FindCartIndex];
        console.log("true amount", state.items)
        const AddTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        let UpdateItems;
        if (existingCartItem){
            console.log("testexisting", existingCartItem.amount)
          const UpdateItem ={
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,
           };

           UpdateItems =[...state.items];
           UpdateItems[FindCartIndex] = UpdateItem;
        }else{
            UpdateItems = [...state.items].concat(action.item);
           
        }
        // console.log("added",AddTotalAmount);
        return{
            items:UpdateItems,
            totalAmount:AddTotalAmount,
        }
       
    }

    if (action.type === "REMOVE") {
        const RemoveItemIndex = state.items.findIndex((item) => item.id === action.id);
        const RemoveItem = state.items[RemoveItemIndex];

        const TotalAmount = state.totalAmount;
        const RemoveItemPrice =RemoveItem.price;
        const RemoveItemAmount = RemoveItem.amount;
        const OldAmountDifference = RemoveItemPrice * RemoveItemAmount;
        const NewAmountDifference = RemoveItemPrice * (RemoveItemAmount -1);
        const NetAmount = OldAmountDifference - NewAmountDifference;
        const DisplayAmount = TotalAmount - NetAmount;

       
        let FilterRemoveItems;
        if (RemoveItem) {
            console.log("removeamount", RemoveItem.amount)
            if (RemoveItem.amount === 1) {
                FilterRemoveItems = state.items.filter((item) => item.id !== RemoveItem.id);
            } else {
                FilterRemoveItems = state.items.map((item) => {
                    if (item.id === action.id) {
                        return { ...item, amount: item.amount - 1 };
                    }
                    return item;
                });
            }
        }        
        return {
          items: FilterRemoveItems,
          totalAmount: DisplayAmount
        };
      }
      if(action.type === "ADDING"){
        const AddBackIndex = state.items.findIndex((item) => item.id === action.id);
        const AddBackItem =state.items[AddBackIndex];
        const TotalAmount = state.totalAmount;
        const AddBackPrice = AddBackItem.price;
        const AddBackAmount = AddBackItem.amount;
        const OldAmountDifference = AddBackPrice * AddBackAmount;
        const NewAmountDifference =AddBackPrice * (AddBackAmount +1);
        const NetDifference = NewAmountDifference - OldAmountDifference;
        const DisplayAmount = TotalAmount + NetDifference
        let UpdateBack;
        if(AddBackItem){
            console.log("ADDamount", AddBackAmount)
            const UpdateBackItem ={
                ...AddBackItem,
                amount: AddBackItem.amount + 1
            };
            UpdateBack=[...state.items];
            UpdateBack[AddBackIndex] = UpdateBackItem
        }else{
            console.log("O ti lor")
        }

        return{
            items: UpdateBack,
            totalAmount: DisplayAmount,
        }

      }
      
    return initialState;
}



function CartProvider( props ) {

    const [CartState, dispatchAction]= useReducer(ReducerFunc,initialState);

   useEffect(()=>{
    localStorage.setItem("Carts",JSON.stringify(CartState.items));
    localStorage.setItem("total",JSON.stringify(CartState.totalAmount));
   },[CartState.items, CartState.totalAmount])

    const AddHandler=(item)=>{
        dispatchAction({type:"ADD", item:item})
    };
    const removeHandler =(id)=>{
        dispatchAction({type:"REMOVE", id:id})
    };
    const AdditionalHandler =(id)=>{
        dispatchAction({type:"ADDING", id:id})
    }
    const CartContet = {
        item: CartState.items,
        totalAmount:CartState.totalAmount,
        addItem: AddHandler,
        removeItem: removeHandler,
        addingItem:AdditionalHandler,
    }
  return (
        <>
        <CartContext.Provider value={CartContet}>
            {props.children}
        </CartContext.Provider>
        </>
  )
}

export default CartProvider
