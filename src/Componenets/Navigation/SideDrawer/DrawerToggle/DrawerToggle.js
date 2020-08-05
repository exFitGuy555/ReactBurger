import React from 'react'
import classes from './DrawerToggle.css'



const DrawerToggle = (props) => (
    //clicked event listenr coming from the toolbar js file 
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)


export default DrawerToggle