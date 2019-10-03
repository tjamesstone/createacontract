// INITIAL STATE

const initialState = {
    legal_name: '',
    terms_of_service: '',
    logo: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
}

//ACTION CONTS
const HANDLE_COMPANY_INFO = 'HANDLE_COMPANY_INFO'
const CLEAR_COMPANY_STATE = 'CLEAR_COMPANY_STATE'

//ACTION FUNCTIONS
export const handleCompanyInfo = (legal_name, terms_of_service, logo, address, city, state, zipcode) =>{
    let companyInfo = {legal_name, terms_of_service, logo, address, city, state, zipcode}
    return {
        type: HANDLE_COMPANY_INFO,
        payload: companyInfo
    }
}
export const clearCompanyState = () => {
    return {
        type: CLEAR_COMPANY_STATE
    }
}

//REDUCER
const companyReducer = (state = initialState, action) => {
    switch(action.type){
        case CLEAR_COMPANY_STATE:
            return {...state, legal_name: '', terms_of_service: '', logo: '', address: '', city: '', state: '', zipcode: ''}
        case HANDLE_COMPANY_INFO:
            return {...state, legal_name: action.payload.legalName, terms_of_service: action.payload.termsOfService, logo: action.payload.logo, address: action.payload.address, city: action.payload.city, state: action.payload.state, zipcode: action.payload.zipcode}
            default:
                return state
    }
}

export default companyReducer