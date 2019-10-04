// INITIAL STATE

const initialState = {
    effective_date: '',
    contract_length: '',
    autorenew: '',
    payment_frequency: '',
    collections_protection: '',
    chargeback_protection: ''

}

//ACTION CONTS
const HANDLE_TERMS_INFO = 'HANDLE_TERMS_INFO'
const CLEAR_TERMS_STATE = 'CLEAR_TERMS_STATE'

//ACTION FUNCTIONS
export const handleTermsInfo = (effective_date, contract_length, autorenew, payment_frequency, collections_protection, chargeback_protection) => {
    let termsInfo = { effective_date, contract_length, autorenew, payment_frequency, collections_protection, chargeback_protection}
    // console.log(companyInfo)
    return {
        type: HANDLE_TERMS_INFO,
        payload: termsInfo
    }
}
export const clearTermsState = () => {
    return {
        type: CLEAR_TERMS_STATE
    }
}

//REDUCER
const termsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_TERMS_STATE:
            return { ...state, effective_date: '', contract_length: '', autorenew: '', payment_frequency: '', collections_protection: '', chargeback_protection: '' }
        case HANDLE_TERMS_INFO:
            // console.log(action.payload)
            return { ...state, effective_date: action.payload.effective_date, contract_length: action.payload.contract_length, autorenew: action.payload.autorenew, payment_frequency: action.payload.payment_frequency, collections_protection: action.payload.collections_protection, chargeback_protection: action.payload.chargeback_protection}
        default:
            return state
    }
}

export default termsReducer