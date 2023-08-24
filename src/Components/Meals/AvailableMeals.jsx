import React from 'react';
import availableMeals from "./AvailableMeals.module.css";
import MealItems from './MealItems/MealItems';
import Cards from '../UI/Cards';
import { nanoid } from 'nanoid'

const DUMMY_MEALS = [
    {
      id: "m1",
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: "m2",
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: "m3",
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: "m4",
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
function AvailableMeals() {

    const MealList = DUMMY_MEALS.map((meals)=>{
      return <MealItems
       id={meals.id} 
       name={meals.name} 
       description={meals.description}
        price={meals.price}
        />
    })
  return (
        <Cards>
            <section className={availableMeals.meals}>
            <ul>
            {MealList}
            </ul>
           </section>
        </Cards>
  )
}

export default AvailableMeals
