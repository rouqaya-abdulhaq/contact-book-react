import React from 'react';
import {shallow} from 'enzyme';
import Form from './form';

describe('<Form />', ()=>{
    it('should return the default input object when input  value is null',()=>{
        const wrapper = shallow(<Form/>);
        const input = wrapper.instance().assignInput();
        const defaultValues = {
            value :  "",
            isValid : true,
            changed : false
        }
        expect(input).toEqual(defaultValues);
    });

    it('should return the input object that is passed',()=>{
        const wrapper = shallow(<Form/>);
        const values = {
            value : "test",
            isValid : true,
            changed : true
        }
        const input = wrapper.instance().assignInput(values);
        expect(input).toEqual(values);
    });

    it('should return to the base state after submit',()=>{
        const wrapper = shallow(<Form onSubmit={()=>{}}/>);
        const baseState = {
            values : {}
        }
        wrapper.setState({values : 'test'});
        wrapper.instance().submitFormHandler();
        expect(wrapper.instance().state).toEqual(baseState);
    });

    it('should assign a new value correctly',()=>{
        const wrapper = shallow(<Form onSubmit={()=>{}}/>);
        const newValues = {
            test : {
                value : 'test', 
                isValid : true,
                hasChanged : true,
            }
        }
        wrapper.instance().ChangeHandler('test','test',true);
        expect(wrapper.instance().state.values).toEqual(newValues);
    });

    it('should assign a new value correctly also copying prevState',()=>{
        const wrapper = shallow(<Form onSubmit={()=>{}}/>);
        wrapper.setState({
            values : {test1 : {
                value : 'test1', 
                isValid : true,
                hasChanged : true,
            }
        }})
        const newValues = {
            test1 : {
                value : 'test1', 
                isValid : true,
                hasChanged : true,
            },
            test2 : {
                value : 'test2', 
                isValid : true,
                hasChanged : true,
            }
        }
        wrapper.instance().ChangeHandler('test2','test2',true);
        expect(wrapper.instance().state.values).toEqual(newValues);
    });
});