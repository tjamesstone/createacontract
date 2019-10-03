// INITIAL STATE

const initialState = {
    client_name: '',
    signatory: ''
    
}

//ACTION CONTS
const HANDLE_CLIENT_INFO = 'HANDLE_CLIENT_INFO'
const CLEAR_CLIENT_STATE = 'CLEAR_CLIENT_STATE'

//ACTION FUNCTIONS
export const handleClientInfo = (client_name, signatory) =>{
    let clientInfo = {client_name, signatory}
    // console.log(companyInfo)
    return {
        type: HANDLE_CLIENT_INFO,
        payload: clientInfo
    }
}
export const clearClientState = () => {
    return {
        type: CLEAR_CLIENT_STATE
    }
}

//REDUCER
const clientReducer = (state = initialState, action) => {
    switch(action.type){
        case CLEAR_CLIENT_STATE:
            return {...state, client_name: '', signatory: ''}
        case HANDLE_CLIENT_INFO:
            console.log(action.payload)
            return {...state, client_name: action.payload.client_name, signatory: action.payload.signatory}
            default:
                return state
    }
}

export default clientReducer