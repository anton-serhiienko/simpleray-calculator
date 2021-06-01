import React from 'react'
import css from "./ResultBlock.module.css";


let ErrorBlock = (props) => {
    return (
        <div className={css.errorWrapper}>
            <p>Unfortunately we do not currently partner on projects smaller than 40 kW!</p>
            <div className={css.error}>
                <div>Estimated System Size:</div>
                <div>{props.projectSize / 1000}</div>
            </div>
        </div>
    )
}

export default ErrorBlock;