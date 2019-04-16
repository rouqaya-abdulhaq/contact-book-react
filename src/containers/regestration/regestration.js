import React from 'react';
import './regestration.css';
import Button from '../../components/button/button';

/* should create another state when the user is not regeterd 
it should render sign out */ 
class Regestration extends React.Component{
  constructor(){
    super();
    this.state = {
      regesterd : false
    }
  }

    render(){
      return(
        <div>
          <Button className='navButton' value="sign in"/>
          <Button className='navButton' value="log in"/>
        </div>
      );
    }
}

export default Regestration;