import React from  'react';
import {shallow,render,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreditCardList from '../components/CreditCardList.js';

import { configure } from 'enzyme';

configure({ adapter: new Adapter() });


describe('Credit Card List Component ', () => {

    let list = [];
    list.name="Sita";
    list.cardNumber = 79927398713;
    list.limit = 100000;
    list.balance = 0;
    const wrapper = mount(<CreditCardList cardsList = {list} />);
    it('renders correctly', () => {   
        expect(wrapper).toMatchSnapshot();
    });

    it('should have a `<table>` element', () => {
        expect(wrapper.find('table').length).toBe(1);
    });

});