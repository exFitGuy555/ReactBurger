import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../../Componenets/LOGO/LOGO'
import NavigationItems from '../NavigationItems/Navigationitems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const Toolbar = (props) => (
<header className={classes.Toolbar}>
   <DrawerToggle clicked={props.ToggleClicked} />
   <Logo height="80%" />
   <nav  className = {
       classes.DesktopOnly
   } >
          < NavigationItems />

    </nav>
</header>
)

export default Toolbar;

