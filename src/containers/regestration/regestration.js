import React from 'react';
import './regestration.css';
import Button from '../../components/button/button';

/* should split this into sign in component sign out component and log
in component and then make this a sperate button component*/ 
const Regestration = (props)=>{
    return(
        <div>
          <Button className='navButton' value="sign in"/>
          <Button className='navButton' value="log in"/>
        </div>
    );

}

export default Regestration;