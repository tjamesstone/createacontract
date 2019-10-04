// INITIAL STATE

const initialState = {
    title: '',
    description: '',
    price: 0

}

//ACTION CONTS
const HANDLE_FEATURES_INFO = 'HANDLE_FEATURES_INFO'
const CLEAR_FEATURES_STATE = 'CLEAR_FEATURES_STATE'

//ACTION FUNCTIONS
export const handleFeaturesInfo = (title, description, price) => {
    let featuresInfo = { title, description, price}
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