import React, {useState} from "react"

function AddExpenseForm({addExpense}){
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(description.trim() ==="" ||amount.trim() ===""){
            alert("Description and Amount cannot be empty!")
            return;
        }

        const newExpense = {
            id : Date.now(),
            description,
            amount : parseFloat(amount)
        }
        addExpense(newExpense)
        setDescription("")
        setAmount("")
    }
    return(
        <form onSubmit={handleSubmit} style={{marginBottom : "20px", marginTop: "20px"}}>
            <input
            type="text"
            value={description}
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
            style={{padding : "5px", marginRight: "10px"}}/>

            <input
            type="number"
            value={amount}
            placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
            style={{padding: "5px", marginRight: "10px"}}/>

            <button type="submit">Add</button>

        </form>
    )
}
export default AddExpenseForm;