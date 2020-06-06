import React from 'react';
import {shallow} from 'enzyme';
import Input from './input';

describe('<Input/>',()=>{
    it('should should have no validation class as default',()=>{
        const wrapper = shallow(<Input changeHandler={()=>{}}/>);
        const input = wrapper.find('input');
        input.simulate('change',{target : {value : ""}});

        expect(input.hasClass('rightCredintials')).toEqual(false);
        expect(input.hasClass('wrongCredintials')).toEqual(false);
    });

    it('should should have rightCredintials class on name',()=>{
        const wrapper = shallow(<Input changeHandler={()=>{}} inputType="name"/>);
        const input = wrapper.find('input');
        input.simulate('change',{target : {value : "test"}});

        expect(input.hasClass('rightCredintials'));
    });

    it('should should have rightCredintials class on email',()=>{
        const wrapper = shallow(<Input changeHandler={()=>{}} inputType="email"/>);
        const input = wrapper.find('input');
        input.simulate('change',{target : {value : "test@test.com"}});

        expect(input.hasClass('rightCredintials'));
    });

    it('should should have rightCredintials class on phone number',()=>{
        const wrapper = shallow(<Input changeHandler={()=>{}} inputType="phoneNumber"/>);
        const input = wrapper.find('input');
        input.simulate('change',{target : {value : "0123456789"}});

        expect(input.hasClass('rightCredintials'));
    });

    it('should should have rightCredintials class on password',()=>{
        const wrapper = shallow(<Input changeHandler={()=>{}} inputType="password"/>);
        const input = wrapper.find('input');
        input.simulate('change',{target : {value : "01fhdgjfTYTFU86485"}});

        expect(input.hasClass('rightCredintials'));
    });

    it('should should have wrongCredintials class on name',()=>{
        const wrapper = shallow(<Input changeHandler={()=>{}} inputType="name"/>);
        const input = wrapper.find('input');
        input.simulate('change',{target : {value : "name1  "}});

        expect(input.hasClass('wrongCredintials'));
    });

    it('should should have wrongCredintials class on email',()=>{
        const wrapper = shallow(<Input changeHandler={()=>{}} inputType="email"/>);
        const input = wrapper.find('input');
        input.simulate('change',{target : {value : "email@gmail"}});

        expect(input.hasClass('wrongCredintials'));
    });

    it('should should have wrongCredintials class on phone number',()=>{
        const wrapper = shallow(<Input changeHandler={()=>{}} inputType="phoneNumber"/>);
        const input = wrapper.find('input');
        input.simulate('change',{target : {value : "1234"}});

        expect(input.hasClass('wrongCredintials'));
    });
})