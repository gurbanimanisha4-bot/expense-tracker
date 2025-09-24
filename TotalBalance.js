import React from "react"

function TotalBalance({total}){
    return(
        <h2 style={{color: total <0 ? "red" : "green"}}>
            Total Spend: {total}₹
        </h2>
    )
}
export default TotalBalance;