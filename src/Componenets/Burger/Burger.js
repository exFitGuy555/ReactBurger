import React from 'react'
import classes from './Burger.css'
import Burgeringredient from './BurgerIngridient/BurgerIngridient'


//the actual burger component, which will be a wrapper around all the ingridients compenents
//when we injecting ouR Burgeringredient down below we bringing the ingredients componenets insdie the burger wrapper - this is the connection between burgerIngredients components to here.
const burger = (props) => {
    //green Object is a default object provide by JS ,and its has a keys method that extract the keys from a given Object and  turns that into an array.
    let transformIngredients = Object.keys(props.ingredients) //now we got array of keys and we chain map to it
    .map(ingredientsKey => {
        //... = spread operator and consruct a new array from the Array() from PURE JS
        return [...Array(props.ingredients[ingredientsKey])] //an array of 2 elements [ , ]
        .map((_, i) => { //ingredientsKey means salad,cheese etc , means the keys we got from burgerBuilder.js imported object, that we turned into an array 
          return  <Burgeringredient key={ingredientsKey+i} type={ingredientsKey} /> //here we taking the key , and adding to it the amount we going to recive from the converting phase
        }
    )})
        
    //Without reduce , we getting a main array , that hold inside multiplie arrays containing the ingredient jsx elemetns.
    //for us it will be much more convinient to have one simple array, and inside of it our JSX elemnts.
    //thats why well use reduce , passing to it an array, and element, then map going to run over each and every elements in the array above in line 13, then eventually to return an array , that concatanating each and every elemenmt(Ingredient) and insert it into the empty array
       .reduce((arr, element) => {
           return arr.concat(element)
       }, [])
      //now we can access the fact that the array can be empty, and in that case to reach out to the user and tell him please add ingredients
      if (transformIngredients.length === 0){
        transformIngredients = <p>Please Add Some ingredients</p>
      }

    return(
      <div className={classes.Burger}>
      < Burgeringredient type = "bread-top" />
      {
          transformIngredients
      }
      < Burgeringredient type = "bread-buttom" />
      </div>
    );
}

export default burger;