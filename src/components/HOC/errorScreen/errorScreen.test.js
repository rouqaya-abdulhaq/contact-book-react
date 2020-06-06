import React from 'react';
import {shallow} from 'enzyme';
import ErrorScreen from './errorScreen';
import TransScreen from '../transparentScreen/transparentScreen';

describe('<errorScreen/>',( )=>{
    it('should have error screen as null',()=>{
        const wrapper = shallow(<ErrorScreen/>);
        expect(wrapper.contains(<TransScreen/>)).toEqual(false);
    });

    it('should have error screen as transScreen component',()=>{
        const wrapper = shallow(<ErrorScreen errorMsg={undefined}/>);
        expect(wrapper.find(TransScreen)).toHaveLength(0);
    });

    it('should have error screen as transScreen component',()=>{
        const wrapper = shallow(<ErrorScreen errorMsg="errror!!"/>);
        expect(wrapper.find(TransScreen)).toHaveLength(1);
    });
});