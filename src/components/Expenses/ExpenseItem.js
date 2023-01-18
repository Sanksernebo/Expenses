import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log('Clicked!')
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}€</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    )
}

export default ExpenseItem