import React from "react"
import ExpenseItem from "./ExpenseItem"

function ExpenseList({expenses, deleteExpense}){
    if(!Array.isArray(expenses) || expenses.length === 0){
       return <p>No Expenses yet</p>
    }
    return(
        <ul style={{listStyle: "none", padding: "0"}}>
            {expenses.map((exp)=>(
                <ExpenseItem
                key={exp.id}
                expense={exp}
                deleteExpense={deleteExpense}/>
            )

            )}
        </ul>
    )
}
export default ExpenseList;