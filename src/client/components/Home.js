import React from  'react';
import NewCreditCard from './NewCreditCard';
import {MainTitle } from '../styles/style.js';

class Home extends React.Component {
    
    render(){
        
        return <div ><MainTitle>Credit Card System</MainTitle> <NewCreditCard/> </div>;
    }
 
};

export default Home;