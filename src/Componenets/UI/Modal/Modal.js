import React,  {Component} from 'react';
import classes from './Modal.css'
import Aux from '../../../hoc/aaux/AAux'
import BackDrop from '../backdrop/backdrop'

//
class modal extends Component {

        //We want to controll the orderSum by changing the way the modal itself update
        //now we want to check and make sure this only update when show (down below) changes
        //like the name of the actual method, lets check when should the components update
        //means just when show arg is true , then update the componenet
        //we making we wont unceccery re-render our modal if its not visible ! there is no sense to do so ! and another thing we get by this structre, is our  wrapping elemnt = Modal Controll our wrapped elemnt = OrderSum ;
    shouldComponentUpdate(nextProps, nextState) {
        //important to know that we added nextProps expression because of the spinner adding , that required a pointing to that not only the nextProps.show updated but also the modal children, the orderSum , which spinner benn added to it.
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
        }
    

     //confirm if its indeed work and check our condition
    componentWillUpdate () {
     console.log(
         ['[Modal] WillUpdate']
     )
    }



    render () {

        return(
        <Aux>
        {/* now we need to point the modalClosed argument to the modal Component, becuase its the components we want to effect on, when clicking the backdrop */}
        <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
  <div className={classes.Modal}
  style={{
      //this syntax means if true after the ? until the : ||||| after the : its if not true.
      //here we checking if props.show is true, in our case, order btn clicked then slide modal from top
      transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: this.props.show ? '1' : '0'
  }}>
      {this.props.children}
  </div>
  </Aux>
  )
    
    
    }
}

export default modal