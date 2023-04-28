import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';



const Expenses = (props) => {
const[filteredYear, setFilteredYear] = useState('2020');

const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
}

    return(
<Card className="expenses">
    <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}>
<ExpenseItem
         title = {props.items[0].title}
         Date = {props.items[0].Date}
         Amount = {props.items[0].Amount}
         location= {props.items[0].location}
         
         />
<ExpenseItem
title = {props.items[1].title}
Date = {props.items[1].Date}
Amount = {props.items[1].Amount}
location = {props.items[1].location}
/>
<ExpenseItem
        title = {props.items[2].title}
         Date = {props.items[2].Date}
         Amount = {props.items[2].Amount}
         location = {props.items[2].location}
        />
        </ExpenseFilter>
</Card> 
    );
}
export default Expenses;
