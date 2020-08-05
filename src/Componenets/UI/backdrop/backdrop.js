import React from 'react'
import classes from './backdrop.css'

//handling the back droping of the modal coming up from pressing order Button
//props getting the .show argument from the Modal component from burgerBuilder js
const BackDrop = (props) => (
    //by conecting the css to the backdrop will get entire light dark screen as tells us there is diffrenet layers, and we can focus on the modal.
    //then we need to create the abillity to click on the backdrop and exit the modal focus
    //the .clicked need to be connected to the actual main componenet its sitting in , in our case, Modal.js , at the BackDrop Children Component.
 props.show ? <div onClick={props.clicked} className={classes.Backdrop}></div> : null
)

export default BackDrop