import React from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import Palette from '../../../containers/palette/palette';
import ErrorScreen from '../../HOC/errorScreen/errorScreen';

import './layout.css';

const layout = (props) => {

    return(
    <div className='layout'>
        <Header isRegistered={props.isRegistered} 
                registrationHandler ={props.registrationHandler}
                unregisterHandler = {props.unregisterHandler}/>

        <ErrorScreen styleClass="main" errorMsg={props.serverErrorMsg} >
            <Main register = {props.registerHandler}
                    invalidMsgHandler={props.invalidMsgHandler}
                    invalidMsg={props.invalidMsg}
                    firstName = {props.user.user_first_name}
                    id = {props.user.user_id}
                    isRegistered = {props.isRegistered}
                    registerServerError = {props.registerServerError}/>
        </ErrorScreen>
      
        <Footer author={"rouqaya abdulhaq"}/>
      
        <Palette changeStyle={props.changeStyle}/>
    </div> 
    );
}

export default layout;