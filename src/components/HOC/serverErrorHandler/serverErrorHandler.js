import React from 'react';
import {withRouter} from 'react-router-dom';
import TransScreen from '../transparentScreen/transparentScreen';

const serverErrorHandler = (props) =>{
    
    const refreshPage = () =>{
        props.history.go(0);
    }

    const serverError = () =>{
        if(props.serverErrorMsg){
            return true;
        }
        return false;
    }

    if(serverError()){
        return(
            <div className={props.styleClass}>
               <TransScreen msg={props.serverErrorMsg}>
                    <button onClick={refreshPage}>BACK</button>
               </TransScreen>
               {props.children}
            </div>
        );
    }
    return(
        <div className={props.styleClass}>{props.children}</div>
    );
}

export default withRouter(serverErrorHandler);