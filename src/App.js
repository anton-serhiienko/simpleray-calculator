import React, {useEffect, useState} from 'react'
import css from './App.module.css';
import ProjectSizeSelect from './components/ProjectSizeSelect'
import Calculator from "./components/Calculator";
import ResultsBlock from "./components/ResultsBlock";
import ErrorBlock from "./components/ErrorBlock"

let App = (props) => {

    let [elBill, setElBill] = useState(props.elBill)
    let [elCost, setElCost] = useState(props.elCost)

    useEffect(() => {
        setElBill(props.elBill)
        setElCost(props.elCost)
    }, [props.elBill, props.elCost])


    let onBillChange = (e) => {
        setElBill(e.currentTarget.value)
    }


    let handleBillClick = () => {
        props.updateBill(elBill)
        props.calculate(props.dollarsPerKW, props.labor, elBill, elCost)
    }

    let onCostChange = (e) => {
        setElCost(e.currentTarget.value)
    }

    let handleCostClick = () => {
        props.updateCost(elCost)
        props.calculate(props.dollarsPerKW, props.labor, elBill, elCost)
    }
    // debugger
    return (
        // block with buttons
        <div className={css.appWrapper}>
            <ProjectSizeSelect chooseSmall={props.chooseSmall}
                               chooseMedium={props.chooseMedium}
                               chooseLarge={props.chooseLarge}
                               chooseExtraLarge={props.chooseExtraLarge}/>

                               {/*Inputs for calculations*/}

            <Calculator elBill={elBill}
                        onBillChange={onBillChange}
                        handleBillClick={handleBillClick}
                        elCost={elCost}
                        onCostChange={onCostChange}
                        handleCostClick={handleCostClick}/>


            {/*Check on first calculation and projectSize Validate*/}

            {!!props.isInitialized ? (((props.projectSize / 1000) < 40) ?
                <ErrorBlock projectSize={props.projectSize}/>
                :
                <ResultsBlock revenue={props.revenue}
                              projectCost={props.projectCost}
                              kWh={props.kWh}
                              annualSpend={props.annualSpend}
                              projectSize={props.projectSize}/>
            ):null
            }
        </div>
    );
}

export default App;
