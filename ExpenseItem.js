import React from "react"

function ExpenseItem({expense, deleteExpense}){
    return(
        <li
        style={{
            border: "1px solid grey",
            margin: "5px auto",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: expense.amount <0 ? "#ffe5e5" : "#e5ffe5",
            width: "250px"

        }}>
            <span>
               {expense.description} - {expense.amount}₹
            </span>
            <button
            onClick={(e) => deleteExpense(expense.id)}
            style={{background: "red", color: "white", border:"none"}}>
                X
            </button>

        </li>
    )
}
export default ExpenseItem;