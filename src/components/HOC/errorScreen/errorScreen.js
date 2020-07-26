import React from 'react';
import TransScreen from '../transparentScreen/transparentScreen';

import './errorScreen.css';

const errorScreen = (props) =>{
    let errorScreen = null;
    
    const refreshPage = () =>{
        props.registerServerError(null);
        window.location.reload(false);
    }

    const serverError = () =>{
        if(props.errorMsg){
            return true;
        }
        return false;
    }

    if(serverError()){
        errorScreen = <TransScreen msg={props.errorMsg}>
                        <button onClick={refreshPage} className="backBtn">TRY AGAIN</button>
                      </TransScreen>
    }
    return(
        <div className={props.styleClass}>
            {errorScreen}
            {props.children}
        </div>
    );
}

export default errorScreen;