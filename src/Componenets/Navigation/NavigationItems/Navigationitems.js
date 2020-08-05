import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItem/NavigationItem'

const NavigationItems = () => (
    //notice that the link arg comes from the navigationItem js file, were we set we an wrap our content of desiarable a link with the navigationItem, and the active arg comes to point to the css classes , in that case that the props.active that placed in the NavigationItem component is True, for the BurgerBuilder link
    //notice we dont recieving any outsource data thats why there is no props property
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active={true} >BurgerBuilder</NavigationItem>
        <NavigationItem link="/" >CheckOut</NavigationItem>
    </ul>
)

export default NavigationItems