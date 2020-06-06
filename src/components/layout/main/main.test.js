import React from 'react';
import {shallow} from 'enzyme';
import Main from './main';
import {Redirect} from 'react-router-dom';

describe('<Main/>',()=>{
    it('should have contactListRoute to redirect as the default',()=>{
        const warpper = shallow(<Main/>);
        expect(warpper.find(Redirect)).toHaveLength(1);
    });

    it('should not redirect when isRegistered',()=>{
        const warpper = shallow(<Main isRegistered={true}/>);
        expect(warpper.find(Redirect)).toHaveLength(0);
    });
});