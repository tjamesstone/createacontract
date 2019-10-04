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
        type: HANDLE_FEATURES_INFO,
        payload: featuresInfo
    }
}
export const clearFeaturesState = () => {
    return {
        type: CLEAR_FEATURES_STATE
    }
}

//REDUCER
const featuresReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_FEATURES_STATE:
            return { ...state, title: '', description: '', price: '' }
        case HANDLE_FEATURES_INFO:
            console.log(action.payload)
            return { ...state, title: action.payload.title, description: action.payload.description, price: action.payload.price }
        default:
            return state
    }
}

export default featuresReducer