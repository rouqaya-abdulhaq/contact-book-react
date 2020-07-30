import React from 'react';
import {shallow, mount} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import { expect } from 'chai';
import Spinner from '../../components/UI/spinner/spinner';

const mockRegisterHandler = (user,wrapper) =>{
  if(user){
    wrapper.setState({isRegistered : true, user : user});
  }
}

describe('<App/>' , () =>{
  it('should register user',()=>{
    const wrapper = shallow(<App/>);
    mockRegisterHandler('test',wrapper);
    expect(wrapper.instance().state.user).equal('test');
    expect(wrapper.instance().state.isRegistered).equal(true);
  })

  it('should not register user',()=>{
    const wrapper = shallow(<App/>);
    mockRegisterHandler(null,wrapper);
    expect(wrapper.instance().state.user).equal({});
    expect(wrapper.instance().state.isRegistered).equal(false);
  })

  it('should unregister user',()=>{
    const wrapper = shallow(<App/>);
    wrapper.setState({isRegistered : true})
    wrapper.instance().unregisterHandler();
    expect(wrapper.instance().state.user).equal({});
    expect(wrapper.instance().state.isRegistered).equal(false);
  })

  it('should not change style when newStyle is null',()=>{
    const wrapper = shallow(<App/>);
    wrapper.instance().changeStyleHandler(null);
    expect(wrapper.instance().state.style).equal('default');
  })

  it('should not change style to flowery',()=>{
    const wrapper = shallow(<App/>);
    wrapper.instance().changeStyleHandler('flowery');
    expect(wrapper.instance().state.style).equal('flowery');
  })

  it('should register server error msg',()=>{
    const wrapper = shallow(<App/>);
    wrapper.instance().registerServerError('error msg');
    expect(wrapper.instance().state.serverErrMsg).equal('error msg');
  })

  it('should not register server error msg as null',()=>{
    const wrapper = shallow(<App/>);
    wrapper.instance().registerServerError(null);
    expect(wrapper.instance().state.serverErrMsg).equal('');
    wrapper.instance().registerServerError(false);
    expect(wrapper.instance().state.serverErrMsg).equal('');
    wrapper.instance().registerServerError(undefined);
    expect(wrapper.instance().state.serverErrMsg).equal('');
  })

  it('should set loading to true',()=>{
    const wrapper = shallow(<App/>);
    wrapper.instance().isLoading();
    expect(wrapper.instance().state.loading).equal(true);
  });

  it('should set loading to flase',()=>{
    const wrapper = shallow(<App/>);
    wrapper.instance().isCompleted();
    expect(wrapper.instance().state.loading).equal(false);
  });

  it('should contain spinner',()=>{
    const wrapper = shallow(<App/>);
    wrapper.instance().isLoading();
    expect(wrapper.find(Spinner));
  });
})
