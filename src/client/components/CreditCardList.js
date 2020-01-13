import React from  'react';
import {GlobalStyle,SubTitle1} from '../styles/style.js';

class CreditCardList extends React.Component {

    constructor(props){
        super(props)
    }

render(){ 
    let  renderList = "";
    if(this.props.cardsList != undefined){
    renderList =   this.props.cardsList.map(function(data,index){
            return( <tr key={index}>
                 <td>{data.name}</td>
                 <td>{data.cardNumber}</td>
                 <td>{data.balance}</td>
                 <td>{data.limit}</td>
             </tr>);
             })
     }
  
return(
<div>
<div><SubTitle1>Existing Cards</SubTitle1> </div>
<GlobalStyle/>
<table>
<thead>
<tr>
<th> Name </th>
<th> Card Number </th>
<th> Balance </th>
<th> Limit </th>
</tr>
</thead>
<tbody>
{renderList}
</tbody>

</table>
</div>
);
    }
}


export default CreditCardList;