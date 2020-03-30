import React from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import Palette from '../../../containers/palette/palette';
import ServerErrorHandler from '../../HOC/serverErrorHandler/serverErrorHandler';

const layout = (props) => {
    return(
        <div className='App'>
        <Header isRegistered={props.isRegistered} 
                registrationHandler ={props.registrationHandler}
                unregisterHandler = {props.unregisterHandler}/>

        <ServerErrorHandler serverErrorMsg={props.serverErrorMsg}>
        <Main register = {props.registerHandler}
                invalidMsgHandler={props.invalidMsgHandler}
                invalidMsg={props.invalidMsg}
                firstName = {props.firstName}
                contacts = {props.contacts}
                isRegistered = {props.isRegistered}
                registerServerError = {props.registerServerError}/>
        </ServerErrorHandler>
      
        <Footer author={"rouqaya abdulhaq"}/>
      
        <Palette changeStyle={props.changeStyle}/>
    </div> 
    );
}

export default layout;