import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  table {
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid  #535361;;
    border-collapse: collapse;
    color: #535361;
  }
  th,
  td,
  tr {
    padding: 5px;
  }
  th {
    text-align: left;
    color: #535361;
  }
  }
`;

export const MainTitle = styled.title`
 font-size:25px;
 text-align:center;
 color: #535361;
 display:block
 font-weight:600;
`;

export const SubTitle = styled.title`
 font-size:20px;
 text-align:left;
 color: #535361;
 display:block
 font-weight:600;
`;

export const Label = styled.label`
font-size: 16px;
line-height: 2;
display:block;
color: #535361;
`;

export const Button = styled.button`
font-size: 16px;
display: block;
color: #535361;
margin-top: 15px;
width: 90px;
color: white;
background-color: #d0c9c9;
border-color: #ece7e7;
`;

export const SubTitle1 = styled.title`
 font-size:20px;
 text-align:left;
 color: #535361;
 display:block
 font-weight:600;
 padding-top:20px;
 padding-bottom:20px;
`;