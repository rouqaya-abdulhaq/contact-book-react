import React from 'react';
import {shallow} from 'enzyme';
import ErrorHandler from './errorHandler';
import App from '../../app/App';
import ErrScreen from '../../../components/HOC/errorScreen/errorScreen';

describe('<ErrorHandler/>',()=>{
    it('should have no errors and does not render errScreen',()=>{
        const wrapper = shallow(<ErrorHandler><App/></ErrorHandler>);
        expect(wrapper.instance().state.errorFound).toEqual(false);
        expect(wrapper.contains(<ErrScreen/>)).toEqual(false);
    });

    it('should have an error and render errScreen',()=>{
        const wrapper = shallow(<ErrorHandler><App/></ErrorHandler>);
        const error = new Error('error!!')
        wrapper.find(App).simulateError(error);
        expect(wrapper.instance().state.errorFound).toEqual(true);
        expect(wrapper.contains(<ErrScreen/>));
    });
});