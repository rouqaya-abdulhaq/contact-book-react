import {shallow} from 'enzyme';
import React from 'react';
import Header from './header';

describe('<Header/>', () =>{
    it('should have signLogHeader class for div as the default',()=>{
        const wrapper = shallow(<Header/>);
        expect(wrapper.childAt(0).hasClass('signLogHeader')).toEqual(true);
    });

    it('should have signLogHeader class for div',()=>{
        const wrapper = shallow(<Header isRegistered={false}/>);
        expect(wrapper.childAt(0).hasClass('signLogHeader')).toEqual(true);
    });

    it('should have signOutHeader class for div',()=>{
        const wrapper = shallow(<Header isRegistered={true}/>);
        expect(wrapper.childAt(0).hasClass('signOutHeader')).toEqual(true);
    });
})