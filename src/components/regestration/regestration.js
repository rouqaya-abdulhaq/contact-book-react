import React from 'react';
import './regestration.css';
import Button from '../button/button';

/* should split this into sign in component sign out component and log
in component and then make this a sperate button component*/ 
const Regestration = (props)=>{
    return(
        <div>
          <Button className='navButton' value="sign out"/>
        </div>
    );

}

export default Regestration;