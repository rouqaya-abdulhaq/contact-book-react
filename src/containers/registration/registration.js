import React from 'react';
import './registration.css';
import Button from '../../components/button/button';

/* should create another state when the user is not regeterd 
it should render sign out */ 
class Registration extends React.Component{
  constructor(){
    super();
    this.state = {
      registered : false
    }
  }

  render(){
     return(
        <div className="registration">
          <Button className='navButton' value="sign in"/>
          <Button className='navButton' value="log in"/>
        </div>
      );
    }
    
}

export default Registration;