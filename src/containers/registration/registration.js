import React from 'react';
import './registration.css';
import Button from '../../components/button/button';


class Registration extends React.Component {
    constructor(){
        super();
        this.state = {
            isRregistered : true
        }
    }

    render(){
      if(this.state.isRregistered === false){
        return (
          <div className="signOut">
               <Button className='navButton' value="sign out"/>
          </div>
        );
      }
      return (
        <div className="registartion">
             <Button className='navButton' value="sign In"/>
             <Button className='navButton' value="sign Up"/>
        </div>
      );
    }
}

export default Registration;