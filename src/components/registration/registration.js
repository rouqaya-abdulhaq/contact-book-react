import React from 'react';
import Button from '../button/button';

class Registration extends React.Component{
  

  render(){
     return(
        <div className="registartion">
          <Button className='navButton' value="sign in"/>
          <Button className='navButton' value="log in"/>
        </div>
      );
    }
    
}

export default Registration;