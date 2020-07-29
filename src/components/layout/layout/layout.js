import React from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import Palette from '../../../containers/palette/palette';
import ErrorScreen from '../../HOC/errorScreen/errorScreen';
import Spinner from '../../UI/spinner/spinner';

import './layout.css';

const layout = (props) => {

    const spinner = props.loading ? <Spinner/> : null;
    const hideMain = props.loading ? "hideMain" : null;

    return(
    <div className={`layout ${hideMain}` }>
        <Header isRegistered={props.isRegistered} 
                registrationHandler ={props.registrationHandler}
                unregisterHandler = {props.unregisterHandler}/>

        <ErrorScreen styleClass="main" errorMsg={props.serverErrorMsg} registerServerError={props.registerServerError} >
             <Main register = {props.registerHandler}
                    token = {props.token}
                    firstName = {props.user.user_first_name}
                    id = {props.user.user_id}
                    isRegistered = {props.isRegistered}
                    registerServerError = {props.registerServerError}
                    isLoading= {props.isLoading}
                    isCompleted = {props.isCompleted}/>
        </ErrorScreen>
        {spinner}
        <Footer />
      
        <Palette changeStyle={props.changeStyle}/>
    </div> 
    );
}

export default layout;