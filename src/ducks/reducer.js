
//INITIAL STATE
const initialState = {
    email: '',
    password: '',
    first_name: '',
    last_name: ''
}
//ACTION CONSTS

const HANDLE_USER = 'HANDLE_USER'
const CLEAR_STATE = "CLEAR_STATE"


//ACTION FUNCTIONS

export const handleUser = (email, first_name, last_name) => {
    let user = {first_name, last_name, email}
    return {
        type: HANDLE_USER,
        payload: user
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
                
         default:
            return state
    }
}

//EXPORT

export default reducer