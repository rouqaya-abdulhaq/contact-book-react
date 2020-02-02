import React from 'react';
import {Switch, Route, /*Redirect*/} from 'react-router-dom';
import ContactList from '../../../containers/contact-list/contactList';
import SignUp from '../../signUp/signUp';
import LogIn from '../../logIn/logIn';
import LandingPage from '../../landing/landingPage';

const main = (props) =>{
    return(
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/contact-list" 
             render={()=> <ContactList
              firstName = {props.firstName}  contacts = {props.contacts}/>}
            > 
          </Route>
          {props.dir}
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