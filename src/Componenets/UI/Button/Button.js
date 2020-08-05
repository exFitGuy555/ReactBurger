import React from 'react'
import classes from './Button.css'

const Button = (props) => (

    //we putting an array because we want to decide if beside the Button class that will allways be pass in, well set condittioanlly if the Success class or the danger class will be pass in
    //btnType will be either Success nor danger
    //when passing some classnames into class arg it has to be string, thats why we add the join() to that array to convert it into string so we get a list of classes
    //we getting the clicked arg form the OrderSum compomnent that holds down the 2 methods for continue or not from the modal that we recived by pressing order button
    <button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
)


export default Button