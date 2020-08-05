import React, {Component} from 'react'
import classes from './BurgerIngridient.css'
import PropTypes from 'prop-types'

//curly braces because we need to add some logic to render the jsx code that will help us to render the diffrent types of ingrideients
class Burgeringredient extends Component {
render(){
        let ingredient = null;

//type is a property i expect to recieve from app 
//adding this. to props.type because of the Class
   switch(this.props.type) {
    case ('bread-buttom'):
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
        case('bread-top'): 
        ingredient = (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
        );
        break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>;
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>;
            break;
            default: 
            ingredient = null;
   }

   return ingredient;
          
}
}

//Validate the propType we going to reciecve with prop-types package , the . after the PropTypes in line 45 , means the type need to be string, and it is required
//if we ever try to use the ingrienient componenet without passing a type well get error
Burgeringredient.prototypes = {
    type: PropTypes.string.isRequired
}

export default Burgeringredient;