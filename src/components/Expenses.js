import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
function Expenses(props){
    console.log(props)
    return (
    <div>
        <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
        <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
    </div>
    )
}


export default Expenses