import React from 'react';
import './palette.css';
import PaletteImage from './color_palette.png';
import PopUp from '../popUp/popUp';

class Palette extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stylePopUpDisplay : false,
            styleClasses : [
                {className : 'default'},
                {className : 'red'},
            ]
        }
    }
    
    displayStylePopUp = () => {
        this.setState({
            stylePopUpDisplay : !this.state.stylePopUpDisplay
        })
    }

    render(){
        const styles = this.state.styleClasses.map((styleClass, index)=>
            <li onClick={()=>this.props.changeStyle(styleClass.className)}
            key={styleClass.className}>
            {styleClass.className}</li>);

        return(
            <div className="palette">
               <img src={PaletteImage} alt="palette" 
               onClick={this.displayStylePopUp}></img>
               <PopUp display={this.state.stylePopUpDisplay}>
                   {styles}
               </PopUp>
            </div>
        );
    }
}

export default Palette;