import React from 'react';
import {shallow, mount} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';

const mockRegisterHandler = (user,wrapper) =>{
  if(user){
    wrapper.setState({isRegistered : true, user : user});
  }
}

describe('<App/>' , () =>{
  it('should register user',()=>{
    const wrapper = shallow(<App/>);
    mockRegisterHandler('test',wrapper);
    expect(wrapper.instance().state.user).toEqual('test');
    expect(wrapper.instance().state.isRegistered).toEqual(true);
  })

  it('should not register user',()=>{
    const wrapper = shallow(<App/>);
    mockRegisterHandler(null,wrapper);
    expect(wrapper.instance().state.user).toEqual({});
    expect(wrapper.instance().state.isRegistered).toEqual(false);
  })

  it('should unregister user',()=>{
    const wrapper = shallow(<App/>);
    wrapper.setState({isRegistered : true})
    wrapper.instance().unregisterHandler();
    expect(wrapper.instance().state.user).toEqual({});
    expect(wrapper.instance().state.isRegistered).toEqual(false);
  })

  it('should not change style when newStyle is null',()=>{
    const wrapper = shallow(<App/>);
    wrapper.instance().changeStyleHandler(null);
    expect(wrapper.instance().state.style).toEqual('default');
  })

  it('should not change style to flowery',()=>{
    const wrapper = shallow(<App/>);
    wrapper.instance().changeStyleHandler('flowery');
    expect(wrapper.instance().state.style).toEqual('flowery');
  })

  it('should register server error msg',()=>{
    const wrapper = shallow(<App/>);
    wrapper.instance().registerServerError('error msg');
    expect(wrapper.instance().state.serverErrMsg).toEqual('error msg');
  })

  it('should not register server error msg as null',()=>{
    const wrapper = shallow(<App/>);
    wrapper.instance().registerServerError(null);
    expect(wrapper.instance().state.serverErrMsg).toEqual('');
    wrapper.instance().registerServerError(false);
    expect(wrapper.instance().state.serverErrMsg).toEqual('');
    wrapper.instance().registerServerError(undefined);
    expect(wrapper.instance().state.serverErrMsg).toEqual('');
  })
})
