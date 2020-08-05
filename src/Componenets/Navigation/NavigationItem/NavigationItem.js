import React from 'react'
import classes from './NavigationItem.css'

//props resembles the reference to the active class we want to point out to , and to make the option to wrap our link in this case with the navigationItem componenet with the usage of props.children
const NavigationItem = (props) => (
            <li className={classes.NavigationItem}>
                <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a></li>

)

export default NavigationItem