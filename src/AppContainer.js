import App from "./App";
import {connect} from "react-redux";
import {
    calculate,
    chooseExtraLarge,
    chooseLarge,
    chooseMedium,
    chooseSmall,
    updateBill,
    updateCost
} from "./redux/store";


let mapStateToProps = (state) =>{
    return {
        dollarsPerKW: state.dollarsPerKW,
        projectCost: state.projectCost,
        labor: state.labor,
        revenue: state.revenue,
        elBill: state.elBill,
        kWh: state.kWh,
        elCost: state.elCost,
        annualSpend: state.annualSpend,
        projectSize: state.projectSize,
        isInitialized: state.isInitialized
    }
}

export default connect(mapStateToProps,
    {chooseSmall,
    chooseMedium, updateBill,
        chooseLarge, updateCost,
        chooseExtraLarge, calculate})(App)