import {useState, useEffect} from "react"
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalBalance from "./components/TotalBalance"

function App() {
  const [expenses, setExpenses] = useState([])

  useEffect(()=>{
    const savedExpenses = JSON.parse(localStorage.getItem("expenses"))
    if(savedExpenses)
      setExpenses(savedExpenses)
  },[])

  useEffect(()=>{
    localStorage.setItem("expenses", JSON.stringify(expenses))
  },[expenses])

  const addExpense=(expense)=>{
    setExpenses([...expenses, expense]);

  }
  const deleteExpense=(id)=>{
    setExpenses(expenses.filter((exp)=> exp.id !== id))
  }

  const total = expenses.reduce((acc,exp) => acc + exp.amount, 0)
  return (
  
    <div style={{textAlign: "center", marginTop: "30px"}}>
      <h1>💰 Monthly Expense Tracker</h1>
      <AddExpenseForm addExpense={addExpense}/>
      <TotalBalance total={total}/>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
    </div>
  );
}

export default App;
