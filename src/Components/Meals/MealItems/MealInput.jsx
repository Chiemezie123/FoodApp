import React, { useRef, useState } from 'react';
import form from './MealInput.module.css'
import Input from '../../UI/Input';

function MealInput(props) {
    const [amountValid, setAmountValid] = useState(true);

    const AmountInputRef =useRef();

    const submitMealHandler=(e)=>{
        e.preventDefault();
        const AmountInputValue = AmountInputRef.current.value;
        const AmountNumber = +AmountInputValue;
        if(AmountNumber === 0 ||AmountInputValue > 5 || AmountInputValue < 0){
            setAmountValid(false);
            return;
        }else{
            props.addToCart(AmountNumber);
            console.log(AmountNumber);
        }
    }
  return (
        <>
        <form className={ form.form} onSubmit={submitMealHandler}>

         <Input label="amount" ref={AmountInputRef} input={{
          
            id:"amount" + props.id,
            type:"number",
            min:"1",
            max:"5",
            step:"1",
            defaultValue:"0",

         }}/>
            <button> + add</button>
            {!amountValid && <p> please enter a valid input 1-5 </p>}
        </form>
        </>
  )
}

export default MealInput
