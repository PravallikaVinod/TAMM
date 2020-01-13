import React from  'react';
import {SubTitle,Label,Button } from '../styles/style.js';
import CredirCardList from './CreditCardList';
const axios = require('axios');

class NewCreditCard extends React.Component {

constructor(props){
    super(props)
    this.state = {
     "name":"",
     "creditCard":"",
     "limit":"",
     "cardsList":[],
     "isValid":false,
     "validationMsg":'',
    }
}
componentDidMount(){
    this.getCardsList();
}

//triggers when user clicks on Add button
handleSubmit(event) {
    var that = this;
    event.preventDefault();
    if(this.state.isValid){
  axios.post('/api/creditcard/add', {
    "name":that.state.name,"cardNumber":that.state.creditCard,"limit":that.state.limit})
   .then(function(response) { 
    that.setState({ "isValid":true,"validationMsg":response.data.status});
    console.log(that.state.isValid)
     that.getCardsList()});    
        }
  
} 

//Gets all the credit card list 
getCardsList(){
    var that = this;
    axios.get('/api/creditcard/list').then(response =>that.setState({
        "cardsList":response.data.creditCard
    }));
}

//handles all input changes name,credit card number and limit
handleChange (evt)  {
if(evt.target.id === "name"){
    this.setState({"name":evt.target.value,"isValid":true,"validationMsg":""})
}

else if (evt.target.id === "creditCard"){
    if(this.checkCardIfLuhn(evt.target.value)){
        this.setState({"creditCard":evt.target.value,"isValid":true,"validationMsg":""})
    }else{
        this.setState({"creditCard":evt.target.value,"isValid":false,"validationMsg":"Card number is not valid"})
    }
}

else{
this.setState({"limit":evt.target.value})
}

}

//checks whether card number is luhn number or not
 checkCardIfLuhn(cardNo) 
{ 
    var card = cardNo.split("");
    const arr = []
    var isSecond = false;
    for (var i = 0; i < card.length; i++) {
        if (isSecond) {
          if (parseInt(card[i])*2 < 10) {
            arr.push(parseInt(card[i])*2);
          } else {
            arr.push(parseInt(card[i])*2-9);
          }
        } else {
          arr.push(parseInt(card[i]))
        }
        isSecond = !isSecond;
      }

      return arr.reduce( (prv, cur) => prv + cur) % 10 === 0;
} 

render(){ 
   
return (
 <div  style={{margin:25}}>
 <div> <SubTitle> Add New Credit Card  </SubTitle></div>
 <form  onSubmit={this.handleSubmit.bind(this)}>
 <div><Label><label>Name</label></Label></div>
 <input type="text"  id="name"  
 pattern="[A-Za-z]{5,15}" title="Name must be atleast 5 charcter string" required onChange={this.handleChange.bind(this)} value={this.state.value}/>

 <div><Label><label>Card Number</label></Label></div>
 <input type="number" maxLength="10" required value={this.state.creditCard} id="creditCard" title="Please enter valid card number" onChange={this.handleChange.bind(this)}/>


 <div><Label><label>Limit</label></Label></div>
 <input type="number"  id="limit" required value={this.state.limit} onChange={this.handleChange.bind(this)}/>
  {this.state.isValid ? <div style={{color:'green',paddingTop:10}}>{this.state.validationMsg}</div>:<div style={{color:'red',paddingTop:10}}>{this.state.validationMsg}</div>}


<div><Button type="submit">Add</Button></div>
</form>
<CredirCardList cardsList={this.state.cardsList}/>
 </div>
 );
    }

};

export default NewCreditCard;