import React,{forwardRef} from 'react';
import inputForm from "./Input.module.css"

const Input = React.forwardRef((props, ref)=> {
  return (
        <>
        <div className={inputForm.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
        </>
  )
});

export default Input;
