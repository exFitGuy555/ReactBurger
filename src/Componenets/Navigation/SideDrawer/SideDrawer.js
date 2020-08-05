import React from 'react'
import Logo from '../../LOGO/LOGO'
import NavigationItems from '../NavigationItems/Navigationitems'
import BackDrop from '../../UI/backdrop/backdrop'
import Aux from '../../../hoc/aaux/AAux'
import classes from './SideDrawrer.css'

//we use { } because we want to condittioanlly ask to change css classes , or any other case in need to put some logic before returning something from the functionall componenet.
const Sidedrawer = (props) => {
    //this entire logic code will grab the css Open and Closed classes, and will place them with the SideDrawer class in an array, the condition means ,if the props.open is set to true, so then the classes.Open + SideDrawer will be placed in the className arg, and its important to remember css classes need to be a STRING this is why im adding join (' ') below.
    let AttachClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        AttachClasses = 
                [classes.SideDrawer,classes.Open]
    }
    return (
        <Aux>
            {/* show comes as an boolean arg that means default true, means the backdrop will be shown */}
            {/* we can see the clicked arg that coming from the BackDrop js file, and also we see that we connected it to the closed method that coming from the Layout js file , where there its pointing to a method telling that show the paralell variabele named showSide, to become false. 
            ALSO we cans see weve put props.open in our show arg , which this entire sentece will hold the boolean value that will decide if the sidebar should be open or not.   */}
        <BackDrop show={props.open} clicked={props.closed} />
        <div div className = {
            AttachClasses.join(' ')
        } >
           <Logo height="11%" className={classes.Logo} />
           <nav>
             <NavigationItems />
           </nav>

        </div>
        </Aux>
    )
    
};

export default Sidedrawer