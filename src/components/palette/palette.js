import React from 'react';
import './palette.css';
import PaletteImage from './color_palette.png';
import PopUp from '../popUp/popUp';

class Palette extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stylePopUpDisplay : false,
        }
    }
    
    displayStylePopUp = () => {
        this.setState({
            stylePopUpDisplay : !this.state.stylePopUpDisplay
        })
    }

    render(){
        return(
            <div className="palette">
               <img src={PaletteImage} alt="palette" 
               onClick={this.displayStylePopUp}></img>
               <PopUp display={this.state.stylePopUpDisplay}>
                   <p>styles</p>
               </PopUp>
            </div>
        );
    }
}

export default Palette;