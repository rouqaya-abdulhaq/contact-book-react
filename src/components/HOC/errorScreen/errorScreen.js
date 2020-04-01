import React from 'react';
import {withRouter} from 'react-router-dom';
import TransScreen from '../transparentScreen/transparentScreen';

import './errorScreen.css';

const errorScreen = (props) =>{
    console.log(props.errorMsg);
    
    const refreshPage = () =>{
        props.history.go(0);
    }

    const serverError = () =>{
        if(props.errorMsg){
            return true;
        }
        return false;
    }

    if(serverError()){
        return(
            <div className={props.styleClass}>
               <TransScreen msg={props.errorMsg}>
                    <button onClick={refreshPage} className="backBtn">BACK</button>
               </TransScreen>
               {props.children}
            </div>
        );
    }
    return(
        <div className={props.styleClass}>{props.children}</div>
    );
}

export default withRouter(errorScreen);