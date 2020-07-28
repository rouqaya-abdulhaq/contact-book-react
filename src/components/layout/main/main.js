import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ContactList from '../../../containers/contact-list/contactList';
import SignUp from '../../registration/signUp/signUp';
import LogIn from '../../registration/logIn/logIn';
import LandingPage from '../landingPage/landingPage';

import './main.css';

const main = (props) =>{

  let contactListRoute = <Redirect to="/log-in"/>;
  
    if(props.isRegistered){
      contactListRoute = <Route  path="/contact-list" 
                            render={()=> <ContactList
                            firstName = {props.firstName}  
                            registerServerError = {props.registerServerError} id = {props.id}
                            token = {props.token}
                            isLoading= {props.isLoading}
                            isCompleted = {props.isCompleted}/>}/> 
    }

    return(
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          
          <Route  path="/sign-up" 
            render={(sideProps)=> <SignUp 
                              history ={sideProps.history}
                              register = {props.register}
                              registerServerError = {props.registerServerError}
                              isLoading= {props.isLoading}
                              isCompleted = {props.isCompleted}/>}/> 
          
          <Route  path="/log-in" 
            render={(sideProps)=> <LogIn 
                              history ={sideProps.history}
                              register = {props.register}
                              registerServerError = {props.registerServerError} 
                              isLoading= {props.isLoading}
                              isCompleted = {props.isCompleted}/>}/>
          
           {contactListRoute}
        </Switch>
    );
}

export default main;