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
                {class : 'default'},
                {class : 'red'},
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
        <div onClick={()=>this.props.changeStyle(styleClass.class)} 
        className={`block ${styleClass.class}-block`} 
        key={styleClass.class}>
            {styleClass.class}
         </div>);

        return(
            <div className="palette">
               <img src={PaletteImage} alt="palette" 
               onClick={this.displayStylePopUp}></img>
               <PopUp display={this.state.stylePopUpDisplay}>
                   <div className="style-palette">
                        {styles} 
                   </div>
               </PopUp>
            </div>
        );
    }
}

export default Palette;