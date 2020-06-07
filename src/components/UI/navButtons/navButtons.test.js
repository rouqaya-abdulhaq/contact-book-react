import React from 'react';
import {shallow} from 'enzyme';
import NavButtons from './navButtons';

describe('<NavButtons',()=>{
    it('should display log and sign as the default',()=>{
        const wrapper = shallow(<NavButtons/>);
        expect(wrapper.hasClass('signLogButtons'));
    });

    it('should display log and sign when user is not registered',()=>{
        const wrapper = shallow(<NavButtons isRegistered={false}/>);
        expect(wrapper.hasClass('signLogButtons'));
    });

    it('should display sign out when user is registered',()=>{
        const wrapper = shallow(<NavButtons isRegistered={true}/>);
        expect(wrapper.hasClass('signLogButtons'));
    });
});