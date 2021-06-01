import React from 'react'
import css from "./Calculator.module.css";
import checkPhoto from "../assets/check.png";
import coinPhoto from "../assets/coin.png";

let Calculator = (props) => {
    return(
        <div className={css.calculator}>

            <div>
                <img src={checkPhoto} alt=''/>
                <p>Estimated Monthly Electric Bill (kWh only)</p>
            </div>

            <input type='text'
                   placeholder="Electric Bill"
                   value={props.elBill}
                   onChange={props.onBillChange}/>

            <button onClick={props.handleBillClick}>Edit</button>


            <div>
                <img src={coinPhoto} alt=''/>
                <p>Cost of Electricity:</p>
            </div>

            <input type='text'
                   placeholder="Cost Of Electricity"
                   value={props.elCost}
                   onChange={props.onCostChange}/>

            <button onClick={props.handleCostClick}>Edit</button>

        </div>
    )
}

export default Calculator