import React, {Component} from 'react';
import Modal from '../../Componenets/UI/Modal/Modal'
import Aux from '../aaux/AAux'

const withErrorHandler = (WrappedComponent, Axios) => {
   return class extends Component  {
state = {
    showError: null
}
    componentDidMount() { 
this.requestIt = Axios.interceptors.request.use( req => {
    this.setState({showError: null})
    //must allways return the req for it to be able to continue !
    return req
})

//res=> res its a shorcut for implemanting the res and then return it back
this.responseIt = Axios.interceptors.response.use(res => res,error => {
    this.setState({showError: error})
})
    }

    //we can use the withErrorHandler HOC on many components , but we dont want components and other lifecycle will be fired for every componenet get wrapped by withErrorHandling HOC , so according to that to remouve old interceptors we using the .eject method , that will take as an argument , those interceptors we want to delete , in a shape of a variable well place those interceptors inside of that variable.
    componentWillUnmount(){
Axios.interceptors.request.eject(this.requestIt)
Axios.interceptors.response.eject(this.responseIt)
    }

    //cleaning the error =======> part of backdrop hiding need to be fixed****************
     errorConfirmedHandler = () => {
            this.setState({showError: null});
        }

       render() {
           return (  
           <Aux>
               <Modal 
               //here we making sure when clicking on the modal errors will go away visibility wize, and also show the modal only if there is no error....(when showError = null)
               //modalClosed is the method we execute to clise the modal while pressing on the backdrop
               modalClosed={this.errorConfirmedHandler}
               show={this.state.showError} >
                   {/* below we checking only if showError its not null show message */}
                     {this.state.showError ? this.state.showError.message : null}
               </Modal>
           <WrappedComponent {...this.props} /> {/* getting all the props of burgerBuilder and everyhting under it */}
           </Aux>)
       }
   }
} 
 

export default withErrorHandler