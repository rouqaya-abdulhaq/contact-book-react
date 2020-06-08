import React from 'react';
import {shallow} from 'enzyme';
import Contact from './contact';

describe('<Contact />',()=>{
    it('should toggle contactClicked state',()=>{
        const wrapper = shallow(<Contact/>);
        wrapper.instance().displayContactInfo();
        expect(wrapper.instance().state.contactClicked).toEqual(true);
        wrapper.instance().displayContactInfo();
        expect(wrapper.instance().state.contactClicked).toEqual(false);
    });

    it('should toggle contactClicked state',()=>{
        const contacts = ['test0','test1','test2'];
        const event = {target : {index : 0}};
        const event1 = {target : {index : 1}};
        const event2 = {target : {index : 2}};
        const wrapper = shallow(<Contact contacts={contacts}/>);
        const info = wrapper.instance().getContactInfo(event);
        expect(info).toEqual('test0');
        const info1 = wrapper.instance().getContactInfo(event1);
        expect(info1).toEqual('test1');
        const info2 = wrapper.instance().getContactInfo(event2);
        expect(info2).toEqual('test2');
    });

    it('should toggle editClicked state',()=>{
        const wrapper = shallow(<Contact/>);
        wrapper.instance().displayEditForm();
        expect(wrapper.instance().state.editClicked).toEqual(true);
        wrapper.instance().displayEditForm();
        expect(wrapper.instance().state.editClicked).toEqual(false);
    });

    it('should close edit form on submit',()=>{
        const wrapper = shallow(<Contact EditListHandler={()=>{}}/>);
        wrapper.setState({editClicked : true});
        wrapper.instance().onSubmitEditHandler('test');
        expect(wrapper.instance().state.editClicked).toEqual(false);
    });
});