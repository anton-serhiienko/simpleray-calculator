import React from 'react'
import css from './ResultBlock.module.css'

let ResultsBlock = (props) => {
    return(
        <div className={css.results}>
            <div className={css.revenue}>
                <div>Potential Revenue/ Project:</div>
                <div>{props.revenue}</div>
            </div>
            <div className={css.others}>
                <div>estimate project costs: {props.projectCost}</div>
                <div>kWh: ${props.kWh}</div>
                <div>Annual Spend: {props.annualSpend}</div>
                <div>Estimate Project Size in Watts: {props.projectSize/1000}</div>
            </div>
        </div>
    )
}

export default ResultsBlock