import React from 'react';
import './palette.css';
import PaletteImage from './color_palette.png';
import PopUp from '../../components/HOC/popUp/popUp';

class Palette extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stylePopUpDisplay : false,
            styleClasses : [
                {class : 'default'},
                {class : 'flowery'},
                {class : 'seaSide'},
                {class : 'oranges'},
                {class : 'vintage'},
                {class : 'winter'},
                {class : 'jungle'},
                {class : 'pastel'},
                {class : 'fire'},
                {class : 'gold'}
            ]
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState !== this.state){
            return true;
        }else {
            return false;
        }
    }

    
    displayStylePopUp = () => {
        this.setState({
            stylePopUpDisplay : !this.state.stylePopUpDisplay
        })
    }

    render(){
        const styles = this.state.styleClasses.map((styleClass, index)=>
        <div 
            onClick={()=>{this.props.changeStyle(styleClass.class);
                        this.displayStylePopUp();}} 
            className={`block ${styleClass.class}-block`} 
            key={styleClass.class}>

          {styleClass.class}
         </div>);

        return(
            <div className="paletteIcon">
               <img src={PaletteImage} alt="palette" 
               onClick={this.displayStylePopUp}></img>
               <div className="palettePopUp">
                    <PopUp display={this.state.stylePopUpDisplay}>
                        <button className="cancelButt" onClick={this.displayStylePopUp}>
                             x 
                        </button>
                        <div className="styleList">
                         {styles} 
                        </div>
                    </PopUp> 
               </div>
            </div>
        );
    }
}

export default Palette;