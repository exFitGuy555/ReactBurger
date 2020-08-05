import React from 'react'
import classes from './BuildControl.css'

const BuildControl = (props) => (
    <div class={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div >
        {/* props added comes from the BuildControls.js that trigger  the add method itself */}
        <button className={classes.More} onClick={props.added} >Add</button>
        {/*pay attention in the disabled arg , we pointing to the BuildControls.js disabled arg, which from there there is a pointing to burgerBuilder and the method itself  */}
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled} >Remove</button>
    </div>
)



export default BuildControl