import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import Carts from "./Components/Carts/Carts";

function App() {
  const [toggleCart, setToggleCart] = useState(false);

  const cartHandler =()=>{
   return setToggleCart((prev)=>(!prev));
  }

  return (
      <>
    {toggleCart && <Carts cartHandler={cartHandler}/>}
      <Header cartHandler={cartHandler}/>
      <main>
        <Meals/>
      </main>
      </>
  );
}

export default App;
