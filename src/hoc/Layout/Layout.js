import React,{Component} from 'react';
import Aux from '../aaux/AAux'
import classes from './Layout.css'
import Toolbar from '../../Componenets/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../Componenets/Navigation/SideDrawer/SideDrawer'

//there is a requirements of wrapping everything with a root elemnt , here we wrapping it with the auxiliary component 
class Layout extends Component {
    state = {
        showSide:true
    }

    sideDrawerHandler = () => {
        this.setState({showSide:false})
    }
     
    //if showSide (from line above) is true, it will become false ==> by clicking , so we going to active it by click so hold on....
    //using prevState is the clean way to setting the old state and not confronts errors
    //all leads to the option of pressing on MENU , then toggle the sideDrawer from the side and then click again on the BackDrop and toggle it outside of the frame
    toggleHandler = () => {
        this.setState( (prevState) => {
            return {showSide: !prevState.toggleHandler};
    });
}

    render() {
    return (   
    <Aux>
        {/* passing the ToggleClicked to the toolbar file */}
        <Toolbar ToggleClicked={this.toggleHandler}  />
        < SideDrawer open={this.state.showSide}  closed={this.sideDrawerHandler}/>
    <main className={classes.Content}>
        {this.props.children}
    </main>
    </Aux>
)}}
 

export default Layout;

