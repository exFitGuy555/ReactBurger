import React, {Component} from 'react'
import Aux from '../../../hoc/aaux/AAux'
import Button from '../../UI/Button/Button'


//REMEMBER ALLWAYS CAPITAL LETTER FIRST!
class OrderSum extends Component  {
     //we can change this into functional components

       //show our console log when components did update ! - part of lifecycle
      componentDidUpdate() {
         console.log('[Order Summary] Will Update ');
      }
       

      render () {

         //for be able to dynamically render the ingredients into the ul below,calling a variable that going to get the ingredients object, yet again will need to convert it into array
    //ingredients coming from burgerBuilder js
    const ingredientsSum = Object.keys(this.props.ingredients)
    .map(ingredientsKey => {
        //after convert it into array we map through the array, then we pulling the actual keys as ingredientsKey, and by calling ingredients[ingredientsKey] we extract the number of the key AND create by that our desiarble list
        //we span the ingredientsKey for capitalize propuse
        //double {{}} for js object
        return (
        <li key={ingredientsKey}><span style={{textTransform: 'capitalize'}}>{ingredientsKey}</span> {this.props.ingredients[ingredientsKey]} </li>);
    }); 

       return(      
       <Aux>
        <h3>Your Order</h3>
        <p>A delicious Burger with fillowing ingredients:</p>
        <ul>
         {
             ingredientsSum
         }
         
        </ul>
        {/* we will adress the total price summary by getting a price arg from burgerBuilder orderSum componenets, that will addresss the this.state.totalPrice  */}
        <p>Total Price: {this.props.price.toFixed(2)}</p>
        <p>continue to Checkout</p>
        {/* btnType is a class, coming from the button js file */}
        <Button clicked={this.props.notcontinue}  btnType="Danger">Cancel</Button>
        <Button clicked={this.props.continue} btnType="Success">Submit Order!</Button>
        </Aux>
        
        )
      }
    }
   
export default OrderSum ;