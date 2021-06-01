import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'


const SMALL = "SMALL"
const MEDIUM = "MEDIUM"
const LARGE = "LARGE"
const EXTRA_LARGE = "EXTRA_LARGE"
const UPDATE_EL_BILL = "UPDATE_EL_BILL"
const UPDATE_EL_COST = "UPDATE_EL_COST"
const SET_CALC_RESULT = "SET_CALC_RESULT"


let initialState = {

    dollarsPerKW: null,
    projectCost: null,
    labor: null,
    revenue: null,
    elBill: null,
    kWh: null,
    elCost: null,
    annualSpend: null,
    projectSize: null,
    isInitialized: false

}


const calcReducer = (state = initialState, action) => {

    switch (action.type) {
        case SMALL:
            return {
                ...state,
                dollarsPerKW: 2,
                projectCost: 80000,
                labor: 0.4,
                revenue: 32000,
                elBill: 333,
                kWh: 50000,
                elCost: 0.08,
                annualSpend: 4000,
                projectSize: 40000
                ,
                isInitialized: true
            }
        case MEDIUM:
            return {
                ...state,
                dollarsPerKW: 1.85,
                projectCost: 148000,
                labor: 0.37,
                revenue: 54760,
                elBill: 583,
                kWh: 100000,
                elCost: 0.07,
                annualSpend: 7000,
                projectSize: 80000,

                isInitialized: true
            }
        case LARGE:
            return {
                ...state,

                dollarsPerKW: 1.55,
                projectCost: 310000,
                labor: 0.35,
                revenue: 108500,
                elBill: 1250,
                kWh: 250000,
                elCost: 0.06,
                annualSpend: 15000,
                projectSize: 200000,

                isInitialized: true
            }
        case EXTRA_LARGE:
            return {
                ...state,
                dollarsPerKW: 1.38,
                projectCost: 1104000,
                labor: 0.32,
                revenue: 353280,
                elBill: 3333,
                kWh: 1000000,
                elCost: 0.04,
                annualSpend: 40000,
                projectSize: 800000,
                isInitialized: true
            }
        case UPDATE_EL_BILL:
            return {
                ...state, elBill: action.elBill
            }
        case UPDATE_EL_COST:
            return {
                ...state, elCost: action.elCost
            }
        case SET_CALC_RESULT:
            return {
                ...state,
                annualSpend: action.annualSpend,
                kWh: action.kWh,
                projectSize: action.projectSize,
                projectCost: action.projectCost,
                revenue: action.revenue
            }
        default:
            return state
    }
}

export const chooseSmall = () => ({type: SMALL})
export const chooseMedium = () => ({type: MEDIUM})
export const chooseLarge = () => ({type: LARGE})
export const chooseExtraLarge = () => ({type: EXTRA_LARGE})
export const updateBill = (elBill) => ({type: UPDATE_EL_BILL, elBill})
export const updateCost = (elCost) => ({type: UPDATE_EL_COST, elCost})

const setCalcResult = (annualSpend, kWh, projectSize, projectCost, revenue) =>
    ({type: SET_CALC_RESULT, annualSpend, kWh, projectSize, projectCost, revenue})

export const calculate = (dollarsPerKW, labor, elBill, elCost) => (dispatch) => {

    let annualSpend = Math.round(12 * elBill)
    let kWh = Math.round(annualSpend / elCost)
    let projectSize = Math.round(kWh * 0.8)
    let projectCost = Math.round(dollarsPerKW * projectSize)
    let revenue = Math.round(labor * projectCost)

    dispatch(setCalcResult(annualSpend, kWh, projectSize, projectCost, revenue))
}

export const store = createStore(calcReducer, applyMiddleware(thunkMiddleware))

window.store = store;

