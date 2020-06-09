import React from 'react';
import {shallow} from 'enzyme';
import ContactList from './contactList';
import Contact from './contact/contact';

describe('<ContactList />',()=>{
    it('should update the named state',()=>{
        const wrapper = shallow(<ContactList/>);
        wrapper.instance().stateUpdate('contacts',['test1','test2']);
        expect(wrapper.instance().state.contacts).toEqual(['test1','test2']);

        wrapper.instance().stateUpdate('addClicked',true);
        expect(wrapper.instance().state.addClicked).toEqual(true);
    });

    it('should toggle addClicked' , () =>{
        const wrapper = shallow(<ContactList/>);
        wrapper.instance().displayAddForm();
        expect(wrapper.instance().state.addClicked).toEqual(true);
        wrapper.instance().displayAddForm();
        expect(wrapper.instance().state.addClicked).toEqual(false);
    });

    it('should render null contacts when contacts state is empty' , () =>{
        const wrapper = shallow(<ContactList/>);
        expect(wrapper.find(Contact)).toHaveLength(0);
    });

    it('should render contacts' , () =>{
        const wrapper = shallow(<ContactList />);
        wrapper.setState({contacts : ["test1","test2"]})
        expect(wrapper.find(Contact)).toHaveLength(2);
    });
});