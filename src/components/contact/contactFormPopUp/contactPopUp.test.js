import React from 'react';
import {shallow} from 'enzyme';
import ContactPopUp from './contactPopUp'
import ContactForm from './contactForm';
import Form from '../../../containers/HOC/form/form';

describe('<ContactPopUp/>', () =>{
    it('should have popUp as parent of form', () =>{
        const wrapper = shallow(<ContactPopUp/>);
        expect(wrapper.find(Form).parent().hasClass('popUp'));
    });

    it('should have form as parent of contact form', () =>{
        const wrapper = shallow(<ContactPopUp/>);
        expect(wrapper.find(ContactForm).parent().hasClass('formWrapper'));
    });
})