const initialState = {
    screenState: 'home'
}


export const screenReducer = (action, state = initialState) => {
    switch(action.type) {
        case 'SCREEN_CHANGE':
            return {...state, screenState: action.payload}
        default:
            return initialState;
    }
}