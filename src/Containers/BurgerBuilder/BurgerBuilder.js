//Notice that containers will contain the StateFull components while componenets folder will handle the DUMB componenets / StatelLess
import React, { Component } from 'react';
import Aux from '../../hoc/aaux/AAux'
import Burger from '../../Componenets/Burger/Burger'
import BuildControls from '../../Componenets/Burger/BuildControls/BuildControls'
import Modal from '../../Componenets/UI/Modal/Modal'
import OrderSum from '../../Componenets/Burger/OrderSum/OrderSum'
import axios from '../../axios-orders'
import Spinner from '../../Componenets/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHnadler/withErrorHandler'
import Axios from 'axios';

//Capital letters for global const allways
const INGRIENIENT_PRICES = {
    salad: 1,
    cheese: 1.5,
    meat: 1.3, 
    bacon: 0.9
}

class BurgerBuilder extends Component {
    state = { //the actual data we want to change and render evntually, and NOW the goal is to pass this object of props into our burger 
        //the value numbers will effect the atcually visible burger in the html
        //*********Make sure those ingredients is matched with the ingredients we have in the burderingredient.js file in the switch !!!!! */
     ingredients: null,
               purchase: false,
     totalPrice: 4,
     orderBtnClicked: false,
     loading: false,
     error:false
    }

    //for fetching data well use componenetDidMount that allow us to create sideEffect and call http request
    componentDidMount() {
        Axios.get('https://burgerbuilder-460a4.firebaseio.com/ingredients.json')
        .then(resp => {
               this.setState({ingredients: resp.data})
        })
    } 




    //handling the the orderNow Button compare to the amount if ingredients added
    updatepurchase(ingredients) {
  
        //making a copy of the original ingredients, and turn it again into array of keys
       const sum = Object.keys(ingredients).map(ingredientKey => {
           //returning the ingredients with the actual numbers by pointing to the value of the keys
           return ingredients[ingredientKey]
       })
       //now well call reduce ,  in this time to turn the nesetd arrays into a single number array,the sum of all ingreients
       .reduce((sum, element)=>{
           //now here down below the sum is the current sum after the iretation, and the element is the actual number of the value we passed in line 35 as ingredientKey
           return sum + element
       },0) //by inserting 0 , is the begin with number , means if we didnt add any ingredients
       this.setState({purchase: sum >= 0})//here we enable the orderbtn only if the current sum is greater than 0
    }
    
    //the type is for the method to know for which type it need to add, its allready a part of 
     addIngredientHandler = (type) => {
      const oldCount = this.state.ingredients[type]  
      const updateCount = oldCount + 1;
      //disterbute the properties from the old ingredients state into the new object we creating here
      const updateIngredients = {...this.state.ingredients}
      //then we taking the updateIngredients object , access the type , which we have to update the ingredients, and then set the count, the value equal = updateCount
      updateIngredients[type] = updateCount
      //we setting the type here because there is mentrion of the types in all code parts, so the increasing will be specific for each given type added.
      const priceIncrease = INGRIENIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceIncrease
      this.setState({totalPrice: newPrice, ingredients: updateIngredients})
      this.updatepurchase(updateIngredients)

    }
     removeIngredientHandler = (type) => {
const oldCount = this.state.ingredients[type]
if (oldCount <= 0){
    return;
}
const updateCount = oldCount-1;
//disterbute the properties from the old ingredients state into the new object we creating here
const updateIngredients = {
    ...this.state.ingredients
}
//then we taking the updateIngredients object , access the type , which we have to update the ingredients, and then set the count, the value equal = updateCount
updateIngredients[type] = updateCount
//we setting the type here because there is mentrion of the types in all code parts, so the increasing will be specific for each given type added.
const priceDecrease = INGRIENIENT_PRICES[type];
const oldPrice = this.state.totalPrice;
const newPrice = oldPrice - priceDecrease
this.setState({ totalPrice: newPrice, ingredients: updateIngredients});
  if (updateCount === 0) {
        this.state.purchase === !this.state.purchase 

  }
  }

  //handler for the Modal show when click on order button !
   purchaseHandler = ()  => {
      this.setState({orderBtnClicked:true})
  }

  //handler for IF we dont want to continue with the purchase proccess from the Modal
  cancellModalHandler = () => {
      this.setState({ orderBtnClicked: false})
  }

  //handler for IF we DO want to continue with the purchase proccess from the Modal
  //will get fire when the continue button on the OrderSum componenet will be clicked
  continueModalHandler = () => {
      alert('Your Burger Is On The Way!')
      this.setState({loading: true})
      //building the order that will be send to the firebase db
      const order = {
               ingredients: this.state.ingredients, 
               price: this.state.totalPrice, //IN REALTIME E-SHOPS, we allways calculate on the server side!
               customer: {
               name:'Guy Finkelshtein',
               address: {
               street: 'SHAAR-HAGAY 13',
               City: 'haifa'
               },
               email: 'at@at.com'
               },
               deliveryMethod: 'Fastest'
            }

                  //for firebase any endponint we chose must endwith .json
                  //http post request with the order info weve built
                  axios.post('/orders.json', order) 
                  .then(resp => { //stoping the loading when response return
                      this.setState({loading:false})
                      this.setState({orderBtnClicked:false})
                  }).catch(error => { //stoping the loading if error 
                      this.setState({
                 loading: false})
                 this.setState({
                      orderBtnClicked: false
                    })})}

render() {
    //making sure if there is no ingredients to remove , remove button will be disabled by passing disabledInfo to the BuildControls componenet down below as arg
    const disabledInfo = {
        ...this.state.ingredients
    }
    
    //disabledInfo[key] is the value in the ingredients object line 20
    //we checking if the value of one of the ingredients keys is 0, then disabled
    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
    }
     

    let orderSum = null;
    
 
                //here if user indeed press continue, well change loading to true, and set the Spinner as the orderSum variable(watch out its orderSum with small l again... we re - setting it, its not the componenet)
      
         
        //setting the burger as a spinner
        let burger = <Spinner />
        //then checking if there is some ingridents then re-setting burger
        if(this.state.ingredients){
          burger = (
                < Aux > {/* Aux will allow us to put jsx here */}
        <Burger ingredients={this.state.ingredients} />
            <BuildControls 
            showorder={this.purchaseHandler}
            purchase={this.state.purchase} 
            price ={this.state.totalPrice}
            disabledBtn = {disabledInfo}
            addIngredients={this.addIngredientHandler}
            removeIngredients={this.removeIngredientHandler}  />
                    </Aux>
)
    //Adding the re-setting of orderSum to the current if statment, because orderSum also use this.state.ingredients
    orderSum =  /* orderSum will be total Regular IF this.state.loading stays false = means user didnt press continue at the modal.... */
                <OrderSum price={this.state.totalPrice} notcontinue={this.cancellModalHandler} continue={this.continueModalHandler}  ingredients={this.state.ingredients} />;
        }

        //rendering the spinner while press continue
        if (this.state.loading) {
            orderSum = < Spinner />
        }
       
    return (
        //for each components there is a full notes in the actual XX.JS File
        <Aux>
            <Modal modalClosed={this.cancellModalHandler} show={this.state.orderBtnClicked}> 
                 {orderSum}
                 </Modal>
                 {burger}
            
        </Aux>
    );
}
}


//wrapping our BurgerBuilder with WithErrorHandler to catch global errors
export default withErrorHandler(BurgerBuilder, axios)