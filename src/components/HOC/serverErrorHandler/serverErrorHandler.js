import React from 'react';
import {withRouter} from 'react-router-dom';
import TransScreen from '../transparentScreen/transparentScreen';

const serverErrorHandler = (props) =>{
    
    const refreshPage = () =>{
        props.history.go(0);
    }

    return(
        <TransScreen msg={props.msg}>
            <button onClick={refreshPage}>GO BACK AND TRY</button>
        </TransScreen>
    );
}

export default withRouter(serverErrorHandler);