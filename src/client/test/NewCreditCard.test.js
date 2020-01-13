import React from  'react';
import {shallow,render,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewCreditCard  from '../components/NewCreditCard.js';
import CreditCardList from '../components/CreditCardList.js';

import { configure } from 'enzyme';

configure({ adapter: new Adapter() });


describe('NewCreditCard Component ', () => {

const wrapper = shallow(<NewCreditCard />);

  it('renders correctly', () => {   
   expect(wrapper).toMatchSnapshot();
  });

  it('should have a `<form>` element', () => {
    expect(wrapper.find('form').length).toBe(1);
  });

  it('Should capture Name correctly onChange', function(){
    const component = mount(<NewCreditCard />);
    const input = component.find('input').at(0);
    input.instance().value = 'Sita';
    input.simulate('change');
    expect(component.state().name).toEqual('Sita');
  });

  it('Should capture Card Number correctly onChange', function(){
    const component = mount(<NewCreditCard />);
    const input = component.find('input').at(1);
    input.instance().value = '79927398713';
    input.simulate('change');
    expect(component.state().creditCard).toEqual('79927398713');
  });

  it('Should capture Limit correctly onChange', function(){
    const component = mount(<NewCreditCard />);
    const input = component.find('input').at(2);
    input.instance().value = '1000000';
    input.simulate('change');
    expect(component.state().limit).toEqual('1000000');
  });

 /* it('executes a handler function on form submition', () => {
    const component = mount(<NewCreditCard />);
    const form = component.find('form')
    let counter = component.state().cardsList.length;
    //form.simulate('submit');
    component.find('button').simulate('submit');
    expect(component.state().isValid).toBeTruthy();
})*/

it('check creditcard list child component is rendered', () => {
   expect(wrapper.find(CreditCardList)).toHaveLength(1);
})

  
});