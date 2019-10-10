// INITIAL STATE

const initialState = {
    complete: false,
}

//ACTION CONTS
const HANDLE_PAYMENT = 'HANDLE_PAYMENT'
const CLEAR_PAYMENT = 'CLEAR_PAYMENT'

//ACTION FUNCTIONS
export const handlePayment = (complete) => {
    return {
        
        type: HANDLE_PAYMENT,
        payload: complete
    }
}
export const clearPayment = () => {
    return {
        type: CLEAR_PAYMENT
    }
}

//REDUCER
const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_PAYMENT:
            return { ...state, complete: ''}
        case HANDLE_PAYMENT:
            // console.log(action.payload)
            return { ...state, complete: action.payload}
        default:
            return state
    }
}

export default paymentReducer