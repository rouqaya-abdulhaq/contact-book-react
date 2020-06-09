import React from 'react';
import {shallow} from 'enzyme';
import Palette from './palette';

describe('<Palette />',()=>{
    it('should toggle display style pop up',()=>{
        const wrapper = shallow(<Palette/>);
        wrapper.instance().displayStylePopUp();
        expect(wrapper.instance().state.stylePopUpDisplay).toEqual(true);
        wrapper.instance().displayStylePopUp();
        expect(wrapper.instance().state.stylePopUpDisplay).toEqual(false);
    });

    it('should match the  of blocks to the length of style classes',()=>{
        const wrapper = shallow(<Palette/>);
        const classesLength = wrapper.instance().state.styleClasses.length;
        expect(wrapper.find('.block')).toHaveLength(classesLength);
    });
});