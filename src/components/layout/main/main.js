import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ContactList from '../../../containers/contact-list/contactList';
import SignUp from '../../registration/signUp/signUp';
import LogIn from '../../registration/logIn/logIn';
import LandingPage from '../landingPage/landingPage';

const main = (props) =>{
  
    let dir = null;
    if(props.isRegistered){
      dir = <Redirect to="contact-List"/>
    }

    return(
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/contact-list" 
             render={()=> <ContactList
              firstName = {props.firstName}  contacts = {props.contacts}/>}
            > 
          </Route>
          {dir}
          <Route exact path="/sign-up" 
            render={(sideProps)=> <SignUp 
                              history ={sideProps.history}
                              register = {props.register}
                              wrongCredintialsHandler={props.wrongCredintialsHandler}
                              wrongCredintialsMsg={props.wrongCredintialsMsg}
            isAuthed={true}/>}> 
          </Route>
          <Route exact path="/log-in" 
            render={(sideProps)=> <LogIn 
                              history ={sideProps.history}
                              register = {props.register}
                              wrongCredintialsHandler={props.wrongCredintialsHandler}
                              wrongCredintialsMsg={props.wrongCredintialsMsg}
            isAuthed={true} />}>
          </Route>
        </Switch>
    );
}

export default main;