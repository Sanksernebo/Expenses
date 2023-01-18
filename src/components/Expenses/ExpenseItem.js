import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props){

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}€</div>
            </div>
        </Card>
    )
}

export default ExpenseItem