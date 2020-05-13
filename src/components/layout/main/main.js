import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ContactList from '../../../containers/contact-list/contactList';
import SignUp from '../../registration/signUp/signUp';
import LogIn from '../../registration/logIn/logIn';
import LandingPage from '../landingPage/landingPage';

import './main.css';

const main = (props) =>{

  let dir = null;
  let contactListRoute = null;
  
    if(props.isRegistered){
      dir = <Redirect to="contact-List"/>
      contactListRoute = <Route exact path="/contact-list" 
      render={()=> <ContactList
       firstName = {props.firstName}  
       registerServerError = {props.registerServerError} id = {props.id}/>}
     > 
   </Route>
    }

    return(
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          {contactListRoute}
          {dir}
          <Route exact path="/sign-up" 
            render={(sideProps)=> <SignUp 
                              history ={sideProps.history}
                              register = {props.register}
                              registerServerError = {props.registerServerError}
            isAuthed={true}/>}> 
          </Route>
          <Route exact path="/log-in" 
            render={(sideProps)=> <LogIn 
                              history ={sideProps.history}
                              register = {props.register}
                              registerServerError = {props.registerServerError}
            isAuthed={true} />}>
          </Route>
        </Switch>
    );
}

export default main;