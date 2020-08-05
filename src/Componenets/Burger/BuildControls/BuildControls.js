import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
//array which we can loop through all the controls and render them
//types must be identical to the types we checking in burgerIngredients componenets, in the switch statement
const controls = [
  {lable: 'Salad', type:'salad'},
  {lable: 'Meat', type:'meat'},
  {lable: 'Cheese', type:'cheese'},
  {lable: 'Bacon', type:'bacon'},
]

//it make sense to outsource the buildControls because its not only one button , and its actually a re-usable UI compeneets ==> there for well created the BuildControl folder&file - as a unit
const BuildControls = (props) => (
 <div className={classes.BuildControls}>
     {/* the props.price is connected to the burger builder this.state.totalPrice and we allready set the ingredients prices in INGRIENIENT_PRICES object, and se the entire calculation progress and assamble in burgerBuilder Line 38 */}
     <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
     {/* pay attention we puttin a ( ) after the => in the map method, becuse we want to render an element and not just implement login also the key can be the label because there is no specific label more than once*/}
   {controls.map(control => (
       <BuildControl key={control.label} 
       label={control.label}
       //here we executing the props.addIngredients which lead to the this.state.addIngredientHandler,which there im expecting to get the type as an argument(from burgerbuilder line 29)  and by passing the control.type as an argument here,we telling him to on which ingridient to fire the method.
       added={() => props.addIngredients(control.type)} 
       removed={() => props.removeIngredients(control.type)}
       //we calling a new arg disabled, then passing the disabledBtn arg from burgerbuilder and letting it the control.type to be specific in the definition of which ingridient is reach 0, and now remove button is disabled
       disabled={props.disabledBtn[control.type]}/>

   ))}
   <button 
   onClick={props.showorder} 
   disabled={!props.purchase}
   className={classes.OrderButton}>Order Now</button>
 </div>
);

export default BuildControls;