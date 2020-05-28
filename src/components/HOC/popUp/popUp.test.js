import React from 'react';
import {shallow} from 'enzyme';
import PopUp from './popUp';

describe('<PopUp/>',()=>{
    it('should have className hide',() =>{
        const wrapper = shallow(<PopUp />);
        expect(wrapper.hasClass('hide'));
    });

    it('should have className hide',() =>{
        const wrapper = shallow(<PopUp />);
        wrapper.setProps({display : false});
        expect(wrapper.hasClass('hide'));
    });

    it('should have className show',() =>{
        const wrapper = shallow(<PopUp />);
        wrapper.setProps({display : true});
        expect(wrapper.hasClass('show'));
    });
})