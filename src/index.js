import React from "react";
import ReactDOM from 'react-dom';
import Add, {Sub, Div, Multiply} from './App'
ReactDOM.render(
            <>  
            <h1>Simple Calc</h1>
                <ul>
                    <li>Sum of two number = {Add(5,8)}</li>
                    <li>Substraction of two numbers = {Sub(5,8)} </li>
                    <li>Div of two numbers = {Div(10,3)} </li>
                    <li>Multiply two numbers = {Multiply(78,2)} </li>
                </ul>

            </>    ,document.getElementById('root')
);