
//INITIAL STATE
const initialState = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    legalName: '',
    termsOfService: '',
    logo: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''

}
//ACTION CONSTS

const HANDLE_USER = 'HANDLE_USER'
const CLEAR_STATE = "CLEAR_STATE"
const HANDLE_COMPANY_INFO = 'HANDLE_COMPANY_INFO'
const CLEAR_COMPANY_STATE = 'CLEAR_COMPANY_STATE'

//ACTION FUNCTIONS

export const handleUser = (email, first_name, last_name) => {
    let user = {first_name, last_name, email}
    return {
        type: HANDLE_USER,
        payload: user
    }
}
export const handleCompanyInfo = (legalName, termsOfService, logo, address, city, state, zipcode) =>{
    let companyInfo = {legalName, termsOfService, logo, address, city, state, zipcode}
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

export const clearState = () => {
    return {
        type: CLEAR_STATE
    }
}

//REDUCER
const reducer = (state = initialState, action) => {
    switch(action.type){
        case CLEAR_STATE:
            console.log('state was cleared')
            return{...state, email: '', first_name: '', last_name: ''}
        case HANDLE_USER:
            return {...state, email: action.payload.email, first_name: action.payload.first_name, last_name: action.payload.last_name}
        case CLEAR_COMPANY_STATE:
            return {...state, legalName: '', termsOfService: '', logo: '', address: '', city: '', state: '', zipcode: ''}
        case HANDLE_COMPANY_INFO:
            return {...state, legalName: action.payload.legalName, termsOfService: action.payload.termsOfService, logo: action.payload.logo, address: action.payload.address, city: action.payload.city, state: action.payload.state, zipcode: action.payload.zipcode}
        default:
            return state
    }
}

//EXPORT

export default reducer