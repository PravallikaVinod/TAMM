import React from  'react';
import {shallow,render,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewCreditCard  from '../components/NewCreditCard.js';
import Home from '../components/Home.js';


import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Home Component ', () => {
    const wrapper = shallow(<Home />);
    it('check newcredit card  child component is rendered', () => {
        expect(wrapper.find(NewCreditCard)).toHaveLength(1);
     })

});