import React from 'react';
import {shallow} from 'enzyme';
import SubmitBtn from './submitBtn';

describe('<SubmitBtn/>',()=>{
    it('should be mutual empty defualt',()=>{
        const wrapper = shallow(<SubmitBtn infoArr={[]}/>);
        expect(wrapper.hasClass('disapled')).toEqual(false);
        expect(wrapper.hasClass('enabled')).toEqual(false);
    });

    it('should be disapled',()=>{
        const infoArr = [{isValid : false, changed : true}];
        const wrapper = shallow(<SubmitBtn infoArr={infoArr}/>);
        expect(wrapper.hasClass('disapled'));
    });

    it('should be disapled',()=>{
        const infoArr = [{isValid : false, changed : false}];
        const wrapper = shallow(<SubmitBtn infoArr={infoArr}/>);
        expect(wrapper.hasClass('disapled'));
    });

    it('should be disapled',()=>{
        const infoArr = [{isValid : true, changed : true},{isValid : true, changed : false}];
        const wrapper = shallow(<SubmitBtn infoArr={infoArr}/>);
        expect(wrapper.hasClass('disapled'));
    });

    it('should be enabled',()=>{
        const infoArr = [{isValid : true, changed : true}];
        const wrapper = shallow(<SubmitBtn infoArr={infoArr}/>);
        expect(wrapper.hasClass('enabled'));
    });

    it('should be enabled',()=>{
        const infoArr = [{isValid : true, changed : true},{isValid : true, changed : true}];
        const wrapper = shallow(<SubmitBtn infoArr={infoArr}/>);
        expect(wrapper.hasClass('enabled'));
    });
});
