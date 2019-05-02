import React from 'react';
import './palette.css';
import PaletteImage from './color_palette.png';

const Palette = (props)=> {
    return(
        <div className="palette">
           <img src={PaletteImage} alt="palette"></img>
        </div>
    );
}

export default Palette;